import { PropsWithChildren } from 'react'
import { View, SafeAreaView } from 'react-native'
import { useTheme } from 'styled-components/native'

export const GlobalWrapper = ({ children }: PropsWithChildren) => {
  const theme = useTheme()
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.base200,
      }}
    >
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1,
            paddingHorizontal: 16,
          }}
        >
          {children}
        </View>
      </SafeAreaView>
    </View>
  )
}
