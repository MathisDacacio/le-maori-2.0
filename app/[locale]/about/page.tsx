import styles from '@styles/page/About.module.css';
import Image from 'next/image';
import { getScopedI18n } from '@locales/server';
import Media from '@components/Media';

export default async function AboutPage() {
  const aboutT = await getScopedI18n('about');
  const historyT = await getScopedI18n('about.history');
  const videoT = await getScopedI18n('about.video');
  const reviewsT = await getScopedI18n('about.reviews');
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{aboutT('title')}</h1>
        <Image
          src="/image/decorative/homePage/bienvenue.jpg"
          alt="Image du personnel"
          width={1400}
          height={400}
          className={styles.image}
        />
        <div className={styles.history}>
          <h2>{historyT('title')}</h2>
          <p>{historyT('description')}</p>
        </div>

        <section className={styles.socialMedia} id="media">
          <Media />
        </section>

        <section className={styles.video} id="video">
          <div>
            <h2>{videoT('title')}</h2>
            <p>{videoT('description')}</p>
          </div>
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            title="Vidéo de présentation"
            className={styles.videoFrame}
          ></iframe>
        </section>

        <section className={styles.reviews}>
          <h2>{reviewsT('title')}</h2>
          <p>{reviewsT('description')}</p>
          <a target="_blank" href="https://www.google.fr/maps/place/Le+Maori+2.0/@50.2475974,3.6374987,19.5z/data=!4m16!1m7!3m6!1s0x47c28b8c96814fef:0xf966314a2e2baded!2sLe+Maori+2.0!8m2!3d50.2475404!4d3.6380065!16s%2Fg%2F11v3fkl8qs!3m7!1s0x47c28b8c96814fef:0xf966314a2e2baded!8m2!3d50.2475404!4d3.6380065!9m1!1b1!16s%2Fg%2F11v3fkl8qs?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D">{reviewsT('linkText')}</a>
        </section>
      </div>
    )
  }
  