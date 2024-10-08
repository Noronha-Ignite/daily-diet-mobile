import { ActivityIndicator } from 'react-native'
import { theme, useAppFonts } from '../styles/theme'
import { ThemeProvider } from 'styled-components'
import { GlobalWrapper } from './GlobalContainer'
import { Stack } from 'expo-router'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { MetricsContextProvider } from '../contexts/useMetrics'

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
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <MetricsContextProvider>
          <GlobalWrapper>
            <Stack
              screenOptions={{
                headerShown: false,
                animation: 'slide_from_bottom',
              }}
            />
          </GlobalWrapper>
        </MetricsContextProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
