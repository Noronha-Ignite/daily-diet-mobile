import React, { useState } from 'react'
import { TextInputProps } from 'react-native'

import styled from 'styled-components/native'
import { Typography } from './Typography'

type Size = 'normal' | 'tall'

interface InputProps extends TextInputProps {
  size?: Size
  label?: string
}

const StyledContainer = styled.View`
  width: 100%;
  gap: 4px;
`

const StyledInput = styled.TextInput<{
  active?: boolean
  size: Size
}>`
  border-width: 1px;
  border-color: ${({ theme, active }) =>
    active ? theme.colors.base500 : theme.colors.base300};
  border-radius: 6px;

  width: 100%;

  padding: 14px;

  font-size: ${({ theme }) => theme.fontSizes.md};

  ${({ size }) => size === 'tall' && 'min-height: 120px;'}
`

export const Input = ({ size = 'normal', label, ...props }: InputProps) => {
  const [active, setActive] = useState(false)

  return (
    <StyledContainer>
      {label && (
        <Typography bold size="sm" color="base600">
          {label}
        </Typography>
      )}
      <StyledInput
        onFocus={() => setActive(true)}
        onBlur={() => setActive(false)}
        active={active}
        size={size}
        multiline={size === 'tall'}
        {...props}
      />
    </StyledContainer>
  )
}
