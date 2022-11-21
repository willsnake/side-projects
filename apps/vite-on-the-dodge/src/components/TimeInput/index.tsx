import { TimeInput as MantineTimeInput } from '@mantine/dates'

interface Props {
  clearable?: boolean
  format: '24' | '12'
  label?: string
  onChange: (time: Date) => void
  defaultValue?: Date
}

const TimeInput = (props: Props) => {
  const {
    clearable = true,
    defaultValue = new Date(),
    format = '12',
    label = 'Pick time',
    onChange,
  } = props

  return (
    <MantineTimeInput
      amLabel="am"
      clearable={clearable}
      defaultValue={defaultValue}
      format={format}
      label={label}
      onChange={onChange}
      pmLabel="pm"
    />
  )
}

export default TimeInput
