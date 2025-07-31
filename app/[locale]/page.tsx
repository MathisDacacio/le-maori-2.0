// app/[locale]/page.tsx

import styles from '@styles/page/HomePage.module.css';
import Link from 'next/link';
import { getScopedI18n } from '@locales/server';
import Carrousel from '@components/Carrousel';
import Reviews from '@components/Reviews';
   
export default async function HomePage() {
  const homepageT = await getScopedI18n("homepage.herosection");
  const homesection1T = await getScopedI18n("homepage.homesection1");
  const homesection2T = await getScopedI18n("homepage.homesection2");
  const homesection3T = await getScopedI18n("homepage.homesection3");
  const homesection4T = await getScopedI18n("homepage.homesection4");

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <img
        src="/image/decorative/homePage/bienvenue.jpg"
        alt="Image de fond du restaurant Maori"
        className={styles.heroImage}
      />
      <h1 className={styles.title}>{homepageT("welcome")}</h1>

      {/* SECTION 1 */}
      <section className={styles.Section1_wrapper}>
        {/* Carte 1 */}
        <div className={styles.Section1_card}>
          <div className={styles.text}>
            <h2>{homesection1T("card1.title")}</h2>
            <p>
              {homesection1T("card1.callToAction")}:{" "}
              <a href="tel:+33977052778" className={styles.link}>09 77 05 27 78</a>
            </p>
          </div>
          <img src="/image/decorative/homePage/salle.jpg" alt="Photo de l'intérieure du Maori" className={styles.image}/>
        </div>

        {/* Carte 2 */}
        <div className={`${styles.Section1_card} ${styles.reverse}`}>
          <div className={styles.text}>
            <h2>{homesection1T("card2.title")}</h2>
            <div className={styles.openingHours}>
              <h3>{homesection1T("card2.openingHours")}</h3>
              <p>{homesection1T("card2.when.week")}: 10h00 - 23h00</p>
              <p>{homesection1T("card2.when.weekend")}: 10h00 - 00h00</p>
              <h3>{homesection1T("card2.openingHoursKitchen")}</h3>
              <p>{homesection1T("card2.when.lunch")}: 12h00 - 13h45</p>
              <p>{homesection1T("card2.when.dinner")}: 19h00 - 21h45</p>
            </div>
          </div>
          <img src="/image/decorative/homePage/facade.jpg" alt="Photo de la façade du Maori" className={styles.image}/>
        </div>

        {/* Carte 3 */}
        <div className={styles.Section1_card}>
          <div className={styles.text}>
            <h2>{homesection1T("card3.title")}</h2>
            <p>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Le+Maori+2.0+Le+Quesnoy"
                target="_blank"
                className={styles.link}
              >
                {homesection1T("card3.callToAction")}
              </a>
            </p>
          </div>
          <iframe
            className={styles.map}
            title="Carte du restaurant Maori"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.3769440506444!2d3.6354315775125263!3d50.24754380195137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c28b8c96814fef%3A0xf966314a2e2baded!2sLe%20Maori%202.0!5e0!3m2!1sfr!2sfr!4v1752750105453!5m2!1sfr!2sfr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Carte 4 */}
        <div className={`${styles.Section1_card} ${styles.reverse}`}>
          <div className={styles.text}>
            <h2>{homesection1T("card4.title")}</h2>
            <p>{homesection1T("card4.description")}</p>
            <Link href="/menu" className={styles.bouton}>
              {homesection1T("card4.menuLink")}
            </Link>
          </div>
          <img src="/image/menu/burger/le_states.png" alt="Photo d'un plat" className={styles.image}/>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className={styles.Section2_wrapper}>
        <h2 className={styles.title}>{homesection2T("title")}</h2>
        <Carrousel />
      </section>

      {/* SECTION 3 */}
      <section className={styles.Section3_wrapper}>
        <h2 className={styles.title}>{homesection3T("title")}:</h2>
        <div className={styles.Section3_content}>
          <div className={styles.Section3_element}>
            <img src="/image/decorative/homePage/logo_section3/carte_bancaire.svg" alt="Logo carte bancaire" className={styles.Section3_icon} />
            <p>{homesection3T("paymentMethods.creditCard")}</p>
          </div>
          <div className={styles.Section3_element}>
            <img src="/image/decorative/homePage/logo_section3/espece.png" alt="Logo espèce" className={styles.Section3_icon} />
            <p>{homesection3T("paymentMethods.cash")}</p>
          </div>
          <div className={styles.Section3_element}>
            <img src="/image/decorative/homePage/logo_section3/cheque_dejeuner.png" alt="Logo chèque déjeuner" className={styles.Section3_icon} />
            <p>{homesection3T("paymentMethods.mealVouchers")}</p>
          </div>
          <div className={styles.Section3_element}>
            <img src="/image/decorative/homePage/logo_section3/carte_dejeuner.png" alt="Logo Carte déjeuner" className={styles.Section3_icon} />
            <p>{homesection3T("paymentMethods.mealCard")}</p>
          </div>
        </div>
      </section>
      <span className={styles.separatorImage}></span>

      {/* SECTION 4 */}
      <section className={styles.Section4_wrapper}>
        <div className={styles.Section4_vertical}>
          <div className={styles.Section4_card}>
            <h2>{homesection4T("choose.title")}</h2>
            <p><Link href="/menu">{homesection4T("choose.callToAction")}</Link></p>
            <h2>{homesection4T("immersive.title")}</h2>
            <p><Link href="/about#video">{homesection4T("immersive.callToAction")}</Link></p>
          </div>
          <img src="/image/decorative/homePage/decoration_murale.jpg" alt="decoration du restaurant" className={styles.Section4_image}/>
        </div>

        <div className={styles.Section4_media}>
          <h2>{homesection4T("media.title")}</h2>
          <p><Link href="/about#media">{homesection4T("media.callToAction")}</Link></p>
        </div>

        <div className={styles.Section4_vertical}>
          <img src="/image/decorative/homePage/Tshirt_maori.jpg" alt="Tshirt le Maori" className={styles.Section4_image}/>
          <div className={styles.Section4_card}>
            <h2>{homesection4T("reviews.title")}</h2>
            <Reviews />
            <h2>{homesection4T("contact.title")}</h2>
            <ul>
              <li>{homesection4T("contact.tel")}: <a href="tel:+33977052778">09 77 05 27 78</a></li>
              <li>{homesection4T("contact.email")}: <a href="mailto:lemaori@gmail.com">lemaori@gmail.com</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
