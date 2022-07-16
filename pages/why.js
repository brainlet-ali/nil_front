import Head from 'next/head'
import { PageContainer } from '@/components/inc/PageContainer'
import { APP } from '@/lib/constant'
import Nav from '@/components/inc/Nav'
import ThemeChanger from '@/components/inc/ThemeChanger'

export default function Index() {
  return (
    <>
      <div>
        <Head>
          <title>{APP.SITE_TITLE} - About</title>
          <meta name="description" content="What 's new in Laravel" />
          <link rel="icon" href="/public/favicon.ico" />
        </Head>

        <div className={'dark:bg-zinc-800'}>
          <PageContainer>
            <div className={'mx-auto mb-10 w-2/4 sm:w-1/4'}>
              <div className={'flex items-center justify-between'}>
                <Nav />

                <ThemeChanger />
              </div>
            </div>

            <main>
              <p className={'mx-auto mt-32 max-w-4xl text-center text-lg'}>
                I don't know about you but I'm pretty slow when it comes to keep
                up with all the new updates in Laravel framework. With new
                semantic versioning system introduced in Laravel 9 they are
                shipping like crazy fast. So it would be helpful if I get an
                executive summary of all the new features added at one place.
                <br />
                <br />
                And hey common !! it has got light and dark theme{' '}
                <span className={'text-3xl'}>&#128522;</span>
              </p>
            </main>
          </PageContainer>
        </div>
      </div>
    </>
  )
}
