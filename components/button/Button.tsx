import classNames from 'classnames'
import { forwardRef, type ComponentProps, type ReactNode } from 'react'
import { Size, UIColors } from '../../types'
import { theme } from './button.theme'

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'color' | 'ref'> {
  color?: keyof ButtonColors
  href?: string
  label?: ReactNode
  outline?: boolean
  fullSized?: boolean
  pill?: boolean
  size?: keyof ButtonSizes
}

export interface ButtonColors
  extends Pick<
    UIColors,
    | 'dark'
    | 'failure'
    | 'gray'
    | 'info'
    | 'light'
    | 'purple'
    | 'success'
    | 'warning'
  > {
  [key: string]: string
}

export interface ButtonOutlineColors extends Pick<UIColors, 'gray'> {
  [key: string]: string
}

export interface ButtonSizes extends Pick<Size, 'xs' | 'sm' | 'lg' | 'xl'> {
  [key: string]: string
}

const ButtonComponent = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      color = 'info',
      disabled = false,
      href,
      label,
      outline = false,
      pill = false,
      fullSized,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const isLink = typeof href !== 'undefined'

    const Component = isLink ? 'a' : 'button'
    const theirProps = props as object

    return (
      <Component
        className={classNames(
          disabled && theme.disabled,
          theme.color[color],
          outline &&
            (theme.outline.color[color] ?? theme.outline.color.default),
          theme.base,
          theme.pill[pill ? 'on' : 'off'],
          fullSized && theme.fullSized,
          className
        )}
        disabled={disabled}
        href={href}
        type={isLink ? undefined : 'button'}
        ref={ref as never}
        {...theirProps}
      >
        <span
          className={classNames(
            theme.inner.base,
            theme.outline[outline ? 'on' : 'off'],
            theme.outline.pill[outline && pill ? 'on' : 'off'],
            theme.size[size],
            outline && !theme.outline.color[color] && theme.inner.outline
          )}
        >
          <>
            {typeof children !== 'undefined' && children}
            {typeof label !== 'undefined' && (
              <span className={theme.label} data-testid="flowbite-button-label">
                {label}
              </span>
            )}
          </>
        </span>
      </Component>
    )
  }
)

ButtonComponent.displayName = 'Button'
export const Button = Object.assign(ButtonComponent, {})
