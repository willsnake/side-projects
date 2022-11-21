import type { ReactNode } from 'react'
import { Button as MantineButton } from '@mantine/core'

interface Props {
  children: ReactNode
  className?: string
  disabled: boolean
  onClick?: () => void
  type: 'submit' | 'button'
}

const Button = (props: Props) => {
  const { children, className = '', disabled = false, onClick, type = 'button' } = props

  return (
    <MantineButton
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </MantineButton>
  )
}

export default Button
