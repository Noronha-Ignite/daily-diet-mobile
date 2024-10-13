import { Stack, useRouter } from 'expo-router'

import * as S from './styles'
import { useTheme } from 'styled-components/native'
import { ComponentType, PropsWithChildren } from 'react'
import { ArrowLeft } from 'phosphor-react-native'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface HeaderProps {
  colorScheme?: 'base' | 'danger' | 'success'
}

const Header = ({
  colorScheme = 'base',
  children,
}: PropsWithChildren<HeaderProps>) => {
  const { canGoBack, back } = useRouter()
  const { top } = useSafeAreaInsets()
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
          <S.GoBackBtn onPress={handleBack} safeAreaOffset={top}>
            <ArrowLeft color={theme.colors[`${colorScheme}700`]} />
          </S.GoBackBtn>
        )}

        {children}
        <View />
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}

type WithHeaderOptions = {
  colorScheme?: 'base' | 'success' | 'danger'
}
export const WithHeader = (
  Component: ComponentType,
  HeaderContent: ComponentType,
  options: WithHeaderOptions = {
    colorScheme: 'base',
  },
) => {
  const { colorScheme = 'base' } = options

  return (
    <S.WithHeaderContainer colorScheme={colorScheme}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <Header colorScheme={colorScheme}>
              <HeaderContent />
            </Header>
          ),
        }}
      />

      <S.WithHeaderContent
        style={{
          shadowOpacity: 0.05,
          shadowColor: '#000',
          shadowOffset: {
            height: -8,
            width: 0,
          },
          shadowRadius: 6,
        }}
      >
        <Component />
      </S.WithHeaderContent>
    </S.WithHeaderContainer>
  )
}
