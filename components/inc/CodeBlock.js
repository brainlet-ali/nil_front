import { CheckCircleIcon, DuplicateIcon } from '@heroicons/react/outline'
import Highlight from 'react-highlight'
import { useEffect, useState } from 'react'

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setCopied(true)
    }

    const flashTimer = setTimeout(() => {
      setCopied(false)
    }, 1500)

    return () => {
      clearTimeout(flashTimer)
    }
  }, [copied])

  return (
    <div
      className={
        'relative mt-2 max-w-7xl overflow-auto bg-brand-code_light px-10 py-2 shadow dark:bg-brand-code_dark sm:rounded-2xl'
      }
    >
      <span className={'absolute right-6 top-4 '}>
        {!copied && (
          <DuplicateIcon
            onClick={() => {
              navigator.clipboard.writeText(code)
              setCopied(true)
            }}
            role={'button'}
            className={'h-6 w-6'}
          />
        )}
        {copied && <CheckCircleIcon className={'h-6 w-6 text-emerald-500'} />}
      </span>
      <Highlight className="php">{code}</Highlight>
    </div>
  )
}
