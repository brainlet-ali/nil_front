import Head from 'next/head'
import { PageContainer } from '@/components/PageContainer'
import Header from '@/components/inc/Header'
import { APP } from '@/lib/constant'
import Pr from '@/components/PR'
import PrGrid from '@/components/PrGrid'

export default function Index() {
  return (
    <div>
      <Head>
        <title>{APP.SITE_TITLE}</title>
        <meta name="description" content="What 's new in Laravel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'dark:bg-zinc-800'}>
        <PageContainer>
          <Header />

          <hr className={'my-20'} />
          <main>
            <PrGrid>
              <Pr />
              <Pr />
            </PrGrid>
          </main>
        </PageContainer>
      </div>
    </div>
  )
}
