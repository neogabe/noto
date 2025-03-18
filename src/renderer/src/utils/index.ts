import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormatter = new Intl.DateTimeFormat(window.context.locale, {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'UTC'
})

export const formatDateFromMs = (ms: number) => dateFormatter.format(ms)

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
