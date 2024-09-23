import {
  useFonts,
  Nunito_400Regular as Nunito400Regular,
  Nunito_700Bold as Nunito700Bold,
} from '@expo-google-fonts/nunito'

// Custom hook to load fonts
export const useAppFonts = (): boolean => {
  const [fontsLoaded] = useFonts({
    Nunito400Regular,
    Nunito700Bold,
  })

  return fontsLoaded
}

export const theme = {
  colors: {
    success300: '#E5F0DB',
    success500: '#CBE4B4',
    success700: '#639339',
    danger300: '#F4E6E7',
    danger500: '#F3BABD',
    danger700: '#BF3B44',

    base700: '#1B1D1E',
    base600: '#333638',
    base500: '#5C6265',
    base400: '#B9BBBC',
    base300: '#DDDEDF',
    base200: '#EFF0F0',
    base100: '#FAFAFA',
    base: '#FFFFFF',
  },
  fontSizes: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    '2xl': '32px',
  },
  fonts: {
    regular: 'Nunito400Regular',
    bold: 'Nunito700Bold',
  },
}
