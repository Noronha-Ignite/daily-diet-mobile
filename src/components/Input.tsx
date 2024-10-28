import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

import styled from 'styled-components/native'
import { Typography } from './Typography'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

type Size = 'normal' | 'tall'

interface InputProps<T extends FieldValues> extends TextInputProps {
  size?: Size
  label?: string
  control: Control<T>
  name: Path<T>
}

const StyledContainer = styled.View<{
  size: Size
}>`
  flex: 1;
  gap: 4px;

  ${({ size }) =>
    size === 'tall' ? 'min-height: 142px;' : 'min-height: 70px;'}

  ${({ size }) =>
    size === 'tall' ? 'max-height: 142px;' : 'max-height: 70px;'}
`

const StyledInput = styled.TextInput<{
  active?: boolean
}>`
  border-width: 1px;
  border-color: ${({ theme, active }) =>
    active ? theme.colors.base500 : theme.colors.base300};
  border-radius: 6px;

  padding: 14px;

  font-size: ${({ theme }) => theme.fontSizes.md};

  flex: 1;
`

export const Input = <T extends FieldValues>({
  size = 'normal',
  label,
  control,
  name,
  ...props
}: InputProps<T>) => {
  const { field } = useController({
    name,
    control,
  })

  const [active, setActive] = useState(false)

  return (
    <StyledContainer size={size}>
      {label && (
        <Typography bold size="sm" color="base600">
          {label}
        </Typography>
      )}
      <StyledInput
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        active={active}
        multiline={size === 'tall'}
        onChangeText={field.onChange}
        value={field.value}
        {...props}
      />
    </StyledContainer>
  )
}
