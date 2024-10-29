import { WithHeader } from '@/src/components/Header'
import { Typography } from '@/src/components/Typography'

import { zodResolver } from '@hookform/resolvers/zod'

import { useForm } from 'react-hook-form'

import * as S from './styles'
import { newMealFormSchema, NewMealFormType } from './schema'
import { Input } from '@/src/components/Input'
import { Button } from '@/src/components/Button'
import { Select } from '@/src/components/Select'
import { useRouter } from 'expo-router'
import { useMeals } from '@/src/contexts/useMeals'

const NewMealHeader = () => (
  <Typography bold color="base700" size="lg">
    Nova refeição
  </Typography>
)

function NewMeal() {
  const router = useRouter()
  const { addMeal } = useMeals()

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<NewMealFormType>({
    resolver: zodResolver(newMealFormSchema),
  })

  const onSubmit = (data: NewMealFormType) => {
    const [day, month, year] = data.date
      .split('/')
      .map((value) => Number(value))
    const [hours, minutes] = data.dateTime
      .split(':')
      .map((value) => Number(value))

    const mealDate = new Date(year, month, day, hours, minutes)

    addMeal({
      name: data.name,
      description: data.description ?? '',
      eatenAt: mealDate.toString(),
      withinDiet: data.isWithinDiet === 'YES',
    })

    router.replace('/NewMeal/NewMealSuccess')
    router.setParams({
      isWithinDiet: data.isWithinDiet,
    })
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
