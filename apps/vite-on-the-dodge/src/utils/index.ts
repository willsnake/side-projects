import { addDays, intervalToDuration } from 'date-fns'

export const calculateTimeLeft = (time: Date = new Date()) => {
  const initialDate = addDays(time, 1)

  return intervalToDuration({
    start: new Date(),
    end: initialDate,
  })
}
