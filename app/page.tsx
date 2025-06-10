import styles from '@styles/HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Main Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1>Bienvenue au Maori 2.0</h1>
        </div>
      </section>

    </div>
  );
}
