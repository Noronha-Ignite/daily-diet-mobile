import { WithHeader } from '@/src/components/Header'
import { Typography } from '@/src/components/Typography'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import * as S from './styles'
import { newMealFormSchema, NewMealFormType } from './schema'
import { Input } from '@/src/components/Input'
import { Button } from '@/src/components/Button'
import { Select } from '@/src/components/Select'

const NewMealHeader = () => (
  <Typography bold color="base700" size="lg">
    Nova refeição
  </Typography>
)

function NewMeal() {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<NewMealFormType>({
    resolver: zodResolver(newMealFormSchema),
  })

  const onSubmit = (data: NewMealFormType) => {
    const payload = {
      ...data,
      isWithinDiet: data.isWithinDiet === 'YES',
    }

    console.log(payload)
  }

  return (
    <S.Container>
      <S.FormInputs>
        <Input control={control} name="name" label="Nome" />
        <Input
          control={control}
          name="description"
          label="Descrição"
          size="tall"
        />

        <S.DateWrapper>
          <Input control={control} name="date" label="Data" />

          <Input control={control} name="dateTime" label="Hora" />
        </S.DateWrapper>

        <Select
          control={control}
          name="isWithinDiet"
          label="Está dentro da dieta?"
          options={[
            { label: 'Sim', value: 'YES', colorScheme: 'success' },
            {
              label: 'Não',
              value: 'NO',
              colorScheme: 'danger',
            },
          ]}
        />
      </S.FormInputs>

      <S.ButtonWrapper>
        <Button disabled={!isValid} onPress={handleSubmit(onSubmit)}>
          Cadastrar refeição
        </Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}

export default () => WithHeader(NewMeal, NewMealHeader)
