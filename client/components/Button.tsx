import React, { ReactNode } from 'react'

export default function Button(props: {
  onClick?: () => void
  className?: string
  children: ReactNode
}) {
  const { onClick, className = '', children } = props
  const defaultClasses = 'shadow-lg btn btn-primary text-white '

  return (
    <button className={`${defaultClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
