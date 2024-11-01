import { Input } from '@/src/components/Input'
import { Select } from '@/src/components/Select'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { mealFormSchema, MealFormType } from './schema'
import { Button } from '@/src/components/Button'

import * as S from './styles'
import { Meal } from '@/src/models/Meal'
import { formatDate, formatTime } from '@/src/utils/format'

interface MealFormProps {
  onSubmit: (data: MealFormType) => void
  initialData?: Partial<Meal>
}

export const MealForm = ({ onSubmit, initialData }: MealFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<MealFormType>({
    resolver: zodResolver(mealFormSchema),
    defaultValues: {
      name: initialData?.name,
      description: initialData?.description,
      isWithinDiet: initialData && initialData?.withinDiet ? 'YES' : 'NO',
      date: initialData?.eatenAt && formatDate(new Date(initialData.eatenAt)),
      dateTime:
        initialData?.eatenAt && formatTime(new Date(initialData.eatenAt)),
    },
  })

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

      <Button disabled={!isValid} onPress={handleSubmit(onSubmit)}>
        {initialData ? 'Salvar alterações' : 'Cadastrar refeição'}
      </Button>
    </S.Container>
  )
}
