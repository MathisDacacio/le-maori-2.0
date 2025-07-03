import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import styles from '@styles/Layout.module.css';
import { Providers } from './providers';
import Header from '@components/Header';
import Footer from '@components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Le Maori 2.0',
  description: 'The Brewery in Le Quesnoy',
};

type LocaleParams = {
  locale: string;
};

type RootLayoutProps = {
  children: React.ReactNode;
  params: Promise<LocaleParams>;
};

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const { locale } = await params;

  return (
    <html lang={locale}>
      <body className={`${inter.className} ${styles.body}`}>
        <div className={styles.wrapper}>
          <Providers locale={locale}>
            <Header locale={locale} />
            <main className={styles.main}>{children}</main>
            <Footer locale={locale} />
          </Providers>
        </div>
      </body>
    </html>
  );
}
