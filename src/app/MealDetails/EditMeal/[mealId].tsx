import { WithHeader } from '@/src/components/Header'
import { Typography } from '@/src/components/Typography'
import { useMeals } from '@/src/contexts/useMeals'
import { Meal } from '@/src/models/Meal'
import { useLocalSearchParams, Redirect, useRouter } from 'expo-router'
import { MealForm } from '../../components/MealForm'
import { MealFormType } from '../../components/MealForm/schema'

interface EditMealComponentProps {
  meal: WithId<Meal>
}
function EditMealComponent({ meal }: EditMealComponentProps) {
  const router = useRouter()
  const { editMeal } = useMeals()

  const onSubmit = async (data: MealFormType) => {
    const [day, month, year] = data.date
      .split('/')
      .map((value) => Number(value))
    const [hours, minutes] = data.dateTime
      .split(':')
      .map((value) => Number(value))

    const mealDate = new Date(year, month, day, hours, minutes)

    editMeal(meal.id, {
      name: data.name,
      description: data.description ?? '',
      eatenAt: mealDate.toString(),
      withinDiet: data.isWithinDiet === 'YES',
    })

    router.back()
  }

  return <MealForm onSubmit={onSubmit} initialData={meal} />
}

export default function EditMeal() {
  const { mealId } = useLocalSearchParams<{ mealId: string }>()
  const { getMeal } = useMeals()

  const currentMeal = getMeal(mealId)

  if (!currentMeal) {
    return <Redirect href="/" />
  }

  const colorScheme = currentMeal!.withinDiet ? 'success' : 'danger'

  return WithHeader(
    () => <EditMealComponent meal={currentMeal} />,
    () => (
      <Typography bold color="base700" size="lg">
        Editar refeição
      </Typography>
    ),
    {
      colorScheme,
    },
  )
}
