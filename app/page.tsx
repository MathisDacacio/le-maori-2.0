import styles from '@styles/HomePage.module.css';

// oserez vous venir en terre maori ?



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
