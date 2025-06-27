import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from '@styles/Layout.module.css';
import { Providers } from './providers';
import Header from '@components/Header';
import Footer from '@components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Le Maori 2.0',
  description: 'A Next.js application with internationalization support',
};

// Le layout devient async, et on await les params
export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // await l'accès aux params (nouvelle exigence Next.js 15+)
  const { locale } = await Promise.resolve(props.params);

  return (
    <html lang={locale}>
      <body className={`${inter.className} ${styles.body}`}>
        <div className={styles.wrapper}>
          <Providers locale={locale}>
            <Header locale={locale} />
            <main className={styles.main}>{props.children}</main>
            <Footer locale={locale} />
          </Providers>
        </div>
      </body>
    </html>
  );
}
