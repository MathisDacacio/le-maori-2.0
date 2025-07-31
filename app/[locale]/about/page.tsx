import styles from '@styles/page/About.module.css';
import Image from 'next/image';
import { getScopedI18n } from '@locales/server';
import Media from '@components/Media';
import Reviews from '@components/Reviews';

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

        <Image
          src="/image/decorative/aboutPage/planche.jpg"
          alt="Image de fond du restaurant Maori"
          width={400}
          height={1400}
          className={styles.imageVertical}
        />

        <section className={styles.reviews} id='reviews'>
        <h2>{reviewsT('title')}</h2>
        <p>{reviewsT('description')}</p>
        <Reviews />
      </section>

    </div>
  );
}