/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@components/Header';
import Footer from '@components/Footer';
import styles from '@styles/Layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Le Maori 2.0',
  description: 'La meilleure Brasserie du Quesnoy !',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${styles.body}`}>
        <div className={styles.wrapper}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
