import { FlowbiteAvatarTheme } from './Avatar'

export const theme: FlowbiteAvatarTheme = {
  base: 'flex justify-center items-center space-x-4',
  bordered: 'p-1 ring-2',
  img: {
    off: 'rounded relative overflow-hidden bg-gray-100 dark:bg-gray-600',
    on: 'rounded',
    placeholder: 'absolute w-auto h-auto text-gray-400 -bottom-1',
  },
  rounded: '!rounded-full',
  color: {
    dark: 'ring-gray-800 dark:ring-gray-800',
    failure: 'ring-red-500 dark:ring-red-700',
    gray: 'ring-gray-500 dark:ring-gray-400',
    info: 'ring-blue-400 dark:ring-blue-800',
    light: 'ring-gray-300 dark:ring-gray-500',
    purple: 'ring-purple-500 dark:ring-purple-600',
    success: 'ring-green-500 dark:ring-green-500',
    warning: 'ring-yellow-300 dark:ring-yellow-500',
    pink: 'ring-pink-500 dark:ring-pink-500',
  },
  size: {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-20 h-20',
    xl: 'w-36 h-36',
  },
  stacked: 'ring-2 ring-gray-300 dark:ring-gray-500',
  status: {
    away: 'bg-yellow-400',
    base: 'absolute h-3.5 w-3.5 rounded-full border-2 border-white dark:border-gray-800',
    busy: 'bg-red-400',
    offline: 'bg-gray-400',
    online: 'bg-green-400',
  },
  statusPosition: {
    'bottom-left': '-bottom-1 -left-1',
    'bottom-center': '-botton-1 center',
    'bottom-right': '-bottom-1 -right-1',
    'top-left': '-top-1 -left-1',
    'top-center': '-top-1 center',
    'top-right': '-top-1 -right-1',
    'center-right': 'center -right-1',
    center: 'center center',
    'center-left': 'center -left-1',
  },
  initials: {
    text: 'font-medium text-gray-600 dark:text-gray-300',
    base: 'inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 dark:bg-gray-600',
  },
}
