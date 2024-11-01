import { Modal } from 'react-native'

import * as S from './styles'
import { Button } from '../Button'

interface ConfirmationDialogProps {
  visible: boolean
  onConfirm: () => void
  onCancel: () => void
  message?: string
  confirmText?: string
}

export const ConfirmationDialog = ({
  visible,
  onConfirm,
  onCancel,
  message,
  confirmText,
}: ConfirmationDialogProps) => (
  <Modal transparent visible={visible} animationType="fade">
    <S.Overlay activeOpacity={1} onPress={onCancel}>
      <S.DialogContainer>
        <S.Dialog>
          <S.Message size="lg" bold>
            {message || 'Você tem certeza que deseja prosseguir?'}
          </S.Message>
          <S.ButtonContainer>
            <Button fullWidth variant="border" onPress={onCancel}>
              Cancelar
            </Button>
            <Button fullWidth onPress={onConfirm}>
              {confirmText || 'Confirmar'}
            </Button>
          </S.ButtonContainer>
        </S.Dialog>
      </S.DialogContainer>
    </S.Overlay>
  </Modal>
)
