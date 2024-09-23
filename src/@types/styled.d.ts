import 'styled-components/native'
import type { SvgProps as DefaultSvgProps } from 'react-native-svg'

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      success300: string
      success500: string
      success700: string

      danger300: string
      danger500: string
      danger700: string

      base700: string
      base600: string
      base500: string
      base400: string
      base300: string
      base200: string
      base100: string
      base: string
    }
    fontSizes: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      '2xl': string
    }
    fonts: {
      regular: string
      bold: string
    }
  }
}

declare module 'react-native-svg' {
  interface SvgProps extends DefaultSvgProps {
    className?: string
  }
}
