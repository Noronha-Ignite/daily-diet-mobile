import { useRouter } from 'expo-router'

import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { PropsWithChildren } from 'react'
import { ArrowLeft } from 'phosphor-react-native'
import { View } from 'react-native'

interface HeaderProps {
  colorScheme?: 'base' | 'danger' | 'success'
}

export const Header = ({
  colorScheme = 'base',
  children,
}: PropsWithChildren<HeaderProps>) => {
  const { canGoBack, back } = useRouter()
  const theme = useTheme()

  const handleBack = () => {
    if (canGoBack()) {
      back()
    }
  }

  return (
    <S.HeaderContainer colorScheme={colorScheme}>
      <S.HeaderContent>
        {canGoBack() && (
          <S.GoBackBtn onPress={handleBack}>
            <ArrowLeft color={theme.colors[`${colorScheme}700`]} />
          </S.GoBackBtn>
        )}
        {children}
        <View />
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
