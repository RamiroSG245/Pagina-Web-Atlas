interface SectionLabelProps {
  children: React.ReactNode
  className?: string
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <span
      className={`text-secondary tracking-[0.2em] font-bold uppercase block mb-4 text-sm ${className}`}
    >
      {children}
    </span>
  )
}
