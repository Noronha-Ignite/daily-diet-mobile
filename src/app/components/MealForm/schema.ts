import { DATE_REGEX, DATE_TIME_STRING_REGEX } from '@/src/utils/regex'
import * as z from 'zod'

export const mealFormSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  date: z.string().regex(DATE_REGEX),
  dateTime: z.string().regex(DATE_TIME_STRING_REGEX),
  isWithinDiet: z.enum(['YES', 'NO']),
})

export type MealFormType = z.infer<typeof mealFormSchema>
