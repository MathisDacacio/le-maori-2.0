// app/[locale]/page.tsx

import styles from '@styles/page/HomePage.module.css';
import Link from 'next/link';
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
    <h1>
      bienvenue sur la page d'accueil de notre site web !
    </h1>
  )
}