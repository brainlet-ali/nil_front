export default function FeatureLoading(props) {
  return (
    <div className={'animate-pulse'}>
      <div
        className={
          'flex flex-col items-center justify-between space-y-4 text-center sm:flex-row sm:space-y-0'
        }
      >
        <div className="h-4 w-3/5 rounded-xl bg-zinc-200 dark:bg-zinc-500"></div>
        <span>
          <span className="inline-block h-4 w-20 rounded-xl bg-zinc-200 dark:bg-zinc-500"></span>
        </span>
      </div>
      <div className="my-2 mx-auto h-4 w-4/5 rounded-xl bg-zinc-200 dark:bg-zinc-500 sm:mx-0"></div>

      <div className="mt-4 h-48 rounded-xl bg-zinc-200 dark:bg-zinc-500"></div>
    </div>
  )
}
