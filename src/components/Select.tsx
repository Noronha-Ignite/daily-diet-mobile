import { Circle } from 'phosphor-react-native'
import { useEffect, useState } from 'react'

import styled, { useTheme } from 'styled-components/native'
import { Typography } from './Typography'

type ColorScheme = 'success' | 'danger'

interface Option {
  label: string
  value: string
  colorScheme?: ColorScheme
}

interface SelectProps {
  options: Option[]
  onOptionChange?: (option: string) => void
}

const StyledSelectContainer = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`

const StyledOption = styled.TouchableOpacity<{
  active?: boolean
  colorScheme: ColorScheme
}>`
  flex: 1;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 16px;

  border-width: 1px;
  border-color: ${({ theme, active, colorScheme }) =>
    active ? theme.colors[`${colorScheme}700`] : 'transparent'};
  background-color: ${({ theme, active, colorScheme }) =>
    active ? theme.colors[`${colorScheme}300`] : 'transparent'};
  border-radius: 6px;
`

export const Select = ({ options, onOptionChange }: SelectProps) => {
  const theme = useTheme()
  const [selectedOption, setSelectedOption] = useState<string>()

  useEffect(() => {
    if (selectedOption) {
      onOptionChange?.(selectedOption)
    }
  }, [selectedOption, onOptionChange])

  return (
    <StyledSelectContainer>
      {options.map(({ label, value, colorScheme = 'success' }) => (
        <StyledOption
          key={value}
          colorScheme={colorScheme}
          active={value === selectedOption}
          onPress={() => setSelectedOption(value)}
        >
          <Circle
            color={theme.colors[`${colorScheme}700`]}
            weight="fill"
            size={8}
          />

          <Typography bold>{label}</Typography>
        </StyledOption>
      ))}
    </StyledSelectContainer>
  )
}
