import { DessertType, menu, MenuType } from "@data/menu";
import Image from "next/image";
import styles from "@styles/page/Menu.module.css";

const menuTypes: MenuType[] = [
  "Planches Apéro",
  "Incontournables",
  "Salades",
  "Poissons",
  "Burgers",
  "Desserts",
];

const dessertType: DessertType[] = [
  "Best-sellers",
  "Glaces",
  "Une touche de gourmandise",
]

const typeDescriptions: Partial<Record<MenuType, string>> = {
  "Planches Apéro": "Les planches sont prévues pour une ou plusieurs personnes. Supplément pain : 1€.",
  Incontournables: "Sauces au choix : maroilles, poivre, échalote, moutarde (servies froides : +0.50€, chaudes maison : +1€).",
  Salades: "Toutes nos salades sont composées. Supplément pour viande au choix.",
  Poissons: "Poissons frais selon arrivage, accompagnement au choix.",
  Burgers: "Tous les burgers sont à 16,90 € et sont accompagnés de frites et crudités. Nos pains sont frais de notre boulanger et colorés aux colorants naturels qui n'apportent pas de changement de saveur",
  Desserts: "Tous nos desserts sont faits maison avec des ingrédients frais.",
};

export default function MenuPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Notre Carte</h1>

    { /* Section de navigation */}
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menuTypes.map((type) => (
            <li key={type} className={styles.navItem}>
              <a href={`#${type.replace(/\s+/g, "-")}`} className={styles.navLink}>
                {type}
              </a>
            </li>
          ))}
          <li className={styles.navItem}>
            <a href="#Menu-Enfant" className={styles.navLink}>
              Menu Enfant
            </a>
          </li>
        </ul>
      </nav>

      {menuTypes.map((type) => {
  const items = menu.filter((item) => item.type === type);
  if (items.length === 0) return null;

  return (
    <section key={type} id={type.replace(/\s+/g, "-")} className={styles.section}>
      <h2 className={styles.sectionTitle}>{type}</h2>

      {typeDescriptions[type] && <p className={styles.description}>{typeDescriptions[type]}</p>}

      {type === "Desserts" ? (
        dessertType.map((subType) => {
          const desserts = items.filter((item) => item.dessertType === subType);
          if (desserts.length === 0) return null;

          {/* Affichage des desserts */}
          return (
            <div key={subType}>
              <h3 className={styles.dessertCategory}>{subType}</h3>
              <div className={styles.grid}>
                {desserts.map((item) => (
                  <div key={item.name} className={styles.card}>
                    <Image src={item.image} alt={item.name} width={400} height={300} className={styles.cardImage} />
                    <h3 className={styles.cardTitle}>{item.name}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                    {item.price && <p className={styles.price}>{item.price.toFixed(2)} €</p>}
                    {item.favoriteBy && item.favoriteBy.length > 0 && (
                      <p className={styles.favorite}>⭐ Recommandé par : {item.favoriteBy.join(", ")}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <div className={styles.grid}>
          {/* Affichage des autres types de menu */}
          {items.map((item) => (
            <div key={item.name} className={styles.card}>
              <Image src={item.image} alt={item.name} width={400} height={300} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{item.name}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
              {item.price && <p className={styles.price}>{item.price.toFixed(2)} €</p>}
              {item.magnets && item.magnets.length > 0 && (
                <div className={styles.magnets}>
                  {item.magnets.map((m: string) => (
                    <span key={m} className={styles.magnetTag}>{m}</span>
                  ))}
                </div>
              )}
              {item.favoriteBy && item.favoriteBy.length > 0 && (
                <p className={styles.favorite}>⭐ Recommandé par : {item.favoriteBy.join(", ")}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
})}

      {/* Menu Enfant */}
      <section id="Menu-Enfant" className={styles.section}>
        <h2 className={styles.sectionTitle}>Menu Enfant <span>- à 9,50 €</span></h2>
        <p className={styles.description}>
          Conçu pour les petits Maoris de moins de 12 ans!
        </p>

        <h3 className={styles.MenuEnfantTitle}> Plat au choix</h3>
        <div className={styles.grid}>
          {[
            { name: "Steak haché + frites", image: "/images/menu/enfant/steak-haché.jpg" },
            { name: "Nuggets + frites", image: "/images/menu/enfant/nuggets.jpg" },
            { name: "Burger + frites", price: 1, image: "/images/menu/enfant/burger.jpg" },
          ].map((item) => (
            <div key={item.name} className={styles.card}>
              <Image src={item.image} alt={item.name} width={400} height={300} className={styles.cardImage} />
              <h3 className={styles.cardTitle}>{item.name}</h3>
              {item.price && <p className={styles.price}>+{item.price.toFixed(2)} €</p>}
            </div>
          ))}
        </div>

        <h3 className={styles.MenuEnfantTitle}>Boisson</h3>
        <p>🥤 Capri-Sun</p>

        <h3 className={styles.MenuEnfantTitle}>Dessert au choix</h3>
        <ul className={styles.dessertList}>
          <li>Compote de pommes</li>
          <li>Glace 1 boule</li>
        </ul>
      </section>

      {/* Menu du jour */}
      <div className={styles.menuDuJour}>
        <h2>Menu du jour</h2>
        <p className={styles.description}>
          Découvrez notre menu du jour directement en restaurant : entrée, plat, dessert à un prix avantageux.
        </p>
      </div>
    </div>
  );
}