import { Plus, UserCircle } from 'phosphor-react-native'

import * as S from './styles'
import { Logo } from '../assets/images/logo'
import { Typography } from '../components/Typography'
import { Button } from '../components/Button'
import { PercentageCard } from './components/PercentageCard'
import { SafeAreaView } from 'react-native'
import { MealList } from './components/MealList'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter()

  const handleNewMeal = () => {
    router.push('/NewMeal')
  }

  return (
    <SafeAreaView>
      <S.Container>
        <S.HomeHeader>
          <Logo />

          <UserCircle size={40} color="gray" />
        </S.HomeHeader>

        <S.PercentageCardWrapper>
          <PercentageCard shouldOpenMetrics />
        </S.PercentageCardWrapper>

        <S.MealWrapper>
          <Typography color="base700" size="md">
            Refeições
          </Typography>

          <Button Icon={Plus} onPress={handleNewMeal}>
            Nova refeição
          </Button>

          <MealList />
        </S.MealWrapper>
      </S.Container>
    </SafeAreaView>
  )
}
