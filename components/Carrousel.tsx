'use client';

import { useState } from 'react';
import styles from '@styles/component/Carroussel.module.css';
import Image from 'next/image';
import { useScopedI18n } from '@locales/client';

export default function Carrousel() {
  const t = useScopedI18n('homepage.homesection2.carrousel');

  const items = [
    {
      src: "/image/decorative/homePage/cartes_section2/fauteuil.png",
      alt: 'Accessibilité',
      text: t('accessibility'),
    },
    {
      src: "/image/decorative/homePage/cartes_section2/nouvelle_zelande.png",
      alt: 'Décors',
      text: t('immersion'),
    },
    {
      src: "/image/decorative/homePage/cartes_section2/plats.png",
      alt: 'Prix',
      text: t('budget'),
    },
    {
      src: "/image/decorative/homePage/cartes_section2/terrasse.png",
      alt: 'Terrasse',
      text: t('terrasse'),
    }
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  const next = () =>
    setIndex((prevIndex) => (prevIndex + 1) % items.length);

  return (
    <div className={styles.carouselContainer}>
      <Image
        src="/image/decorative/homePage/tambour/tambour_gauche.png"
        alt="Précédent"
        width={200}
        height={200}
        className={`${styles.drumButton} ${styles.leftDrum}`}
        onClick={prev}
      />

      <div className={styles.carouselWrapper}>
        {items.map((item, i) => {
          const relativeIndex = (i - index + items.length) % items.length;
          const position =
            relativeIndex === 0
              ? 'center'
              : relativeIndex === 1 || (index === items.length - 1 && i === 0)
              ? 'right'
              : relativeIndex === items.length - 1 || (index === 0 && i === items.length - 1)
              ? 'left'
              : 'hidden';

          return (
            <div key={i} className={`${styles.carouselItem} ${styles[position]}`}>
              <Image
                src={item.src}
                alt={item.alt}
                width={500}
                height={300}
                className={styles.image}
              />
              {position === 'center' && <p>{item.text}</p>}
            </div>
          );
        })}
      </div>

      <Image
        src="/image/decorative/homePage/tambour/tambour_droit.png"
        alt="Suivant"
        width={200}
        height={200}
        className={`${styles.drumButton} ${styles.rightDrum}`}
        onClick={next}
      />
    </div>
  );
}
