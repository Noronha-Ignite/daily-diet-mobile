import { ArrowUpRight } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity<{
  colorScheme: 'success' | 'danger'
}>`
  background-color: ${({ theme, colorScheme }) =>
    theme.colors[`${colorScheme}300`]};

  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 4px;

  padding: 20px;

  position: relative;

  border-radius: 8px;
`

export const ClickableIndicatorIcon = styled(ArrowUpRight)`
  position: absolute;
  top: 12px;
  right: 12px;
`
