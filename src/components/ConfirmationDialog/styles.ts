import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { Typography } from '../Typography'

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const ShowDialogButton = styled(TouchableOpacity)`
  padding: 10px;
  background-color: #007bff;
  border-radius: 5px;
`

export const Overlay = styled.TouchableOpacity`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.4);
  justify-content: center;
  align-items: center;
`

export const DialogContainer = styled.View`
  width: 80%;
`

export const Dialog = styled.View`
  background-color: ${({ theme }) => theme.colors.base100};
  border-radius: 8px;
  padding: 24px;
  padding-top: 40px;
  align-items: center;
`

export const Message = styled(Typography)`
  text-align: center;
  margin-bottom: 32px;
`

export const ButtonContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 12px;
  width: 100%;
`

export const DialogButton = styled(TouchableOpacity)<{
  backgroundColor: string
}>`
  flex: 1;
  margin: 0 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  text-align: center;
`
