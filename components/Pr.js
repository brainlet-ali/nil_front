import CodeBlock from '@/components/inc/CodeBlock'

export default function Pr(props) {
  return (
    <div>
      <div
        className={
          'flex flex-col items-center justify-between space-y-4 text-center sm:flex-row sm:space-y-0'
        }
      >
        <h2 className={'text-center text-2xl font-black md:text-left'}>
          Add new allowMaxRedirects method to PendingRequest
        </h2>
        <span>
          PR&nbsp;&nbsp;
          <a
            className={
              'rounded-lg bg-stone-200 py-1 px-2 font-bold text-blue-900 shadow-2xl hover:text-blue-700 dark:bg-stone-50'
            }
            href=""
            target={'_blank'}
          >
            24904
          </a>
        </span>
      </div>
      <p
        className={
          'my-4 px-4 text-center text-zinc-900 dark:text-zinc-100 sm:px-0 sm:text-left'
        }
      >
        This PR adds a new allowMaxRedirects() method on the PendingRequest to
        easily set/change the max redirects value for the allow_redirects
        option.
      </p>
      <CodeBlock />
    </div>
  )
}
