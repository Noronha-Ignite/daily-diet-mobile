import { createContext, PropsWithChildren, useContext, useState } from 'react'
import { Meal } from '@/src/models/Meal'
import { generateUUID } from '../utils/generateUUID'

interface MealsContextProps {
  meals: WithId<Meal>[]

  addMeal(meal: Meal): Promise<void>
  removeMeal(id: string): Promise<void>
  editMeal(id: string, newMeal: Meal): Promise<void>
}

const MealsContext = createContext({} as MealsContextProps)

export const MealsContextProvider = ({ children }: PropsWithChildren) => {
  const [meals, setMeals] = useState<WithId<Meal>[]>([])

  const addMeal = async (meal: Meal) => {
    const id = generateUUID()

    setMeals((prev) => [...prev, { ...meal, id }])
  }

  const removeMeal = async (id: string) => {
    setMeals((prev) => prev.filter((meal) => meal.id !== id))
  }

  const editMeal = async (id: string, newMeal: Meal) => {
    setMeals((prev) =>
      prev.map((meal) => {
        if (meal.id === id) {
          return { ...newMeal, id }
        }

        return meal
      }),
    )
  }

  return (
    <MealsContext.Provider
      value={{
        meals,

        addMeal,
        removeMeal,
        editMeal,
      }}
    >
      {children}
    </MealsContext.Provider>
  )
}

export const useMeals = () => useContext(MealsContext)
