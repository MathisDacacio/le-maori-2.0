'use client';

import { useState } from 'react';
import styles from '@styles/component/Media.module.css';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const networks = [
  {
    name: 'Facebook',
    logo: '/image/decorative/aboutPage/logo_facebook.svg',
    lastPostImage: '/image/decorative/homePage/decoration_murale.jpg',
  },
  {
    name: 'Instagram',
    logo: '/image/decorative/aboutPage/logo_instagram.png',
    lastPostImage: '/image/decorative/homePage/bienvenue.jpg',
  },
];

export default function Media() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentNetwork = networks[currentIndex];

  const toggleNetwork = () => {
    setCurrentIndex((prev) => (prev + 1) % networks.length);
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Nos réseaux</h2>
        <div className={styles.icons}>
          {networks.map((net, idx) => (
            <Image
              key={idx}
              src={net.logo}
              alt={net.name}
              width={32}
              height={32}
              className={styles.logo}
            />
          ))}
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.header}>
          <h3>{currentNetwork.name}</h3>
          <button onClick={toggleNetwork} className={styles.arrowButton}>
            <ArrowRight size={20} />
          </button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={currentNetwork.lastPostImage}
            alt={`Dernière publication sur ${currentNetwork.name}`}
            width={400}
            height={300}
            className={styles.postImage}
          />
        </div>
      </div>
    </div>
  );
}
