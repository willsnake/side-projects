import { Select as MantineSelect } from '@mantine/core'

interface Props {
  data: {
    value: string
    label: string
  }[]
  onChange: (value: string) => void
  label?: string
  placeholder?: string
}

const Select = ({
  data = [],
  onChange,
  label,
  placeholder = 'Select one',
  ...rest
}: Props) => {
  return (
    <MantineSelect
      data={data}
      label={label}
      onChange={onChange}
      placeholder={placeholder}
      {...rest}
    />
  )
}

export default Select
