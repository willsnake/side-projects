import type { ReactNode } from "react"
import { Button as MantineButton } from "@mantine/core"

interface Props {
  children: ReactNode
  className?: string
  onClick: () => void
}

const Button = (props: Props) => {
  const { children, className = '', onClick } = props

  return (
    <MantineButton className={className} onClick={onClick}>
      {children}
    </MantineButton>
  )
}

export default Button