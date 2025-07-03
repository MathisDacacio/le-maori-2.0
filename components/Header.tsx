import { getScopedI18n } from '@locales/server';
import styles from '@styles/component/Header.module.css';
import { LocaleSelect } from '@components/LocaleSelect';
import { HeaderClient } from '@components/HeaderClient';

export default async function Header({ locale }: { locale: string }) {
  const t = await getScopedI18n("header");

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <HeaderClient
          locale={locale}
          labels={{
            home: t("home"),
            menu: t("menu"),
            about: t("about")
          }}
        />
        <img src="/image/decorative/logo_maori.png" alt="Logo" className={styles.logo} />
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
