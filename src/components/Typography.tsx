import React, { PropsWithChildren } from 'react'
import { TextProps } from 'react-native'
import styled, { DefaultTheme } from 'styled-components/native'

interface TypographyProps extends TextProps {
  size: keyof DefaultTheme['fontSizes']
  bold?: boolean
  center?: boolean
  color?: keyof DefaultTheme['colors']
}

const StyledTextBox = styled.View``

const StyledText = styled.Text<TypographyProps>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.fonts.bold : theme.fonts.regular};

  font-size: ${({ theme, size }) => theme.fontSizes[size]}px;

  color: ${({ theme, color }) => theme.colors[color ?? 'base700']};

  text-align: ${({ center }) => (center ? 'center' : 'left')};
`

export const Typography = ({
  children,
  size = 'sm',
  ...props
}: PropsWithChildren<Optional<TypographyProps, 'size'>>) => {
  return (
    <StyledTextBox>
      <StyledText size={size} {...props}>
        {children}
      </StyledText>
    </StyledTextBox>
  )
}
