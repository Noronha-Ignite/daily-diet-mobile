import { Circle } from 'phosphor-react-native'
import React from 'react'

import { useTheme } from 'styled-components/native'
import { Typography } from '../Typography'

import * as S from './styles'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

type ColorScheme = 'success' | 'danger'

interface Option {
  label: string
  value: string
  colorScheme?: ColorScheme
}

interface SelectProps<T extends FieldValues> {
  options: Option[]
  label?: string

  control: Control<T>
  name: Path<T>
}

export const Select = <T extends FieldValues>({
  options,
  label,
  control,
  name,
}: SelectProps<T>) => {
  const theme = useTheme()

  const { field } = useController({
    control,
    name,
  })

  return (
    <S.SelectContainer>
      {label && (
        <Typography bold size="sm" color="base600">
          {label}
        </Typography>
      )}

      <S.OptionsContainer>
        {options.map(({ label, value, colorScheme = 'success' }) => (
          <S.Option
            key={value}
            colorScheme={colorScheme}
            active={value === field.value}
            onPress={() => field.onChange(value)}
            activeOpacity={0.7}
          >
            <Circle
              color={theme.colors[`${colorScheme}700`]}
              weight="fill"
              size={8}
            />

            <Typography bold>{label}</Typography>
          </S.Option>
        ))}
      </S.OptionsContainer>
    </S.SelectContainer>
  )
}
