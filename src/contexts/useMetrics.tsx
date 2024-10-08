import { createContext, PropsWithChildren, useContext } from 'react'
import { Meal } from '@/src/models/Meal'

interface MetricsContextProps {
  withinDietPercentage: number
  isAboveDietPercentage: boolean
  countMealsRegistered: number
  highestSequenceWithinDiet: number
  countWithinDiet: number
  countOutsideDiet: number
}

const MetricsContext = createContext({} as MetricsContextProps)

const DESIRED_WITHIN_DIET_PERCENTAGE = 0.5

const getHighestSequenceOfWithinDiet = (meals: Meal[]) => {
  let highest = 0
  let current = 0

  meals.forEach((meal) => {
    current = meal.withinDiet ? current + 1 : 0

    if (current > highest) {
      highest = current
    }
  })

  return highest
}

export const MetricsContextProvider = ({ children }: PropsWithChildren) => {
  const meals: Meal[] = [
    { withinDiet: true },
    { withinDiet: true },
    { withinDiet: true },
    { withinDiet: false },
    { withinDiet: true },
    { withinDiet: false },
  ]

  const countWithinDiet = meals.reduce((count, { withinDiet }) => {
    if (withinDiet) {
      return count + 1
    }

    return count
  }, 0)

  const countOutsideDiet = meals.length - countWithinDiet

  const highestSequenceWithinDiet = getHighestSequenceOfWithinDiet(meals)
  const countMealsRegistered = meals.length
  const withinDietPercentage = countWithinDiet / meals.length
  const isAboveDietPercentage =
    withinDietPercentage >= DESIRED_WITHIN_DIET_PERCENTAGE

  return (
    <MetricsContext.Provider
      value={{
        withinDietPercentage,
        isAboveDietPercentage,
        highestSequenceWithinDiet,
        countMealsRegistered,
        countOutsideDiet,
        countWithinDiet,
      }}
    >
      {children}
    </MetricsContext.Provider>
  )
}

export const useMetrics = () => useContext(MetricsContext)
