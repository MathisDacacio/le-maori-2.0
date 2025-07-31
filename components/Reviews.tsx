import styles from '@styles/component/Reviews.module.css';
import { getScopedI18n } from '@locales/server';

export default async function Reviews() {
    const reviewsT = await getScopedI18n('about.reviews');
    return (
      <div className={styles.buttonGroup}>
          <a
            href="https://www.google.fr/maps/place/Le+Maori+2.0/@50.2475438,3.6354316,17z/data=!3m1!4b1!4m6!3m5!1s0x47c28b8c96814fef:0xf966314a2e2baded!8m2!3d50.2475404!4d3.6380065!16s%2Fg%2F11v3fkl8qs?hl=fr&entry=ttu&g_ep=EgoyMDI1MDcyOC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewButton}
          >
            <img src="/image/decorative/aboutPage/Logo/google.svg" alt="Google logo" className={styles.icon} />
            <span>{reviewsT('googleText')}</span>
          </a>
          <a
            href="https://www.tripadvisor.fr/Restaurant_Review-g1424555-d27714109-Reviews-Le_Maori_2_0-Le_Quesnoy_Nord_Hauts_de_France.html"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.reviewButton}
          >
            <img src="/image/decorative/aboutPage/Logo/tripadvisor.svg" alt="Tripadvisor logo" className={styles.icon} />
            <span>{reviewsT('tripadvisorText')}</span>
          </a>
        </div>
    );
}