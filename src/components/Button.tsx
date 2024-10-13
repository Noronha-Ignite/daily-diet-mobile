import { PropsWithChildren, useState } from 'react'
import { TouchableOpacityProps, TouchableWithoutFeedback } from 'react-native'

import { IconProps } from 'phosphor-react-native'
import styled, { useTheme } from 'styled-components/native'
import { Typography } from './Typography'

type ButtonVariant = 'default' | 'border'

interface ButtonProps extends TouchableOpacityProps {
  Icon?: (props: IconProps) => JSX.Element
  variant?: ButtonVariant
}

const StyledButtonContainer = styled.View<{
  variant: ButtonVariant
  active?: boolean
}>`
  background-color: ${({ variant, theme, active }) => {
    if (variant === 'border') {
      return active ? theme.colors.base300 : theme.colors.base
    }

    return active ? theme.colors.base700 : theme.colors.base600
  }};

  border-width: 1px;
  border-color: ${({ theme, variant, active }) => {
    if (variant === 'border') {
      return theme.colors.base700
    }

    return active ? theme.colors.base700 : theme.colors.base600
  }};

  flex-direction: row;
  padding: 16px 24px;
  gap: 12px;

  align-items: center;

  border-radius: 6px;
  width: 100%;
  justify-content: center;
`

export const Button = ({
  Icon,
  variant = 'default',
  children,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const theme = useTheme()
  const [active, setActive] = useState(false)

  const isBorder = variant === 'border'

  return (
    <TouchableWithoutFeedback
      {...props}
      onPressIn={() => setActive(true)}
      onPressOut={() => setActive(false)}
    >
      <StyledButtonContainer variant={variant} active={active}>
        {Icon && (
          <Icon
            color={isBorder ? theme.colors.base700 : theme.colors.base}
            size={18}
          />
        )}
        <Typography size="sm" color={isBorder ? 'base700' : 'base'} bold>
          {children}
        </Typography>
      </StyledButtonContainer>
    </TouchableWithoutFeedback>
  )
}
