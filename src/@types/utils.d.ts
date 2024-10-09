type Prettify<T> = {
  [K in keyof T]: T[K]
}

type Optional<T, K extends keyof T> = Prettify<Omit<T, K> & Pick<Partial<T>, K>>

type WithId<T extends Record<string, unknown>> = T & {
  id: string
}
