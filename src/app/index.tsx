import { Plus, UserCircle } from 'phosphor-react-native'

import * as S from './styles'
import { Logo } from '../assets/images/logo'
import { Typography } from '../components/Typography'
import { Button } from '../components/Button'
import { PercentageCard } from './components/PercentageCard'
import { SafeAreaView } from 'react-native'

export default function Index() {
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

        <S.AddMealWrapper>
          <Typography color="base700" size="md">
            Refeições
          </Typography>

          <Button Icon={Plus}>Adicionar refeição</Button>
        </S.AddMealWrapper>
      </S.Container>
    </SafeAreaView>
  )
}
