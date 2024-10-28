import { Circle } from 'phosphor-react-native'
import React, { useEffect, useState } from 'react'

import { useTheme } from 'styled-components/native'
import { Typography } from '../Typography'

import * as S from './styles'

type ColorScheme = 'success' | 'danger'

interface Option {
  label: string
  value: string
  colorScheme?: ColorScheme
}

interface SelectProps {
  options: Option[]
  onOptionChange?: (option: string) => void
  label?: string
}

export const Select = ({ options, onOptionChange, label }: SelectProps) => {
  const theme = useTheme()
  const [selectedOption, setSelectedOption] = useState<string>()

  useEffect(() => {
    if (selectedOption) {
      onOptionChange?.(selectedOption)
    }
  }, [selectedOption, onOptionChange])

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
            active={value === selectedOption}
            onPress={() => setSelectedOption(value)}
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
