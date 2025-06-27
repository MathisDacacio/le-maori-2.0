// Header.tsx
import { getScopedI18n } from '@locales/server';
import Link from 'next/link';
import styles from '@styles/Header.module.css';
import { LocaleSelect } from '@components/LocaleSelect';

export default async function Header({ locale }: { locale: string }) {
  const headerT = await getScopedI18n("header");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
        <Link href={`/${locale}`} className={styles.link}>
          {headerT("title.home")}
        </Link>
        <Link href={`/${locale}/menu`} className={styles.link}>
          {headerT("title.menu")}
        </Link>
        <Link href={`/${locale}/about`} className={styles.link}>
          {headerT("title.about")}
        </Link>
        </nav>
        <img src="/image/decorative/logo.png" alt="Logo" className={styles.logo} />
        <LocaleSelect />
      </div>
      
      <img
        src="/image/decorative/background/separation_3.png"
        alt="image décorative du header"
        className={styles.imgHeader}
      />
    </header>
  );
}
