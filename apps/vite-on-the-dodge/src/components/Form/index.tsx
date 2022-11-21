import { useState } from 'react'
import { isAfter, subDays, differenceInMinutes } from 'date-fns'

import Button from '../Button'
import TimeInput from '../TimeInput'
import Select from '../Select'

const SELECT_DATA = [
  { value: '0', label: 'Just then' },
  { value: '5', label: '5 Minutes Ago' },
  { value: '10', label: '10 Minutes Ago' },
  { value: '30', label: '30 Minutes Ago' },
  { value: '60', label: '1 Hour Ago' },
  { value: '120', label: '2 Hours Ago' },
  { value: '360', label: '6 Hours Ago' },
  { value: '720', label: '12 Hours Ago' },
  { value: 'custom', label: 'Custom Time' },
]

interface FormProps {
  onSubmit: (minutesOfDifference: number) => void
}

const Form = ({ onSubmit }: FormProps) => {
  const [minutesOfDifference, setMinutesOfDifference] = useState<number>(0)
  const [showCustomInput, setShowCustomInput] = useState<boolean>(false)
  const [disableSubmit, setDisableSubmit] = useState<boolean>(true)
  const defaultTimeCustomInput = new Date()

  const handleSelectChange = (value: string) => {
    if (value === 'custom') {
      setShowCustomInput(true)
      setDisableSubmit(true)
    } else {
      setMinutesOfDifference(Number(value))
      setShowCustomInput(false)
      setDisableSubmit(false)
    }
  }

  const handleOnChange = (time: Date) => {
    let _time = time

    if (isAfter(time, new Date())) {
      _time = subDays(_time, 1)
    }

    const difference = differenceInMinutes(new Date(), _time, { roundingMethod: 'floor' })

    setMinutesOfDifference(difference)
    setDisableSubmit(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(minutesOfDifference)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Button
        className="rounded-lg bg-purple-500 py-2 px-4 font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75 mb-4"
        disabled={disableSubmit}
        type="submit"
      >
        I dodged
      </Button>
      <Select data={SELECT_DATA} onChange={handleSelectChange} />
      {showCustomInput ? (
        <TimeInput
          clearable
          defaultValue={defaultTimeCustomInput}
          format="12"
          onChange={handleOnChange}
        />
      ) : null}
    </form>
  )
}

export default Form
