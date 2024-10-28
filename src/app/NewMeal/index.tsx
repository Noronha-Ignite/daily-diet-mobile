import { WithHeader } from '@/src/components/Header'
import { Typography } from '@/src/components/Typography'

import { useForm } from 'react-hook-form'

import * as S from './styles'
import { NewMealFormType } from './schema'
import { Input } from '@/src/components/Input'
import { Button } from '@/src/components/Button'
import { Select } from '@/src/components/Select'

const NewMealHeader = () => (
  <Typography bold color="base700" size="lg">
    Nova refeição
  </Typography>
)

function NewMeal() {
  const { control } = useForm<NewMealFormType>()

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
          label="Está dentro da dieta?"
          options={[
            { label: 'Sim', value: 'true', colorScheme: 'success' },
            {
              label: 'Não',
              value: 'false',
              colorScheme: 'danger',
            },
          ]}
        />
      </S.FormInputs>

      <S.ButtonWrapper>
        <Button>Cadastrar refeição</Button>
      </S.ButtonWrapper>
    </S.Container>
  )
}

export default () => WithHeader(NewMeal, NewMealHeader)
