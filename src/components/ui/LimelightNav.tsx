import React, { useState, cloneElement } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

export type NavItem = {
  id: string | number
  icon: React.ReactElement
  label?: string
  onClick?: () => void
}

type LimelightNavProps = {
  items: NavItem[]
  activeIndex?: number
  onTabChange?: (index: number) => void
  className?: string
}

export function LimelightNav({
  items,
  activeIndex: controlledIndex,
  onTabChange,
  className,
}: LimelightNavProps) {
  const [internalActive, setInternalActive] = useState(controlledIndex ?? 0)

  const activeIndex = controlledIndex ?? internalActive

  if (items.length === 0) return null

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setInternalActive(index)
    onTabChange?.(index)
    itemOnClick?.()
  }

  return (
    <nav className={clsx('flex w-full items-center h-full', className)}>
      {items.map(({ id, icon, label, onClick }, index) => {
        const isActive = activeIndex === index
        return (
          <button
            key={id}
            onClick={() => handleItemClick(index, onClick)}
            aria-label={label}
            className={clsx(
              'flex flex-1 flex-col items-center justify-center gap-1 h-full cursor-pointer',
              'transition-colors duration-200 group',
              isActive ? 'text-primary' : 'text-on-surface-variant',
            )}
          >
            {cloneElement(icon, {
              className: clsx(
                'w-[18px] h-[18px] shrink-0 transition-all duration-200',
                isActive ? 'opacity-100' : 'opacity-40 group-hover:opacity-60',
                icon.props.className,
              ),
            })}

            {label && (
              <motion.span
                animate={{
                  opacity: isActive ? 1 : 0.4,
                  y: isActive ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className={clsx(
                  'text-[10px] font-bold uppercase tracking-widest font-headline whitespace-nowrap',
                  isActive ? 'text-primary' : 'group-hover:text-on-surface',
                )}
              >
                {label}
              </motion.span>
            )}
          </button>
        )
      })}
    </nav>
  )
}
