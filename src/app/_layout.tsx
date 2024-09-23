import { Stack } from 'expo-router'
import { View, ActivityIndicator } from 'react-native'
import { theme, useAppFonts } from '../styles/theme'
import { ThemeProvider } from 'styled-components'

export default function RootLayout() {
  const fontsLoaded = useAppFonts()

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  )
}
