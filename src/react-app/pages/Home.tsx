import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.hero}>
            <img src="/akil.jpeg" alt="Akil Karthikeyan" className={styles.image} />
            <div className={styles.content}>
                <p>Hi, I'm Akil!</p>
                <p>I'm a Systems Engineer at Cloudflare. I'm also a computer science graduate from the University of Illinois Urbana-Champaign and a computer science undergraduate from SSN College of Engineering (India).</p>
                <p>I enjoy all areas of CS and love solving problems. When I solve a problem, I try to understand the what and why behind it before even attempting to solve it. If I don't understand something, I ask as many questions (or do as many Google searches) as it takes until it clicks.
                    After that, solving the problem is just a matter of time and effort.</p>
            </div>
        </div>
    );
}
