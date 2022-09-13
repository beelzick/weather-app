import styles from './index.module.scss'
import cn from 'classnames'
import Image from 'next/future/image'

export default function Layout({ children }) {
  return (
    <>
      <header className={cn(styles.header, 'container')}>Weather app</header>
      <main>{children}</main>
      <footer className={cn(styles.footer, 'container')}>
        <div>WeatherLogo</div>
        <div className={styles.footer__content}>
          <span className='caption'>Stworzone i utrzymywane przez</span>
          <a href='https://cratun.pl'>
            <Image width={144} height={29.8} src='/cratun-logo.svg' alt='Cratun Logo' />
          </a>
        </div>
      </footer>
    </>
  )
}
