import { TimeInput as MantineTimeInput } from "@mantine/dates"

interface Props {
  clearable?: boolean
  format?: string
  key: string
  label?: string
  onChange: (time: string) => void
}

const TimeInput = (props: Props) => {
  const {
    clearable = true,
    format = "12",
    key,
    label = "Pick time",
    onChange,
  } = props

  return (
    <MantineTimeInput
      amLabel="am"
      clearable={clearable}
      defaultValue={new Date()}
      format={format}
      key={key}
      label={label}
      onChange={onChange}
      pmLabel="pm"
    />
  )
}

export default TimeInput
