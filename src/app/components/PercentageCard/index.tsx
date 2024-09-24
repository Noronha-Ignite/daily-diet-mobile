import { Typography } from '@/src/components/Typography'
import * as S from './styles'
import { useTheme } from 'styled-components/native'

export const PercentageCard = () => {
  const theme = useTheme()

  return (
    <S.Container activeOpacity={0.7}>
      <Typography size="2xl" bold>
        90,87%
      </Typography>

      <Typography color="base600" size="sm">
        das refeições dentro da dieta
      </Typography>

      <S.ClickableIndicatorIcon color={theme.colors.success700} size={24} />
    </S.Container>
  )
}
