import classNames from 'classnames'
import {
  ComponentProps,
  ElementType,
  FC,
  forwardRef,
  PropsWithChildren,
  useId,
} from 'react'
import { UIColors } from '../../types'
import { Badge } from '../badge'
import { Tooltip } from '../tooltip'
import { theme } from './sidebar.theme'
import { useSidebarContext } from './SidebarContext'
import { useSidebarItemContext } from './SidebarItemContext'

export interface SidebarItemProps
  extends PropsWithChildren<
    Omit<ComponentProps<'div'>, 'ref'> & Record<string, unknown>
  > {
  active?: boolean
  as?: ElementType
  href?: string
  icon?: FC<ComponentProps<'svg'>>
  label?: string
  labelColor?: keyof SidebarItemLabelColors
}

export interface SidebarItemLabelColors extends Pick<UIColors, 'gray'> {
  [key: string]: string
}

const SidebarItem = forwardRef<Element, SidebarItemProps>(
  (
    {
      as: Component = 'a',
      children,
      icon: Icon,
      active: isActive,
      label,
      labelColor = 'info',
      className,
      ...props
    },
    ref
  ) => {
    const id = useId()
    const { isCollapsed } = useSidebarContext()
    const { isInsideCollapse } = useSidebarItemContext()

    const ListItem: FC<PropsWithChildren> = ({ children: wrapperChildren }) => (
      <li>
        {isCollapsed ? (
          <Tooltip
            content={<TooltipContent>{children}</TooltipContent>}
            placement="right"
          >
            {wrapperChildren}
          </Tooltip>
        ) : (
          wrapperChildren
        )}
      </li>
    )

    const TooltipContent: FC<PropsWithChildren> = ({ children }) => (
      <Children>{children}</Children>
    )

    const Children: FC<PropsWithChildren> = ({ children }) => (
      <span
        className={classNames(theme.item.content.base)}
        data-testid="flowbite-sidebar-item-content"
        id={`flowbite-sidebar-item-${id}`}
      >
        {children}
      </span>
    )

    return (
      <ListItem>
        <Component
          aria-labelledby={`flowbite-sidebar-item-${id}`}
          className={classNames(
            theme.base,
            isActive && theme.item.active,
            !isCollapsed &&
              isInsideCollapse &&
              theme.item.collapsed.insideCollapse,
            className
          )}
          ref={ref}
          {...props}
        >
          {Icon && (
            <Icon
              aria-hidden
              className={classNames(
                theme.item.icon.base,
                isActive && theme.item.icon.active
              )}
              data-testid="flowbite-sidebar-item-icon"
            />
          )}
          {isCollapsed && !Icon && (
            <span className={theme.item.collapsed.noIcon}>
              {(children as string).charAt(0).toLocaleUpperCase() ?? '?'}
            </span>
          )}
          {!isCollapsed && <Children>{children}</Children>}
          {!isCollapsed && label && (
            <Badge
              color={labelColor}
              data-testid="flowbite-sidebar-label"
              hidden={isCollapsed}
              className={theme.item.label}
            >
              {label}
            </Badge>
          )}
        </Component>
      </ListItem>
    )
  }
)

SidebarItem.displayName = 'Sidebar.Item'
export default SidebarItem
