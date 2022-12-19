import classNames from 'classnames'
import type { ComponentProps, PropsWithChildren } from 'react'
import React from 'react'
import { theme } from './avatarGroup.theme'

export interface FlowbiteAvatarGroupTheme {
  base: string
}

export type AvatarGroupProps = PropsWithChildren<ComponentProps<'div'>>

const AvatarGroup: React.FC<AvatarGroupProps> = ({ children, className }) => {
  return (
    <div
      data-testid="avatar-group-element"
      className={classNames(theme.base, className)}
    >
      {children}
    </div>
  )
}

AvatarGroup.displayName = 'Avatar.Group'
export default AvatarGroup
