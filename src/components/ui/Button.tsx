interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'font-black uppercase tracking-widest rounded-sm transition-all'

  const variants = {
    primary:
      'px-10 py-5 bg-primary-container text-white hover:shadow-[0_0_30px_rgba(255,170,1,0.4)]',
    outline:
      'px-10 py-5 border border-outline-variant text-on-surface hover:bg-white/5 flex items-center gap-3',
  }

  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
