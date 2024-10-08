import { Header } from '@/src/components/Header'
import { Typography } from '@/src/components/Typography'
import { Stack } from 'expo-router'
import { PercentageCard } from '../components/PercentageCard'
import { useMetrics } from '@/src/contexts/useMetrics'

import * as S from './styles'

export default function Metrics() {
  const {
    isAboveDietPercentage,
    countOutsideDiet,
    highestSequenceWithinDiet,
    countMealsRegistered,
    countWithinDiet,
  } = useMetrics()

  const colorScheme = isAboveDietPercentage ? 'success' : 'danger'

  return (
    <S.Container colorScheme={colorScheme}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <Header colorScheme={colorScheme}>
              <PercentageCard />
            </Header>
          ),
        }}
      />

      <S.Content
        style={{
          shadowOpacity: 0.05,
          shadowColor: '#000',
          shadowOffset: {
            height: -8,
            width: 0,
          },
          shadowRadius: 6,
        }}
      >
        <S.Title bold size="sm">
          Estatísticas gerais
        </S.Title>

        <S.MetricSection>
          <Typography bold size="xl">
            {highestSequenceWithinDiet}
          </Typography>
          <Typography size="sm">
            melhor sequência de pratos dentro da dieta
          </Typography>
        </S.MetricSection>

        <S.MetricSection>
          <Typography bold size="xl">
            {countMealsRegistered}
          </Typography>
          <Typography size="sm">refeições registradas</Typography>
        </S.MetricSection>

        <S.MetricsBoxRow>
          <S.MetricSection colorScheme="success">
            <Typography bold size="xl">
              {countWithinDiet}
            </Typography>
            <Typography size="sm" center>
              refeições dentro da dieta
            </Typography>
          </S.MetricSection>

          <S.MetricSection colorScheme="danger">
            <Typography bold size="xl">
              {countOutsideDiet}
            </Typography>
            <Typography center size="sm">
              refeições fora da dieta
            </Typography>
          </S.MetricSection>
        </S.MetricsBoxRow>
      </S.Content>
    </S.Container>
  )
}
