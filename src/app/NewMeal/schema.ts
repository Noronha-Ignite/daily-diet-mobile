import * as z from 'zod'

export const newMealFormSchema = z.object({
  name: z.string(),
})

export type NewMealFormType = z.infer<typeof newMealFormSchema>
