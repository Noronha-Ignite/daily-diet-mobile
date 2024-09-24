import { ActivityIndicator } from 'react-native'
import { theme, useAppFonts } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalWrapper } from './GlobalContainer'
import { Stack } from 'expo-router'
import React from 'react'

export default function RootLayout() {
  const fontsLoaded = useAppFonts()

  if (!fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalWrapper>
          <ActivityIndicator size="large" />
        </GlobalWrapper>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalWrapper>
        <Stack
          screenOptions={{ headerShown: false, animation: 'slide_from_bottom' }}
        />
      </GlobalWrapper>
    </ThemeProvider>
  )
}
