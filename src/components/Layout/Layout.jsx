import styles from './Layout.module.scss';

export default function Layout({ children }) {
    console.log('test')
    return (
        <div><header style={styles.header}>
                header</header>
            <main>
                {children}
            </main>
            <footer>
                footer
            </footer>
        </div>
    )
}