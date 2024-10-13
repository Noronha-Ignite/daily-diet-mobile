import { WithHeader } from '@/src/components/Header'
import { Typography } from '@/src/components/Typography'
import { PercentageCard } from '../components/PercentageCard'
import { useMetrics } from '@/src/contexts/useMetrics'

import * as S from './styles'

interface MetricsProps {
  metrics: {
    countMealsRegistered: number
    highestSequenceWithinDiet: number
    countWithinDiet: number
    countOutsideDiet: number
  }
}

function Metrics({ metrics }: MetricsProps) {
  const {
    countOutsideDiet,
    highestSequenceWithinDiet,
    countMealsRegistered,
    countWithinDiet,
  } = metrics

  return (
    <>
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
    </>
  )
}

export default () => {
  const { isAboveDietPercentage, ...metrics } = useMetrics()

  const colorScheme = isAboveDietPercentage ? 'success' : 'danger'

  return WithHeader(() => <Metrics metrics={metrics} />, PercentageCard, {
    colorScheme,
  })
}
