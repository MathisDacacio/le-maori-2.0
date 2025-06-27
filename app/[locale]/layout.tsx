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

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { 
    locale: string 
  };
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} ${styles.body}`}>
        <div className={styles.wrapper}>
        <Providers locale={params.locale}>
          <Header locale={params.locale} />
            <main className={styles.main}>{children}</main>
          <Footer locale={params.locale}/>
        </Providers>
        </div>
      </body>
    </html>
  );
}