import Head from 'next/head'
import { PageContainer } from '@/components/inc/PageContainer'
import Header from '@/components/inc/Header'
import { APP } from '@/lib/constant'
import Feature from '@/components/feature/Feature'
import FeatureGrid from '@/components/feature/FeatureGrid'
import { useRouter } from 'next/router'

export default function Index() {
  const router = useRouter()
  const { version } = router.query

  return (
    <div>
      <Head>
        <title>{APP.SITE_TITLE}</title>
        <meta name="description" content="What 's new in Laravel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'dark:bg-zinc-800'}>
        <PageContainer>
          <Header version={version} />

          <hr className={'my-20'} />

          <main>
            <FeatureGrid>
              <Feature />
            </FeatureGrid>
          </main>
        </PageContainer>
      </div>
    </div>
  )
}
