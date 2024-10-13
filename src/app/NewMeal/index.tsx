import { WithHeader } from '@/src/components/Header'
import { Typography } from '@/src/components/Typography'

import { useForm } from 'react-hook-form'

import * as S from './styles'
import { NewMealFormType } from './schema'
import { Input } from '@/src/components/Input'

const NewMealHeader = () => (
  <Typography bold color="base700" size="lg">
    Nova refeição
  </Typography>
)

function NewMeal() {
  const { control } = useForm<NewMealFormType>()

  return (
    <S.Container>
      <Input control={control} name="name" />
    </S.Container>
  )
}

export default () => WithHeader(NewMeal, NewMealHeader)
