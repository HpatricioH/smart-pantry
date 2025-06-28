'use client'

interface ButtonProps {
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} rounded-lg flex justify-center items-center p-3 gap-2 font-semibold text-white tracking-wide text-lg`}
    >
      {children}
    </button>
  )
}