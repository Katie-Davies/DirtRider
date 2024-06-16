import React, { ReactNode } from 'react'

export default function Button(props: {
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  children: ReactNode
}) {
  const { onClick, className = '', children, type = 'button' } = props
  const defaultClasses =
    'border-4 border-customBlue rounded-md p-2 bg-customBlue text-white'
  return (
    <button
      className={`${defaultClasses} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
