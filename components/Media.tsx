'use client';

import { useState, useEffect } from 'react';
import styles from '@styles/component/Media.module.css';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useScopedI18n } from '@locales/client';

const networks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61554364732341',
    logo: '/image/decorative/aboutPage/logo_facebook.svg',
    widget: `
      <div class="fb-page"
        data-href="https://www.facebook.com/profile.php?id=61554364732341"
        data-tabs="timeline"
        data-width="450"
        data-height="450"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true">
      </div>
    `
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lemaori2.0/',
    logo: '/image/decorative/aboutPage/logo_instagram.png',
    widget: `
    <div style="max-height:450px; overflow-y:auto; padding-right:0.5rem;">
      <div style="display:grid; grid-template-columns:1fr; gap:1rem; justify-items:center;">
        <blockquote class="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DBF4X7SKrvi/?img_index=1"
          data-instgrm-version="14"
          style="max-width:450px; width:90%;"></blockquote>

        <blockquote class="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DMSie4tpuqh"
          data-instgrm-version="14"
          style="max-width:450px; width:90%;"></blockquote>

        <blockquote class="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/p/DMtQBzTxbU5/?img_index=1"
          data-instgrm-version="14"
          style="max-width:450px; width:90%;"></blockquote>

      </div>
    </div>
    `
  }
];

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
    FB?: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}

export default function Media() {
  const t = useScopedI18n('about');
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentNetwork = networks[currentIndex];

  const toggleNetwork = () => {
    setCurrentIndex((prev) => (prev + 1) % networks.length);
  };

  useEffect(() => {
    if (!document.getElementById('facebook-jssdk')) {
      const fbScript = document.createElement('script');
      fbScript.id = 'facebook-jssdk';
      fbScript.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v17.0';
      fbScript.async = true;
      fbScript.defer = true;
      document.body.appendChild(fbScript);
    }

    if (!document.getElementById('instagram-embed')) {
      const instaScript = document.createElement('script');
      instaScript.id = 'instagram-embed';
      instaScript.src = 'https://www.instagram.com/embed.js';
      instaScript.async = true;
      document.body.appendChild(instaScript);
    }
  }, []);

  useEffect(() => {
    if (currentNetwork.name === 'Instagram' && window.instgrm) {
      window.instgrm.Embeds.process();
    }
    if (currentNetwork.name === 'Facebook' && window.FB) {
      window.FB.XFBML.parse();
    }
  }, [currentNetwork]);



  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>{t('socialMedia')}</h2>
        <div className={styles.icons}>
          {networks.map((net, idx) => (
            <a
              key={idx}
              href={net.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.logoLink}
            >
              <Image
                src={net.logo}
                alt={net.name}
                width={80}
                height={80}
                className={styles.logo}
              />
            </a>
          ))}
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.header}>
          <h3>{currentNetwork.name}</h3>
          <button onClick={toggleNetwork} className={styles.arrowButton}>
            <ArrowRight size={24} />
          </button>
        </div>
        <div
          className={styles.widgetContainer}
          dangerouslySetInnerHTML={{ __html: currentNetwork.widget }}
        />
      </div>
    </div>
  );
}
