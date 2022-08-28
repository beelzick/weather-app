import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div>
      <header style={styles.header}>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </div>
  )
}
