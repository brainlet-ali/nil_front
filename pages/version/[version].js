import Head from 'next/head'
import { PageContainer } from '@/components/inc/PageContainer'
import Header from '@/components/inc/Header'
import { APP } from '@/lib/constant'
import Feature from '@/components/feature/Feature'
import FeatureGrid from '@/components/feature/FeatureGrid'
import { useRouter } from 'next/router'
import { useState } from 'react'
import FeatureLoading from '@/components/feature/FeatureLoading'

export default function Index() {
  const [versionName, setVersionName] = useState('')

  const [features, setFeatures] = useState([])
  const [featuresLoading, setFeaturesLoading] = useState(true)

  const router = useRouter()
  const { version } = router.query

  return (
    <>
      <div>
        <Head>
          <title>
            {APP.SITE_TITLE} {versionName ? `- V ${versionName}` : ''}
          </title>
          <meta name="description" content="What 's new in Laravel" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={'dark:bg-zinc-800'}>
          <PageContainer>
            <Header
              featuredLoading={featuresLoading}
              onFeaturesLoaded={(features) => {
                setFeatures(features)
                setFeaturesLoading(false)
              }}
              onVersionChange={(name) => {
                setVersionName(name)
                setFeaturesLoading(true)
              }}
              version={version}
            />

            <hr className={'my-20'} />

            <main>
              <FeatureGrid>
                {featuresLoading ? (
                  <FeatureLoading />
                ) : (
                  features.map((feature) => {
                    return (
                      features.length > 0 && (
                        <Feature key={feature.id} feature={feature} />
                      )
                    )
                  })
                )}
              </FeatureGrid>
            </main>
          </PageContainer>
        </div>
      </div>
    </>
  )
}
