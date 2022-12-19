import classNames from 'classnames'
import type { ComponentProps, FC, PropsWithChildren } from 'react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { CustomBoolean, Positions, Size } from '../../types'
import { theme } from './modal.theme'
import { ModalBody } from './ModalBody'
import { ModalContext } from './ModalContext'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'

export interface FlowbiteModalTheme {
  base: string
  show: CustomBoolean
  content: {
    base: string
    inner: string
  }
  body: {
    base: string
    popup: string
  }
  header: {
    base: string
    popup: string
    title: string
    close: {
      base: string
      icon: string
    }
  }
  footer: {
    base: string
    popup: string
  }
  sizes: ModalSizes
  positions: ModalPositions
}

export interface ModalPositions extends Positions {
  [key: string]: string
}

export interface ModalSizes extends Omit<Size, 'xs'> {
  [key: string]: string
}

export interface ModalProps extends PropsWithChildren<ComponentProps<'div'>> {
  onClose?: () => void
  position?: keyof ModalPositions
  popup?: boolean
  root?: HTMLElement
  show?: boolean
  size?: keyof ModalSizes
  innerClassName?: string
}

const ModalComponent: FC<ModalProps> = ({
  children,
  show,
  root,
  popup,
  size = '2xl',
  position = 'center',
  onClose,
  className,
  innerClassName,
  ...props
}) => {
  const [parent, setParent] = useState<HTMLElement | undefined>(root)
  const [container, setContainer] = useState<HTMLDivElement | undefined>()

  useEffect(() => {
    if (!parent) setParent(document.body)
    if (!container) setContainer(document.createElement('div'))
  }, [])

  useEffect(() => {
    if (!container || !parent || !show) {
      return
    }

    parent.appendChild(container)

    return () => {
      if (container) {
        parent.removeChild(container)
      }
    }
  }, [container, parent, show])

  return container
    ? createPortal(
        <ModalContext.Provider value={{ popup, onClose }}>
          <div
            aria-hidden={!show}
            className={classNames(
              theme.base,
              theme.positions[position],
              show ? theme.show.on : theme.show.off,
              className
            )}
            data-testid="modal"
            role="dialog"
            {...props}
          >
            <div className={classNames(theme.content.base, theme.sizes[size])}>
              <div className={classNames(theme.content.inner, innerClassName)}>
                {children}
              </div>
            </div>
          </div>
        </ModalContext.Provider>,
        container
      )
    : null
}

ModalComponent.displayName = 'Modal'
ModalHeader.displayName = 'Modal.Header'
ModalBody.displayName = 'Modal.Body'
ModalFooter.displayName = 'Modal.Footer'

export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter,
})
