export default function VersionCircle({ versionName, loading }) {
  return (
    <h2
      className={`
        mx-auto mt-6 flex w-20 items-center justify-center rounded-full bg-brand py-6 text-center text-center text-2xl font-bold text-stone-50
        ${loading ? 'animate-pulse' : ''}
       `}
    >
      <span>{versionName}</span>
    </h2>
  )
}
