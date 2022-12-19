import classNames from 'classnames'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { theme } from './navbar.theme'

export interface NavbarLinkProps
  extends PropsWithChildren<ComponentProps<'a'>> {
  active?: boolean
  disabled?: boolean
  href?: string
}

export const NavbarLink: FC<NavbarLinkProps> = ({
  active,
  disabled,
  href,
  children,
  className,
  ...props
}) => {
  return (
    <li>
      <a
        href={href}
        className={classNames(
          theme.link.base,
          {
            [theme.link.active.on]: active,
            [theme.link.active.off]: !active && !disabled,
          },
          theme.link.disabled[disabled ? 'on' : 'off'],
          className
        )}
        {...props}
      >
        {children}
      </a>
    </li>
  )
}
