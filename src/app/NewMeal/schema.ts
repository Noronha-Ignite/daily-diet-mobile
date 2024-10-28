import * as z from 'zod'

const DATE_STRING_REGEX =
  /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/[0-9]{4}$/

const DATE_TIME_STRING_REGEX = /^(?:[01][0-9]|2[0-3]):[0-5][0-9]$/

export const newMealFormSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  date: z.string().regex(DATE_STRING_REGEX),
  dateTime: z.string().regex(DATE_TIME_STRING_REGEX),
  isWithinDiet: z.boolean(),
})

export type NewMealFormType = z.infer<typeof newMealFormSchema>
