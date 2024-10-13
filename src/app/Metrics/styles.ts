import { Typography } from '@/src/components/Typography'
import styled from 'styled-components/native'

export const Title = styled(Typography)`
  margin-bottom: 12px;
`

export const MetricsBox = styled.View`
  flex: 1;
  gap: 12px;

  margin-top: 24px;
`

export const MetricsBoxRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 12px;
`

export const MetricSection = styled.View<{
  colorScheme?: 'danger' | 'success' | 'base'
}>`
  padding: 16px;

  background-color: ${({ colorScheme = 'base', theme }) => {
    if (colorScheme === 'base') {
      return theme.colors.base200
    }

    return theme.colors[`${colorScheme}300`]
  }};

  gap: 8px;

  flex: 1;

  border-radius: 8px;

  justify-content: center;
  align-items: center;

  max-height: 100px;

  width: 100%;
`
