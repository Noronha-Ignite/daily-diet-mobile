import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
} from 'react'
import { Meal } from '@/src/models/Meal'
import { generateUUID } from '../utils/generateUUID'
import { usePersistedState } from '../hooks/usePersistedState'

interface MealsContextProps {
  meals: WithId<Meal>[]

  addMeal(meal: Meal): void
  removeMeal(id: string): void
  editMeal(id: string, newMeal: Meal): void

  getMeal: (id: string) => WithId<Meal> | undefined
}

const MealsContext = createContext({} as MealsContextProps)

export const MealsContextProvider = ({ children }: PropsWithChildren) => {
  const [meals, setMeals] = usePersistedState<WithId<Meal>[]>(
    '@daily-diet/meals',
    [],
  )

  const addMeal = (meal: Meal) => {
    const id = generateUUID()

    const sortedMeals = sortMealsByDate([...meals, { ...meal, id }])

    setMeals(sortedMeals)
  }

  const removeMeal = (id: string) => {
    const sortedMeals = sortMealsByDate(meals.filter((meal) => meal.id !== id))

    setMeals(sortedMeals)
  }

  const editMeal = (id: string, newMeal: Meal) => {
    const sortedMeals = sortMealsByDate(
      meals.map((meal) => {
        if (meal.id === id) {
          return { ...newMeal, id }
        }

        return meal
      }),
    )

    setMeals(sortedMeals)
  }

  const getMeal = useCallback(
    (id: string) => {
      return meals.find((meal) => meal.id === id)
    },
    [meals],
  )

  const sortMealsByDate = useCallback((meals: WithId<Meal>[]) => {
    const sortedMeals = meals
      .map((meal) => ({
        ...meal,
        eatenAt: new Date(meal.eatenAt).getTime(),
      }))
      .sort((a, b) => b.eatenAt - a.eatenAt)
      .map<WithId<Meal>>((meal) => ({
        ...meal,
        eatenAt: new Date(meal.eatenAt).toString(),
      }))

    return sortedMeals
  }, [])

  return (
    <MealsContext.Provider
      value={{
        meals,

        addMeal,
        removeMeal,
        editMeal,

        getMeal,
      }}
    >
      {children}
    </MealsContext.Provider>
  )
}

export const useMeals = () => useContext(MealsContext)
