import styles from "./Home.module.css";

export default function Home() {
    return (
        <main>
            <div className={styles.hero}>
                <img src="/akil.jpeg" alt="Akil Karthikeyan" className={styles.image} />
                <div className={styles.content}>
                    <p>Hi, I'm Akil!</p>
                    <p>I'm a Systems Engineer at Cloudflare. I'm also a computer science graduate from the University of Illinois Urbana-Champaign and a computer science undergraduate from SSN College of Engineering (India).</p>
                    <p>I enjoy all areas of CS and love solving problems. When I solve a problem, I try to understand the what and why behind it before even attempting to solve it. If I don't understand something, I ask as many questions (or do as many Google searches) as it takes until it clicks.
                        After that, solving the problem is just a matter of time and effort.</p>
                </div>
            </div>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Experience</h2>
                <article>
                    <h3 className={styles.role}>Systems Engineer</h3>
                    <p className={styles.meta}>Cloudflare · Jan 2026 - Present</p>
                    <p className={styles.itemDescription}>Returned to the DIA platform team</p>
                </article>
                <article>
                    <h3 className={styles.role}>Software Engineering Intern</h3>
                    <p className={styles.meta}>Cloudflare · May 2025 - Aug 2025</p>
                    <p className={styles.itemDescription}>Interned in the Data Intelligence and Analytics (DIA) platform team; we build and maintain systems that engineers and analysts use to make data-driven decisions</p>
                </article>
                <article>
                    <h3 className={styles.role}>Course Assistant</h3>
                    <p className={styles.meta}>University of Illinois Urbana-Champaign · Jan 2025 - Dec 2025</p>
                    <p className={styles.itemDescription}>Assisted in the courses Databases Systems (CS411) and Software Design Lab (CS222)</p>
                </article>
            </section>
            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>Currently Exploring</h2>
                <p className={styles.sectionDescription}>A few areas I am spending extra time learning and building in.</p>
                <ul className={styles.list}>
                    <li><strong>Programming Languages:</strong> I am learning more Go and Python.</li>
                    <li><strong>Cloud infrastructure:</strong> Docker and Kubernetes.</li>
                </ul>
            </section>
        </main>
    );
}
