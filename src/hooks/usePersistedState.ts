import { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const usePersistedState = <T = unknown>(
  key: string,
  initialValue: T,
) => {
  const [state, setState] = useState<T>(initialValue)

  const handleSetState = useCallback(
    (value: T) => {
      AsyncStorage.setItem(key, JSON.stringify(value), () => {
        setState(value)
      })
    },
    [key],
  )

  useEffect(() => {
    AsyncStorage.getItem(key).then((value) => {
      if (value) {
        setState(JSON.parse(value ?? ''))
      }
    })
  }, [key, handleSetState])

  return [state, handleSetState] as const
}
