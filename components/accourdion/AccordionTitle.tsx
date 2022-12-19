import classNames from 'classnames'
import type { ComponentProps, FC } from 'react'
import { theme } from './accordion.theme'
import { useAccordionContext } from './AccordionPanelContext'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface AccordionTitleProps extends ComponentProps<'button'> {
  arrowIcon?: FC<ComponentProps<'svg'>>
  as?: HeadingLevel
}

export const AccordionTitle: FC<AccordionTitleProps> = ({
  as: Heading = 'h2',
  children,
  className,
  ...props
}): JSX.Element => {
  const { arrowIcon: ArrowIcon, flush, isOpen, setOpen } = useAccordionContext()

  const onClick = () => typeof setOpen !== 'undefined' && setOpen()

  return (
    <button
      className={classNames(
        theme.title.base,
        theme.title.flush[flush ? 'on' : 'off'],
        theme.title.open[isOpen ? 'on' : 'off'],
        className
      )}
      onClick={onClick}
      type="button"
      {...props}
    >
      <Heading
        className={theme.title.heading}
        data-testid="flowbite-accordion-heading"
      >
        {children}
      </Heading>
      {ArrowIcon && (
        <ArrowIcon
          aria-hidden
          className={classNames(
            theme.title.arrow.base,
            theme.title.arrow.open[isOpen ? 'on' : 'off']
          )}
          data-testid="flowbite-accordion-arrow"
        />
      )}
    </button>
  )
}
