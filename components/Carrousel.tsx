'use client';

import { useState } from 'react';
import styles from '@styles/component/Carroussel.module.css';
import Image from 'next/image';

const items = [
  {
    src: '/images/phone.jpg',
    alt: 'Accessibilité',
    text: 'Accès pour tous, mobilité réduite incluse'
  },
  {
    src: '/images/decors.jpg',
    alt: 'Décors',
    text: "Immersion dans l'univers Maori"
  },
  {
    src: '/images/prix.jpg',
    alt: 'Prix',
    text: 'Plats pour tous les budgets et envies'
  },
  {
    src: '/images/produits-frais.jpg',
    alt: 'Produits frais',
    text: 'Plats faits maison avec des produits frais et locaux'
  },
];

export default function Carrousel() {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % items.length);

  return (
    <div className={styles.carouselContainer}>
        <button onClick={prev} className={styles.arrow}>←</button>

        <div className={styles.carouselItem}>
            <Image
                src={items[index].src}
                alt={items[index].alt}
                width={500}
                height={300}
                className={styles.image}
            />
            <p>{items[index].text}</p>
        </div>

        <button onClick={next} className={styles.arrow}>→</button>
    </div>
  );
}
