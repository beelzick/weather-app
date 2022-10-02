import styles from './index.module.scss'
import cn from 'classnames'
import Image from 'next/future/image'
import SearchBar from '../SearchBar'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <>
      <header className={cn(styles.header, 'container')}>
        <Link href='/warszawa'>
          <Image className={styles.logo} height={31} width={110} src='/logo.svg' alt='Weatherdrobe Logo' />
        </Link>
        <SearchBar />
      </header>
      <main>{children}</main>
      <footer className={cn(styles.footer, 'container')}>
        <a href='https://cratun.pl' className={styles.footer__content}>
          <span className={cn(styles.footer__caption, 'caption')}>Stworzone i utrzymywane przez</span>
          <Image width={97} height={20} src='/cratun-logo.svg' alt='Cratun Logo' />
        </a>
      </footer>
    </>
  )
}
