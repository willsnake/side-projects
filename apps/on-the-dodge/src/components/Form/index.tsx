// import { TextInput, Checkbox, Button, Group, Box } from '@mantine/core';
import { useState } from "react"
// import { useForm } from "@mantine/form"
import { subMinutes } from "date-fns"

import Button from "@component/Button/index.tsx"
import TimeInput from "@component/TimeInput/index.tsx"
import Select from "@component/Select/index.tsx"

const SELECT_DATA = [
  { value: "just", label: "Just then" },
  { value: "5", label: "5 Minutes Ago" },
  { value: "10", label: "10 Minutes Ago" },
  { value: "30", label: "30 Minutes Ago" },
  { value: "60", label: "1 Hour Ago" },
  { value: "120", label: "2 Hours Ago" },
  { value: "360", label: "6 Hours Ago" },
  { value: "720", label: "12 Hours Ago" },
  { value: "custom", label: "Custom Time" }
]

const Form = () => {
  const [dateSelected, setDateSelected] = useState<Date>()

  const handleSelectChange = (value: string) => {
    if (Number(value)) {
      setDateSelected(subMinutes(new Date(), Number(value)))
    } else if (value === "just") {
      setDateSelected(new Date())
    }
  }

  console.log(
    "🚀 ~ file: index.tsx ~ line 24 ~ Form ~ dateSelected",
    dateSelected
  )
  
  return (
    <>
      <Button className="rounded-lg bg-purple-500 py-2 px-4 font-semibold text-white shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
        I dodged
      </Button>
      <Select data={SELECT_DATA} onChange={handleSelectChange} />
    </>
  )
}

export default Form
