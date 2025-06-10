'use client';
import styles from '@styles/Footer.module.css';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.location}>
          <h4>Brasserie Le Maori 2.0</h4>
          <p>8 Rue Casimir Fournier, 59530 Le Quesnoy</p>
          <p>Tél : <a href="tel:+33977052778">09 77 05 27 78</a></p>
          <p><a target='_blank' href="https://www.google.fr/maps/place/Le+Maori+2.0/@50.2475974,3.6374987,19.5z/data=!4m16!1m7!3m6!1s0x47c28b8c96814fef:0xf966314a2e2baded!2sLe+Maori+2.0!8m2!3d50.2475404!4d3.6380065!16s%2Fg%2F11v3fkl8qs!3m7!1s0x47c28b8c96814fef:0xf966314a2e2baded!8m2!3d50.2475404!4d3.6380065!9m1!1b1!16s%2Fg%2F11v3fkl8qs?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D">Voir les avis</a></p>
        </div>

        <div className={styles.right}>
          <p className={styles.catchphrase}>
            🍕 Découvrez la brasserie la mieux noté du Quesnoy ! </p>
          <a href="/mentions-legales" className={styles.legal}>Mentions légales</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 <strong>Le Maori 2.0</strong> — Réalisé par Dacacio Mathis</p>
        <button onClick={scrollToTop} className={styles.scrollTop} aria-label="Retour en haut">
          ↑
        </button>
      </div>
    </footer>
  );
}
