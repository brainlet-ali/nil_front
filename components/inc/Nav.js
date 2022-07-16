import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={'space-x-6'}>
      <Link href={'/version/9.19'}>
        <a className={'tracking-widest text-brand hover:text-brand-700'}>
          Home
        </a>
      </Link>
      <Link href={'/about'}>
        <a className={'tracking-widest text-brand hover:text-brand-700'}>
          About
        </a>
      </Link>
      <Link href={'/why'}>
        <a className={'tracking-widest text-brand hover:text-brand-700'}>Why</a>
      </Link>
    </nav>
  )
}
