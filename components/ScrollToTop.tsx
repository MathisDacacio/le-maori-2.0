'use client';

import styles from '@styles/ScrollToTop.module.css';

export default function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={styles.scrollTop}
      aria-label="Retour en haut"
    >
      ↑
    </button>
  );
}
