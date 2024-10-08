import styled from 'styled-components/native'

export const HeaderContainer = styled.View<{
  colorScheme: 'base' | 'danger' | 'success'
}>`
  background-color: ${({ theme, colorScheme }) =>
    theme.colors[`${colorScheme}300`]};

  padding: 0 16px;
`

export const HeaderContent = styled.SafeAreaView`
  padding: 16px 24px;

  flex-direction: row;

  justify-content: space-between;
  align-items: start;
`

export const GoBackBtn = styled.TouchableOpacity``
