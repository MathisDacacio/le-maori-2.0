'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styles from '@styles/component/Header.module.css';

export function HeaderClient({ locale, labels }: { locale: string; labels: Record<string, string> }) {
  const pathname = usePathname();

  const navItems = [
    { label: labels.home, path: `/${locale}` },
    { label: labels.menu, path: `/${locale}/menu` },
    { label: labels.about, path: `/${locale}/about` },
  ];

  return (
    <nav className={styles.nav}>
      {navItems.map(({ label, path }) => (
        <Link
          key={path}
          href={path}
          className={`${styles.link} ${pathname === path ? styles.active : ''}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
