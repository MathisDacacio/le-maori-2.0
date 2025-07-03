import styles from '@styles/page/MentionsLegales.module.css';
import { getScopedI18n } from '@locales/server';

export default async function MentionsLegales() {
  const mentionsLegalesT = await getScopedI18n("mentionsLegales");

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>{(mentionsLegalesT)("title.legalNotice")}</h1>
  
        <h2 className={styles.subTitle}>{(mentionsLegalesT)("title.editor")}</h2>
        <p style={{ whiteSpace: "pre-line" }} className={styles.text}>
        {(mentionsLegalesT)("content.editor")} 
          <a href="mailto:lemaori2.0@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
            lemaori2.0@gmail.com
          </a>
        </p>
  
        <h2 className={styles.subTitle}>{(mentionsLegalesT)("title.publisher")}</h2>
        <p style={{whiteSpace: "pre-line"}} className={styles.text}>
          {(mentionsLegalesT)("content.publisher")}
        </p>

        <h2 className={styles.subTitle}>{(mentionsLegalesT)("title.developer")}</h2>
        <p style={{whiteSpace: "pre-line"}}  className={styles.text}>
          {(mentionsLegalesT)("content.developer")}<a href="mailto: mathis.dacacio@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.link}>mathis.dacacio@gmail.com</a>
        </p>
  
        <h2 className={styles.subTitle}>{(mentionsLegalesT)("title.hosting")}</h2>
        <p style={{whiteSpace: "pre-line"}} className={styles.text}>
          {(mentionsLegalesT)("content.hosting")}<a href="https://vercel.com" target="_blank" rel="noopener noreferrer"  className={styles.link}>vercel.com</a>
        </p>
  
        <h2 className={styles.subTitle}>{(mentionsLegalesT)("title.liability")}</h2>
        <p className={styles.text}>
          {(mentionsLegalesT)("content.liability")}
        </p>
      </div>
    );
  }
