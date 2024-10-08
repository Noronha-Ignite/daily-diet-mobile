import { PropsWithChildren } from 'react'
import { View } from 'react-native'
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
      {children}
    </View>
  )
}
