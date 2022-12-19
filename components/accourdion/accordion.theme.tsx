import { CustomBoolean } from '../../types'

type AccordionTheme = {
  base: string
  content: {
    base: string
  }
  flush: CustomBoolean
  title: {
    arrow: {
      base: string
      open: {
        off: string
        on: string
      }
    }
    base: string
    flush: CustomBoolean
    heading: string
    open: CustomBoolean
  }
}

export const theme: AccordionTheme = {
  base: 'divide-y divide-gray-200 border-gray-200 dark:divide-gray-700 dark:border-gray-700',
  content: {
    base: 'py-5 px-5 last:rounded-b-lg dark:bg-gray-900 first:rounded-t-lg',
  },
  flush: {
    off: 'rounded-lg border',
    on: 'border-b',
  },
  title: {
    arrow: {
      base: 'h-6 w-6 shrink-0',
      open: {
        off: '',
        on: 'rotate-180',
      },
    },
    base: 'flex w-full items-center justify-between first:rounded-t-lg last:rounded-b-lg py-5 px-5 text-left font-medium text-gray-500 dark:text-gray-400',
    flush: {
      off: 'hover:bg-gray-100 dark:hover:bg-gray-800',
      on: '!bg-transparent dark:!bg-transparent',
    },
    heading: '',
    open: {
      off: '',
      on: 'text-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white',
    },
  },
}
