import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  width: 100%;
`

export const Content = styled.View`
  flex: 1;

  align-items: flex-start;

  gap: 24px;
`

export const MealInfo = styled.View`
  gap: 8px;
`

export const WithinDietBadge = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;

  padding: 8px 16px;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.base200};
`

export const BadgeIdentifier = styled.View<{
  colorScheme: 'success' | 'danger'
}>`
  width: 8px;
  height: 8px;

  border-radius: 50%;

  background-color: ${({ theme, colorScheme }) =>
    theme.colors[`${colorScheme}700`]};
`

export const Actions = styled.View`
  gap: 8px;
`
