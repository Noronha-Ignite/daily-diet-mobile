import { useMeals } from '@/src/contexts/useMeals'
import { FlatList } from 'react-native'

import * as S from './styles'
import { Typography } from '@/src/components/Typography'
import React, { useMemo } from 'react'
import { Meal } from '@/src/models/Meal'
import { Hamburger } from 'phosphor-react-native'
import { useTheme } from 'styled-components/native'

const padNumberWithZero = (number: number, length: number) =>
  number.toString().padStart(length, '0')

export const MealList = () => {
  const { colors } = useTheme()
  const { meals } = useMeals()

  const mealsGroupedByDay = useMemo(() => {
    const groups = new Map<string, Array<WithId<Meal>>>()

    for (const meal of meals) {
      const eatenDate = new Date(meal.eatenAt)

      const mapKeyByDate = `${padNumberWithZero(eatenDate.getDate(), 2)}.${padNumberWithZero(eatenDate.getMonth(), 2)}.${padNumberWithZero(eatenDate.getFullYear(), 4)}`

      const existingGroup = groups.get(mapKeyByDate) ?? []

      groups.set(mapKeyByDate, [...existingGroup, meal])
    }

    return groups
  }, [meals])

  return (
    <FlatList
      data={Array.from(mealsGroupedByDay.entries())}
      contentContainerStyle={{
        marginTop: 24,
        gap: 32,
        height: '100%',
      }}
      fadingEdgeLength={24}
      ListEmptyComponent={
        <S.EmptyListContainer>
          <Hamburger size={24} color={colors.base600} />
          <Typography color="base600">
            Nenhuma refeição registrada ainda
          </Typography>
        </S.EmptyListContainer>
      }
      renderItem={({ item: [groupDate, meals] }) => {
        return (
          <S.DateGroupContainer>
            <Typography bold color="base700" size="lg">
              {groupDate}
            </Typography>

            {meals.map((item) => {
              const eatenDate = new Date(item.eatenAt)

              return (
                <S.MealListItem activeOpacity={0.7} key={item.id}>
                  <Typography>
                    {padNumberWithZero(eatenDate.getHours(), 2)}:
                    {padNumberWithZero(eatenDate.getMinutes(), 2)}
                  </Typography>

                  <S.Divider />

                  <Typography style={{ flex: 1 }}>{item.name}</Typography>

                  <S.StatusIndicator
                    color={item.withinDiet ? 'success' : 'danger'}
                  />
                </S.MealListItem>
              )
            })}
          </S.DateGroupContainer>
        )
      }}
      keyExtractor={([groupKey]) => groupKey}
    />
  )
}
