import { Typography } from '@/src/components/Typography'
import * as S from './styles'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Button } from '@/src/components/Button'

const FeedbackInfo = ({ isWithinDiet }: { isWithinDiet: boolean }) => {
  return isWithinDiet ? (
    <S.Feedback>
      <Typography center bold color="success700" size="xl">
        Continue assim!
      </Typography>
      <Typography size="md" center>
        Você continua{' '}
        <Typography bold size="md">
          dentro da dieta
        </Typography>
        . Muito bem!
      </Typography>
    </S.Feedback>
  ) : (
    <S.Feedback>
      <Typography center bold color="danger700" size="xl">
        Que pena!
      </Typography>
      <Typography size="md" center>
        Você{' '}
        <Typography bold size="md">
          saiu da dieta
        </Typography>{' '}
        dessa vez, mas continue se esforçando e não desista!
      </Typography>
    </S.Feedback>
  )
}

const NewMealSuccess = () => {
  const router = useRouter()

  const { isWithinDiet: isWithinDietQuery } = useLocalSearchParams<{
    isWithinDiet: string
  }>()

  const isWithinDiet = isWithinDietQuery === 'YES'

  const image = isWithinDiet
    ? require('@/src/assets/images/HappyWoman.png')
    : require('@/src/assets/images/SittingMan.png')

  if (!isWithinDietQuery) {
    return <Typography>Loading...</Typography>
  }

  return (
    <S.Container>
      <FeedbackInfo isWithinDiet={isWithinDiet} />

      <S.FeedbackImage
        source={image}
        alt={isWithinDiet ? 'Happy Woman' : 'Sitting Man'}
      />

      <Button onPress={router.back}>Ir para a página inicial</Button>
    </S.Container>
  )
}

export default NewMealSuccess
