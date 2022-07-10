import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={'space-x-6'}>
      <Link href={'/'}>
        <a className={'tracking-widest text-brand hover:text-brand-700'}>
          About
        </a>
      </Link>
      <Link href={'/'}>
        <a className={'tracking-widest text-brand hover:text-brand-700'}>Why</a>
      </Link>
    </nav>
  )
}
