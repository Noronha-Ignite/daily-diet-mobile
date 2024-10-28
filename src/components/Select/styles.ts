import styled from 'styled-components/native'

type ColorScheme = 'success' | 'danger'

export const SelectContainer = styled.View`
  width: 100%;
  gap: 8px;
`

export const OptionsContainer = styled.View`
  gap: 8px;
  flex-direction: row;
`

export const Option = styled.TouchableOpacity<{
  active?: boolean
  colorScheme: ColorScheme
}>`
  flex: 1;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 16px;

  border-width: 1px;
  border-color: ${({ theme, active, colorScheme }) =>
    active ? theme.colors[`${colorScheme}700`] : theme.colors.base200};
  background-color: ${({ theme, active, colorScheme }) =>
    active ? theme.colors[`${colorScheme}300`] : theme.colors.base200};
  border-radius: 6px;
`
