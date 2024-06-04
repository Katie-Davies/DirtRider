import React, { ReactNode } from 'react'

export default function Button(props: {
  onClick?: () => void
  className?: string
  children: ReactNode
}) {
  const { onClick, className = '', children } = props
  const defaultClasses =
    'btn sm:btn-sm md:btn-md  hover:btn-customBlue text-darkBlue'

  return (
    <button className={`${defaultClasses} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
