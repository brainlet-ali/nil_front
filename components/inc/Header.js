import VersionSelector from '@/components/version/VersionSelector'
import SiteHeading from '@/components/inc/SiteHeading'
import ThemeChanger from '@/components/inc/ThemeChanger'
import Nav from '@/components/inc/Nav'

const Header = ({
  version,
  onVersionChange,
  onFeaturesLoaded,
  featuredLoading,
}) => {
  return (
    <>
      <div className={'mx-auto mb-10 w-2/4 sm:w-1/4'}>
        <div className={'flex items-center justify-between'}>
          <Nav />

          <ThemeChanger />
        </div>
      </div>

      <SiteHeading>
        What's new in&nbsp;
        <span className={'tracking-widest text-brand'}>LARAVEL</span>
      </SiteHeading>

      <VersionSelector
        loading={featuredLoading}
        onFeaturesLoaded={onFeaturesLoaded}
        onVersionChange={onVersionChange}
        version={version}
      />
    </>
  )
}

export default Header
