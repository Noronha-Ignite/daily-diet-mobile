import { View } from 'react-native'
import { Button } from '../components/Button'
import { Plus } from 'phosphor-react-native'

export default function Index() {
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button Icon={Plus}>Nova refeição</Button>
      </View>
    </>
  )
}
