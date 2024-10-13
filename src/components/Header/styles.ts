import styled from 'styled-components/native'

export const HeaderContainer = styled.View<{
  colorScheme: 'base' | 'danger' | 'success'
}>`
  background-color: ${({ theme, colorScheme }) =>
    theme.colors[`${colorScheme}300`]};

  padding: 0 16px;
`

export const HeaderContent = styled.SafeAreaView`
  margin-bottom: 8px;

  flex-direction: row;

  justify-content: center;
  align-items: flex-end;

  position: relative;
`

export const GoBackBtn = styled.TouchableOpacity<{ safeAreaOffset: number }>`
  position: absolute;
  left: 0;
  top: ${({ safeAreaOffset }) => safeAreaOffset}px;
`

export const WithHeaderContainer = styled.View<{
  colorScheme: 'success' | 'danger' | 'base'
}>`
  background-color: ${({ colorScheme, theme }) =>
    theme.colors[`${colorScheme}300`]};
  flex: 1;

  padding-top: 16px;
`

export const WithHeaderContent = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.base100};

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  padding: 32px 24px;

  align-items: center;

  gap: 12px;
`
