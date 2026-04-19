import { Outlet } from 'react-router-dom';
import styles from './MainLayout.module.css';

export default function MainLayout() {
    return (
        <>
            <header className={styles.header}>
                <h1>Akil Karthikeyan Anandan</h1>
            </header>
            <main className={styles.main}>
                {/* Child components like <Home /> or <About /> appear here */}
                <Outlet />
            </main>
            <footer className={styles.footer}>
                <div className={styles.socialLinks}>
                    <a href="https://linkedin.com/in/akilkarthikeyan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/akilkarthikeyan" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:akilkarthikeyan@outlook.com">Email</a>
                </div>
            </footer>
        </>
    );
}