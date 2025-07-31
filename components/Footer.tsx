import styles from '@styles/component/Footer.module.css';
import { getScopedI18n } from '@locales/server';
import ScrollToTopButton from '@components/ScrollToTop';

export default async function Footer({ locale }: { locale: string }) {
  const footerT = await getScopedI18n("footer");

  return (
    <footer className={styles.footer}>
      <img src="/image/decorative/background/separation_4.png" alt="image décorative du footer" className={styles.imgFooter} />
      <div className={styles.content}>
        <div className={styles.location}>
          <h4>{footerT("title")}</h4>
          <p>8 Rue Casimir Fournier, 59530 Le Quesnoy</p>
          <p>{footerT("phone")} <a href="tel:+33977052778">09 77 05 27 78</a></p>
          <h3>{footerT("reviews")}:</h3>
          <div className={styles.reviewLinks}>
            <p><a target='_blank' href="https://www.google.fr/maps/place/Le+Maori+2.0/@50.2475974,3.6374987,19.5z/data=!4m16!1m7!3m6!1s0x47c28b8c96814fef:0xf966314a2e2baded!2sLe+Maori+2.0!8m2!3d50.2475404!4d3.6380065!16s%2Fg%2F11v3fkl8qs!3m7!1s0x47c28b8c96814fef:0xf966314a2e2baded!8m2!3d50.2475404!4d3.6380065!9m1!1b1!16s%2Fg%2F11v3fkl8qs?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D">{footerT("googleReviews")}</a></p>
            <p>/\</p>
            <p><a target='_blank' href="https://www.tripadvisor.fr/Restaurant_Review-g1424555-d27714109-Reviews-Le_Maori_2_0-Le_Quesnoy_Nord_Hauts_de_France.html">{footerT("tripadvisorReviews")}</a></p>
          </div>
        </div>

        <div className={styles.right}>
          <p className={styles.catchphrase}>
            {footerT("description.text")}</p>
          <a href={`/${locale}/mentions-legales`} className={styles.legal}>{footerT("legalNotice")}</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 <strong>Le Maori 2.0</strong> {footerT("description.copyright.developer")}</p>
        <ScrollToTopButton />
      </div>
    </footer>
  );
}
