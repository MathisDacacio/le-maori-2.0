'use client';

import { useParams } from 'next/navigation';
import { useScopedI18n } from '@locales/client';
import { getMenu, DessertType, MenuType } from '@data/menu';
import Image from 'next/image';
import styles from '@styles/page/Menu.module.css';
import React from 'react';

const menuTypes: MenuType[] = [
  'Planches',
  'Incontournables',
  'Salades',
  'Poissons',
  'Burgers',
  'Desserts',
];

const dessertType: DessertType[] = [
  'Best-sellers',
  'Glaces',
  'Une touche de gourmandise',
];

const typeDescriptions: Record<MenuType, { fr: string; en: string }> = {
  Planches: {
    fr: 'Les planches sont prévues pour une ou plusieurs personnes. Supplément pain : 1€.',
    en: 'Platters are designed for one or more people. Extra bread: €1.',
  },
  Incontournables: {
    fr: 'Sauces au choix : maroilles, poivre, échalote, moutarde (servies froides : +0.50€, chaudes maison : +1€).',
    en: 'Choice of sauces: maroilles, pepper, shallot, mustard (cold: +€0.50, homemade hot: +€1).',
  },
  Salades: {
    fr: 'Toutes nos salades sont composées. Supplément pour viande au choix.',
    en: 'All our salads are fully composed. Extra meat available.',
  },
  Poissons: {
    fr: 'Poissons frais selon arrivage, accompagnement au choix.',
    en: 'Fresh fish depending on availability, side dish of your choice.',
  },
  Burgers: {
    fr: "Tous les burgers sont à 16,90 € et sont accompagnés de frites et crudités. Nos pains sont frais de notre boulanger et colorés aux colorants naturels qui n'apportent pas de changement de saveur.",
    en: 'All burgers are €16.90 and come with fries and raw vegetables. Our buns are fresh and naturally colored without affecting the taste.',
  },
  Desserts: {
    fr: 'Tous nos desserts sont faits maison avec des ingrédients frais.',
    en: 'All our desserts are homemade with fresh ingredients.',
  },
};

const decorativeImages: { index: number; image: string }[] = [
  { index: 9, image: '/image/decorative/menu/maori_table.png' },
  { index: 14, image: '/image/decorative/menu/maori_kiwi.png' },
  { index: 16, image: '/image/decorative/menu/maori_poisson.png' },
  { index: 32, image: '/image/decorative/menu/maori_iceberg.png' },
];

function DecorativeCard({ image }: { image: string }) {
  return (
    <div className={styles.imageOnlyWrapper}>
      <Image
        src={image}
        alt="Décoration Tiki"
        width={400}
        height={300}
        className={styles.cardImageOnly}
      />
    </div>
  );
}

export default function MenuPage() {
  const params = useParams();
  const locale = params.locale as 'fr' | 'en';

  const menuPageT = useScopedI18n('menu');
  const sectionT = useScopedI18n('menu.sections');
  const childrenMenuT = useScopedI18n('menu.childrenMenu');
  const dailyMenuT = useScopedI18n('menu.dailyMenu');

  const menu = getMenu(locale);
  let globalIndex = 0;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🌺 {menuPageT('title')} 🌴</h1>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menuTypes.map((type) => (
            <li key={type} className={styles.navItem}>
              <a href={`#${type.replace(/\s+/g, '-')}`} className={styles.navLink}>
                {sectionT(type) ?? type}
              </a>
            </li>
          ))}
          <li className={styles.navItem}>
            <a href="#Menu-Enfant" className={styles.navLink}>
              {childrenMenuT('title')}
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#Menu-du-jour" className={styles.navLink}>
              {dailyMenuT('title')}
            </a>
          </li>
        </ul>
      </nav>

      {menuTypes.map((type) => {
        const items = menu.filter((item) => item.type === type);
        if (items.length === 0) return null;

        return (
          <section key={type} id={type.replace(/\s+/g, '-')} className={styles.section}>
            <h2 className={styles.sectionTitle}>{sectionT(type) ?? type}</h2>
            {typeDescriptions[type] && (
              <p className={styles.description}>{typeDescriptions[type][locale]}</p>
            )}

            {type === 'Desserts' ? (
              dessertType.map((subType) => {
                const desserts = items.filter((item) => item.dessertType === subType);
                if (desserts.length === 0) return null;

                return (
                  <div key={subType}>
                    {/* section des desserts */}
                    <h3 className={styles.dessertCategory}>{subType}</h3>
                    <div className={styles.grid}>
                      {desserts.map((item) => {
                        globalIndex++;
                        const deco = decorativeImages.find((d) => d.index === globalIndex);
                        return (
                          <React.Fragment key={item.name}>
                            <div className={styles.card}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                width={400}
                                height={300}
                                className={styles.cardImage}
                              />
                              <h3 className={styles.cardTitle}>{item.name}</h3>
                              <p className={styles.cardDescription}>{item.description}</p>
                              {item.price && <p className={styles.price}>{item.price.toFixed(2)} €</p>}
                              {item.favoriteBy && item.favoriteBy.length > 0 && (
                                <p className={styles.favorite}>
                                  ⭐ {menuPageT('recommendedBy')}: {item.favoriteBy.join(', ')}
                                </p>
                              )}
                            </div>
                            {deco && <DecorativeCard image={deco.image} />}
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className={styles.grid}>
                {/* section des plats */}
                {items.map((item) => {
                  globalIndex++;
                  const deco = decorativeImages.find((d) => d.index === globalIndex);
                  return (
                    <React.Fragment key={item.name}>
                      <div className={styles.card}>
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={400}
                          height={300}
                          className={styles.cardImage}
                        />
                        <h3 className={styles.cardTitle}>{item.name}</h3>
                        <p className={styles.cardDescription}>{item.description}</p>
                        {item.price && <p className={styles.price}>{item.price.toFixed(2)} €</p>}
                        {item.magnets?.length && (
                          <div className={styles.magnets}>
                            {item.magnets.map((m) => (
                              <span key={m} className={styles.magnetTag}>{m}</span>
                            ))}
                          </div>
                        )}
                        {item.favoriteBy?.length && (
                          <p className={styles.favorite}>
                            ⭐ {menuPageT('recommendedBy')}: {item.favoriteBy.join(', ')}
                          </p>
                        )}
                      </div>
                      {deco && <DecorativeCard image={deco.image} />}
                    </React.Fragment>
                  );
                })}
              </div>
            )}
            <span className={styles.separatorImage}></span>
          </section>
        );
      })}

      {/* section enfants */}
      <section id="Menu-Enfant" className={styles.sectionChildren}>
        <h2 className={styles.sectionTitle}>
          {childrenMenuT('title')} <span>- 9,50 €</span>
        </h2>
        <p className={styles.description}>{childrenMenuT('description')}</p>

        <h3 className={styles.MenuEnfantTitle}>{childrenMenuT('dish')}</h3>
        <div className={styles.gridEnfant}>
          {[
            { name: 'Steak haché + frites', image: '/images/menu/enfant/steak-haché.jpg' },
            { name: 'Nuggets + frites', image: '/images/menu/enfant/nuggets.jpg' },
            { name: 'Burger + frites', price: 1, image: '/images/menu/enfant/burger.jpg' },
          ].map((item) => (
            <div key={item.name} className={styles.card}>
              <Image
                src={item.image}
                alt={item.name}
                width={400}
                height={300}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{item.name}</h3>
              {item.price && <p className={styles.price}>+{item.price.toFixed(2)} €</p>}
            </div>
          ))}
        </div>

        <h3 className={styles.MenuEnfantTitle}>{childrenMenuT('drink')}</h3>
        <ul>
          <li>Capri Sun</li>
          <li>Sirop</li>
        </ul>

        <h3 className={styles.MenuEnfantTitle}>{childrenMenuT('dessert')}</h3>
        <ul className={styles.dessertList}>
          <li>{childrenMenuT('dessertList.applesauce')}</li>
          <li>{childrenMenuT('dessertList.iceCream')}</li>
        </ul>
      </section>

      {/* section du menu du jour */}
      <div id="Menu-du-jour" className={styles.menuDuJour}>
        <h2>{dailyMenuT('title')}</h2>
        <p>{dailyMenuT('description')}</p>

        <div className={styles.gallery}>
          <Image
            src="/image/menu/ephemere/plat_1.jpg"
            alt="Plat éphémère 1"
            width={300}
            height={200}
            className={styles.menuImage}
          />
          <Image
            src="/image/menu/ephemere/plat_2.jpg"
            alt="Plat éphémère 2"
            width={300}
            height={200}
            className={styles.menuImage}
          />
          <Image
            src="/image/menu/ephemere/plat_3.jpg"
            alt="Plat éphémère 3"
            width={300}
            height={200}
            className={styles.menuImage}
          />
          <Image
            src="/image/menu/ephemere/plat_4.jpg"
            alt="Plat éphémère 4"
            width={300}
            height={200}
            className={styles.menuImage}
          />
        </div>
      </div>

    </div>
  );
}
