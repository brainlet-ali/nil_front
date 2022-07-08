import { DuplicateIcon } from '@heroicons/react/outline'
import Highlight from 'react-highlight'

export default function CodeBlock() {
  return (
    <div
      className={
        'relative mt-2 max-w-7xl overflow-auto bg-brand-code_light px-10 py-2 shadow dark:bg-brand-code_dark sm:rounded-2xl'
      }
    >
      <span className={'absolute right-6 top-4 '}>
        <DuplicateIcon className={'h-6 w-6'} />
      </span>
      <Highlight className="php">{`// Before
Http::withOptions([
    'allow_redirects' => ['max' => 10],
])->get('/endpoint');

// After
Http::allowMaxRedirects(10)->get('/endpoint');`}</Highlight>
    </div>
  )
}
