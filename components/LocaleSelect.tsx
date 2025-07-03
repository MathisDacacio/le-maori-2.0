"use client";

import { useCurrentLocale, useChangeLocale } from '@locales/client';
import styles from '@styles/component/LocaleSelect.module.css';

export const LocaleSelect = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <select
      className={styles.localeSelect}
      value={locale}
      onChange={(e) => changeLocale(e.target.value as "en" | "fr")}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
};
