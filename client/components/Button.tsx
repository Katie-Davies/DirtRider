import React, { ReactNode } from 'react'

export default function Button(props: {
  onClick?: () => void
  className?: string
  children: ReactNode
}) {
  const { onClick, className = '', children } = props
  const defaultClasses =
    'border-4 border-customBlue rounded-md p-2 bg-customBlue text-white'
  return (
    <button className={`${defaultClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
