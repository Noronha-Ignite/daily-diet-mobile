import { Typography } from '@/src/components/Typography'
import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { useRouter } from 'expo-router'
import { useMetrics } from '@/src/contexts/useMetrics'

interface PercentageCardProps {
  shouldOpenMetrics?: boolean
}

export const PercentageCard = ({
  shouldOpenMetrics = false,
}: PercentageCardProps) => {
  const theme = useTheme()
  const router = useRouter()

  const { isAboveDietPercentage, withinDietPercentage } = useMetrics()

  const handlePressCard = () => {
    if (shouldOpenMetrics) {
      router.push('/Metrics')
    }
  }

  const colorScheme = isAboveDietPercentage ? 'success' : 'danger'

  const percentage = (withinDietPercentage * 100)
    .toFixed(2)
    .replace(/[.,]00$/, '')
    .replace('.', ',')

  return (
    <S.Container
      activeOpacity={shouldOpenMetrics ? 0.7 : 1}
      onPress={handlePressCard}
      colorScheme={colorScheme}
    >
      <Typography size="2xl" bold>
        {percentage}%
      </Typography>

      <Typography color="base600" size="sm">
        das refeições dentro da dieta
      </Typography>

      {shouldOpenMetrics && (
        <S.ClickableIndicatorIcon color={theme.colors.success700} size={24} />
      )}
    </S.Container>
  )
}
