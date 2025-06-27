// app/[locale]/page.tsx

import { getScopedI18n } from '@locales/server';

export default async function Page() {
  const homeT = await getScopedI18n("home");
  return (
    <div>
      <h1> {homeT("title.welcome")}</h1>
      <p>This is a sample page demonstrating internationalization in Next.js.</p>
    </div>
  );
}