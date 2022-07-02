import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import Theme from '@/components/inc/Theme'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'

export default function ThemeChanger() {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  const currentTheme = theme === 'system' ? systemTheme : theme

  return currentTheme === 'dark' ? (
    <>
      <Theme theme={'dark'} />
      <div
        className={'mx-auto rounded-full bg-gray-900 p-2.5'}
        onClick={() => {
          setTheme('light')
        }}
      >
        <SunIcon className={'h-5 w-5'} role={'button'} />
      </div>
    </>
  ) : (
    <>
      <Theme theme={'light'} />
      <div
        className={'mx-auto rounded-full bg-gray-100 p-2.5'}
        onClick={() => {
          setTheme('dark')
        }}
      >
        <MoonIcon className={'h-5 w-5'} role={'button'} />
      </div>
    </>
  )
}
