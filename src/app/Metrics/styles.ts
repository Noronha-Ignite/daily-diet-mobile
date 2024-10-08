import { Typography } from '@/src/components/Typography'
import styled from 'styled-components/native'

export const Container = styled.View<{
  colorScheme: 'success' | 'danger'
}>`
  background-color: ${({ colorScheme, theme }) =>
    theme.colors[`${colorScheme}300`]};
  flex: 1;

  padding-top: 16px;
`

export const Content = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.base100};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 32px 24px;

  align-items: center;

  gap: 12px;
`

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
