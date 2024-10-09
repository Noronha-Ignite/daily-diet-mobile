import styled from 'styled-components/native'

export const DateGroupContainer = styled.View`
  flex-direction: column;
  gap: 8px;
`

export const MealListItem = styled.TouchableOpacity`
  padding: 12px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.base300};
  border-radius: 6px;

  flex-direction: row;
`

export const Divider = styled.View`
  margin: 0 12px;
  height: 100%;
  width: 1px;
  background-color: ${({ theme }) => theme.colors.base400};
`

export const StatusIndicator = styled.View<{ color: 'success' | 'danger' }>`
  width: 16px;
  height: 16px;

  background-color: ${({ theme, color }) => theme.colors[`${color}500`]};

  border-radius: 50%;
`

export const EmptyListContainer = styled.View`
  justify-content: center;
  align-items: center;

  flex-direction: column;

  gap: 12px;
`
