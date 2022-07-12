import styles from './Layout.module.css'
import About from "./About.js"
import Footer from "./Footer.js"

export default function Layout() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <About />
                <Footer />
            </main>
        </div>
    );
}