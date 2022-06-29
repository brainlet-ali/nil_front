import { useTheme } from 'next-themes'
import Version from '@/components/Versions'
import SiteHeading from '@/components/inc/SiteHeading'
import { MoonIcon, SunIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Header = ({ onThemeChange }) => {
  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme

    onThemeChange(currentTheme)
    if (currentTheme === 'dark') {
      return (
        <div
          className={'mx-auto rounded-full bg-gray-900 p-2.5'}
          onClick={() => {
            setTheme('light')
          }}
        >
          <SunIcon className={'h-5 w-5'} role={'button'} />
        </div>
      )
    }
    return (
      <div
        className={'mx-auto rounded-full bg-gray-100 p-2.5'}
        onClick={() => {
          setTheme('dark')
        }}
      >
        <MoonIcon className={'h-5 w-5'} role={'button'} />
      </div>
    )
  }

  return (
    <>
      <div className={'mx-auto mb-10 w-1/4'}>
        <div className={'flex items-center justify-between'}>
          <nav className={'space-x-6'}>
            <Link href={'/'}>
              <a className={'tracking-widest text-brand hover:text-brand-700'}>
                About
              </a>
            </Link>
            <Link href={'/google'}>
              <a className={'tracking-widest text-brand hover:text-brand-700'}>
                Why
              </a>
            </Link>
          </nav>

          <div>{renderThemeChanger()}</div>
        </div>
      </div>

      <SiteHeading>
        What's new in{' '}
        <span className={'tracking-widest text-brand'}>LARAVEL</span>
      </SiteHeading>

      <Version />
    </>
  )
}

export default Header
