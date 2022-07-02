import Head from 'next/head'
import { PageContainer } from '@/components/PageContainer'
import Header from '@/components/inc/Header'
import Highlight from 'react-highlight'
import { useState } from 'react'
import Theme from '@/components/inc/Theme'
import { DuplicateIcon } from '@heroicons/react/outline'
import CodeBlock from '@/components/inc/CodeBlock'

export default function Home() {
  const [theme, setTheme] = useState('dark')

  return (
    <div>
      <Head>
        <title>What's new in Laravel</title>
        <meta name="description" content="What 's new in Laravel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'h-full dark:bg-zinc-800'}>
        <PageContainer>
          <div className={'hh-full flex flex-col'}>
            <Header
              onThemeChange={(theme) => {
                setTheme(theme)
              }}
            />

            <Theme theme={theme} />

            <main className={'h-full'}>
              <CodeBlock>
                <span className={'absolute right-6 top-4 '}>
                  <DuplicateIcon className={'h-6 w-6'} />
                </span>
                <Highlight className="php">{`Thi s is a code block`}</Highlight>
              </CodeBlock>
            </main>
          </div>
        </PageContainer>
      </div>
    </div>
  )
}
