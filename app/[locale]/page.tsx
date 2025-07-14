// app/[locale]/page.tsx

import styles from '@styles/page/HomePage.module.css';
import Link from 'next/link';
import Image from 'next/image';
import Carrousel from '@components/Carrousel';

// premiere partie: cartes en quinconce avec texte et photo
    // 1 : Vous voulez savoir si la meilleure brasserie de Le Quesnoy est ouverte ? : appelez nous
    // 2 : Venez passé un moment convivial seul ou a plusieurs en terre maori: horaires d'ouverture
    // 3 : retrouvez nous au centre de Le Quesnoy pour un voyageen terre maori : carte d'itineraire
    // 4 : nos plats sont faits pour vous, decouvrez nos plats; vegetariens, sans gluten, vegan, épicé etc. : lien vers la carte
// deuxieme partie: cartes avec images/ titre capable de changer avec des fleches gauche/droite
    // 1 : Accecibles pour tout type de mobilité reduite
    // 2 : immerssion dans l'univers de la pizza cuites devant vous
    // 3 : Pour tout budget, des pizzas pour tous les goûts et toutes les envies
    // 4 : Des plats faits maison, avec des produits frais et locaux
    // 5 : Nos moyens de paiement
// troisieme partie: image + texte en ligne
    // Tous moyens de paiement acceptés
// quatrième partie: texte et photo en quinconce
    // 1 : Vous savez pas faire votre choix ? Decouvrez les plats recommendés par nos chefs ( redirection vers la carte)
    // 2 : Découvrez une vidéo en immerssion dans nos cuisines (redirection vers la page à propos(video))
    // 3 : Retrouvez-nous sur les réseaux sociaux pour suivre nos actualités et évenement (redirection vers les réseaux sociaux)
    // 4 : vous hesitez encore ? Découvrez les avis de nos clients sur Google pour chacun de nos restaurants (redirection vers le footer)
    // 5 : Vous avez une question ou Vous souhaitez nous rejoindre ? Contactez nous par téléphone ou par mail (redirection vers le footer)
    
export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <img
        src="/image/decorative/homePage/bienvenue.jpg"
        alt="Image de fond du restaurant Maori"
        className={styles.heroImage}
      />
      <h1 className={styles.title}>Bienvenue en terre Maori</h1>
      {/* SECTION 1 : Cartes en quinconce avec texte et photo */}
      <section className={styles.Section1_wrapper}>
        {/* Carte 1 - Vous voulez savoir si la meilleure brasserie de Le Quesnoy est ouverte ? : appelez nous*/}
        <div className={styles.Section1_card}>
          <div className={styles.text}>
            <h2>Vous voulez savoir si la meilleure brasserie de Le Quesnoy <br />est ouverte ?</h2>
            <p>Appelez-nous: <a href="tel:+33977052778" className={styles.link}>09 77 05 27 78</a></p>
          </div>
          <Image
            src="/image/decorative/homePage/salle.jpg"
            alt="Photo de la façade du Maori"
            width={500} 
            height={300}
            className={styles.image}
          />
        </div>

        {/* Carte 2 - Plongez dans l'ambiance chaleureuse du Maori ! : horaires d'ouverture */}
        <div className={`${styles.Section1_card} ${styles.reverse}`}>
          <div className={styles.text}>
            <h2>Plongez dans l'ambiance chaleureuse du Maori !</h2>
            <div className={styles.openingHours}>
              <h3>Nos horaires d'ouverture</h3>
              <p>Lundi - Vendredi : 11h00 - 23h00</p> 
              <p>Samedi - Dimanche : 12h00 - 00h00</p>
            </div>
          </div>
          <Image
            src="/image/decorative/homePage/salle.jpg"
            alt="Photo de l'intérieure du Maori"
            width={500}
            height={300}
            className={styles.image}
          />
        </div>

        {/* Carte 3 - Retrouvez-nous au centre de Le Quesnoy pour un voyage en terre Maori : carte d'itinéraire */}
        <div className={styles.Section1_card}>
          <div className={styles.text}>
            <h2>On préfère vous voir en vrai ! Retrouvez-nous au cœur de Le Quesnoy.</h2>
            <p><a href="https://maps.google.com" className={styles.link}>Itinéraire direct</a></p>
          </div>
          <iframe
            className={styles.map}
            title="Carte du restaurant Maori"
            src="https://www.google.com/maps?q=50.2474503,3.63805&z=19&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Carte 4 - Nos plats sont faits pour vous : découvrez nos plats végétariens, sans gluten, vegan, épicés, etc. */}
        <div className={`${styles.Section1_card} ${styles.reverse}`}>
          <div className={styles.text}>
            <h2>Des plats pour toutes les envies ! </h2>
            <p>Découvrez nos plats végétariens, sans gluten, vegan, épicés, etc.</p>
            <Link href="/menu" className={styles.bouton}>Menu</Link>
          </div>
          <Image
            src="/image/menu/burger/le_states.png"
            alt="Photo d'un plat"
            width={500}
            height={300}
            className={styles.image}
          />
        </div>
      </section>

    </div>
  );
}
