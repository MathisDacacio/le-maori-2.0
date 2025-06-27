"use client";

import { useCurrentLocale, useChangeLocale } from '@locales/client';

export const LocaleSelect = () => {
  const locale = useCurrentLocale();
  const changeLocale = useChangeLocale();

  return (
    <select
      value={locale}
      onChange={(e) => changeLocale(e.target.value as "en" | "fr")}
      style={{ marginLeft: '10px', padding: '5px' }}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}