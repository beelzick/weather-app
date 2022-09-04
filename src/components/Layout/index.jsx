import styles from './index.module.scss'

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>Weather app</header>
      <main>{children}</main>
      <footer className={styles.footer}>footer</footer>
    </>
  )
}
