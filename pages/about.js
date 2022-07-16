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
              <p className={'mt-32 text-center text-lg'}>
                I'm a Full Stack Web Developer.
              </p>
              <p className={'mt-4 text-center'}>
                <a
                  className={'text-brand'}
                  href={'https://twitter.com/brainlet_ali'}
                  target={'_blank'}
                >
                  Twitter
                </a>{' '}
                |{' '}
                <a
                  className={'text-brand'}
                  href={'https://github.com/brainlet-ali'}
                  target={'_blank'}
                >
                  Github
                </a>
              </p>
            </main>
          </PageContainer>
        </div>
      </div>
    </>
  )
}
