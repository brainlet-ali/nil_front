import { DuplicateIcon } from '@heroicons/react/outline'
import Highlight from 'react-highlight'

export default function CodeBlock() {
  return (
    <div
      className={
        'relative mt-8 rounded-2xl bg-brand-code_light px-10 py-8 dark:bg-brand-code_dark'
      }
    >
      <span className={'absolute right-6 top-4 '}>
        <DuplicateIcon className={'h-6 w-6'} />
      </span>
      <Highlight className="php">{`Thi s is a code block`}</Highlight>
    </div>
  )
}
