import React from 'react'
import clsx from 'clsx'

type Variant = 'default' | 'green' | 'indigo' | 'red'

interface ShinyButtonProps {
  icon: React.ReactNode
  variant?: Variant
  href?: string
  ariaLabel?: string
  className?: string
}

const variantClasses: Record<Variant, string> = {
  default: `
    border-white/10 hover:border-white/30
    bg-gradient-to-tr from-black/60 to-black/40
    hover:from-white/10 hover:to-black/40
    hover:shadow-white/20`,
  green: `
    border-green-500/20 hover:border-green-500/50
    bg-gradient-to-tr from-black/60 to-black/40
    hover:from-green-500/10 hover:to-black/40
    hover:shadow-green-500/30`,
  indigo: `
    border-indigo-500/20 hover:border-indigo-500/50
    bg-gradient-to-tr from-black/60 to-black/40
    hover:from-indigo-500/10 hover:to-black/40
    hover:shadow-indigo-500/30`,
  red: `
    border-red-500/20 hover:border-red-500/50
    bg-gradient-to-tr from-black/60 to-black/40
    hover:from-red-500/10 hover:to-black/40
    hover:shadow-red-500/30`,
}

const glowGradientClasses: Record<Variant, string> = {
  default: 'via-white/10',
  green: 'via-green-400/20',
  indigo: 'via-indigo-400/20',
  red: 'via-red-400/20',
}

export default function ShinyButton({
  icon,
  variant = 'default',
  href,
  ariaLabel = 'Social link',
  className = '',
}: ShinyButtonProps) {
  const classes = clsx(
    'p-4 rounded-full backdrop-blur-lg shadow-lg transition-all duration-300 ease-out cursor-pointer group relative overflow-hidden border',
    'hover:scale-110 active:scale-95 hover:rotate-2 active:rotate-0 hover:shadow-2xl',
    variantClasses[variant],
    className
  )

  const inner = (
    <>
      <div
        className={clsx(
          'absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out',
          glowGradientClasses[variant]
        )}
      />
      <div className="relative z-10">{icon}</div>
    </>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={classes}
      >
        {inner}
      </a>
    )
  }

  return (
    <button aria-label={ariaLabel} className={classes}>
      {inner}
    </button>
  )
}
