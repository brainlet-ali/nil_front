import CodeBlock from '@/components/inc/CodeBlock'

export default function Feature({ feature }) {
  return (
    <div>
      <div
        className={
          'flex flex-col items-center justify-between space-y-4 text-center sm:flex-row sm:space-y-0'
        }
      >
        <h2 className={'text-center text-2xl font-black md:text-left'}>
          {feature.title}
        </h2>
        <span>
          PR&nbsp;&nbsp;
          <a
            className={
              'rounded-lg bg-stone-200 py-1 px-2 font-bold text-blue-900 shadow-2xl hover:text-blue-700 dark:bg-stone-50'
            }
            href={feature.pr.link}
            target={'_blank'}
          >
            {feature.pr.number}
          </a>
        </span>
      </div>
      <p
        className={
          'my-4 px-4 text-center text-zinc-900 dark:text-zinc-100 sm:px-0 sm:text-left'
        }
      >
        {feature.description}
      </p>
      <CodeBlock code={feature.body} />
    </div>
  )
}
