import classNames from 'classnames'
import type { ComponentProps } from 'react'
import { forwardRef } from 'react'
import { theme } from './checkbox.theme'

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'ref'>

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={classNames(theme.base, className)}
        type="checkbox"
        {...props}
      />
    )
  }
)

Checkbox.displayName = 'Checkbox'
