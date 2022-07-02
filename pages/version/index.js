import Head from 'next/head'
import { PageContainer } from '@/components/PageContainer'
import Header from '@/components/inc/Header'
import CodeBlock from '@/components/inc/CodeBlock'
import { APP } from '@/lib/constant'

export default function Index() {
  return (
    <div>
      <Head>
        <title>{APP.SITE_TITLE}</title>
        <meta name="description" content="What 's new in Laravel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'h-full dark:bg-zinc-800'}>
        <PageContainer>
          <Header />
          <main>
            <CodeBlock />
          </main>
        </PageContainer>
      </div>
    </div>
  )
}
