import Version from '@/components/version/VersionSelector'
import SiteHeading from '@/components/inc/SiteHeading'
import ThemeChanger from '@/components/inc/ThemeChanger'
import Nav from '@/components/inc/Nav'

const Header = () => {
  return (
    <>
      <div className={'mx-auto mb-10 w-1/4'}>
        <div className={'flex items-center justify-between'}>
          <Nav />

          <ThemeChanger />
        </div>
      </div>

      <SiteHeading>
        What's new in&nbsp;
        <span className={'tracking-widest text-brand'}>LARAVEL</span>
      </SiteHeading>

      <Version />
    </>
  )
}

export default Header
