import { Typography } from '@/src/components/Typography'
import { Redirect, useLocalSearchParams, useRouter } from 'expo-router'

import * as S from './styles'
import { formatDate, formatTime } from '@/src/utils/format'
import { Button } from '@/src/components/Button'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import { WithHeader } from '@/src/components/Header'
import React from 'react'
import { useMeals } from '@/src/contexts/useMeals'
import { Meal } from '@/src/models/Meal'

interface MealDetailsComponentProps {
  meal: WithId<Meal>
}

function MealDetailsComponent({ meal }: MealDetailsComponentProps) {
  const router = useRouter()

  const eatenAtDateString = formatDate(new Date(meal.eatenAt))
  const eatenAtTimeString = formatTime(new Date(meal.eatenAt))

  return (
    <S.Container>
      <S.Content>
        <S.MealInfo>
          <Typography size="lg" bold>
            {meal.name}
          </Typography>
          <Typography size="md">{meal.description}</Typography>
        </S.MealInfo>

        <S.MealInfo>
          <Typography bold>Data e Hora</Typography>
          <Typography size="md">
            {eatenAtDateString} às {eatenAtTimeString}
          </Typography>
        </S.MealInfo>

        <S.WithinDietBadge>
          <S.BadgeIdentifier
            colorScheme={meal.withinDiet ? 'success' : 'danger'}
          />

          <Typography>
            {meal.withinDiet ? 'dentro da dieta' : 'fora da dieta'}
          </Typography>
        </S.WithinDietBadge>
      </S.Content>

      <S.Actions>
        <Button
          Icon={PencilSimpleLine}
          onPress={() => router.push(`/MealDetails/EditMeal/${meal.id}`)}
        >
          Editar refeição
        </Button>
        <Button Icon={Trash} variant="border">
          Excluir refeição
        </Button>
      </S.Actions>
    </S.Container>
  )
}

export default function MealDetails() {
  const { mealId } = useLocalSearchParams<{ mealId: string }>()
  const { getMeal } = useMeals()

  const currentMeal = getMeal(mealId)

  if (!currentMeal) {
    return <Redirect href="/" />
  }

  const colorScheme = currentMeal!.withinDiet ? 'success' : 'danger'

  return WithHeader(
    () => <MealDetailsComponent meal={currentMeal} />,
    () => (
      <Typography bold color="base700" size="lg">
        Refeição
      </Typography>
    ),
    {
      colorScheme,
    },
  )
}
