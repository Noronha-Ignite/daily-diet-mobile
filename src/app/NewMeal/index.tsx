import { WithHeader } from '@/src/components/Header'
import { Typography } from '@/src/components/Typography'

import { useRouter } from 'expo-router'
import { useMeals } from '@/src/contexts/useMeals'
import { MealForm } from '../components/MealForm'
import { MealFormType } from '../components/MealForm/schema'

const NewMealHeader = () => (
  <Typography bold color="base700" size="lg">
    Nova refeição
  </Typography>
)

function NewMeal() {
  const router = useRouter()
  const { addMeal } = useMeals()

  const onSubmit = async (data: MealFormType) => {
    const [day, month, year] = data.date
      .split('/')
      .map((value) => Number(value))
    const [hours, minutes] = data.dateTime
      .split(':')
      .map((value) => Number(value))

    const mealDate = new Date(year, month, day, hours, minutes)

    addMeal({
      name: data.name,
      description: data.description ?? '',
      eatenAt: mealDate.toString(),
      withinDiet: data.isWithinDiet === 'YES',
    })

    router.replace('/NewMeal/NewMealSuccess')
    router.setParams({
      isWithinDiet: data.isWithinDiet,
    })
  }

  return <MealForm onSubmit={onSubmit} />
}

export default () => WithHeader(NewMeal, NewMealHeader)
