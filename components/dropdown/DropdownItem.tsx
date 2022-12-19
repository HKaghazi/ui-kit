import classNames from 'classnames'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { theme } from './dropdown.theme'

export type DropdownItemProps = PropsWithChildren<ComponentProps<'li'>> & {
  onClick?: () => void
  icon?: FC<ComponentProps<'svg'>>
}

export const DropdownItem: FC<DropdownItemProps> = ({
  children,
  className,
  onClick,
  icon: Icon,
}) => {
  return (
    <li
      className={classNames(theme.floating.item.base, className)}
      onClick={onClick}
    >
      {Icon && <Icon className={theme.floating.item.icon} />}
      {children}
    </li>
  )
}
