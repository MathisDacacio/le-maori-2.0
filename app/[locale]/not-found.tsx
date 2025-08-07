'use client';

import Link from 'next/link';
import { useScopedI18n } from '@locales/client';
import Image from 'next/image';
import styles from '@styles/page/NotFound.module.css';
import MaoriDeco from '@components/DecoMaori';

export default function NotFound() {
  const t = useScopedI18n('notFound');

  return (
    <div className={styles.container}>

      {/* Decoration */}
      <MaoriDeco
        image="/image/decorative/decoMaori/kiwi.svg"
        position="bottom-right"
        size={400}
        rotate={180}
      />

      <h1 className={styles.title}>{t('title')}</h1>

      <div className={styles.imageWrapper}>
        <Image
          src="/image/decorative/notFound.png"
          alt="Page Not Found"
          fill
          className={styles.image}
        />
      </div>

      <p className={styles.description}>{t('description')}</p>

      <Link href="/" className={styles.button}>
        {t('backHome')}
      </Link>
    </div>
  );
}
