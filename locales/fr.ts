import { title } from "process";

// locales/fr.ts
export default {

   // header
  header: {
    home: "Accueil",
    menu: "Menu",
    about: "À propos",
  },

  // footer
  footer: {
    title: "Brasserie Le Maori 2.0",
    phone: "Tél:",
    legalNotice: "Mentions légales",
    reviews: "Voir les avis",
    googleReviews: "Avis Google",
    tripadvisorReviews: "Avis Tripadvisor",

    description: {
      text: "🍺 Bienvenue à la brasserie Le Maori 2.0, la mieux notée du Quesnoy ! Savourez des bières artisanales exotiques, une ambiance maorie unique et une expérience conviviale au cœur du Quesnoy.",
      copyright: {
        developer: "- Réalisé par Dacacio Mathis",
      },
    },
  },

  // Mentions Légales
  mentionsLegales: {
    title: {
      legalNotice: "Mentions légales",
      editor: "Éditeur du site",
      publisher: "Résponsable de la publication",
      developer: "Réalisateur du site",
      hosting: "Hébergement",
      liability: "Limitation de responsabilité",
    },
    content: {
      editor: `La société: Le Maori 2.0\nForme sociale: SAS\nNuméro Siren: 949894620 \nAdresse du siège: 8 Rue Casimir Fournier, 59530 Le Quesnoy\nNuméro TVA Intracommunautaire: FR 24949894620\nTélephone: 0977052778\nEmail: `,
      publisher: "Monsieur Anthony FONTAINE\nJoignable aux mêmes coordonnées que l'éditeur.",
      developer: "Nom: Mathis DACACIO \nEmail: ",
      hosting: "Vercel Inc.\n340 S Lemon Ave #4133, Walnut, CA 91789, USA\nSite: ",
      liability: "Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes. Si vous constatez une lacune, une erreur ou ce qui semble être un dysfonctionnement, merci de bien vouloir le signaler par email en décrivant le problème de la manière la plus précise possible (page posant problème, action déclenchante, type d’ordinateur et de navigateur utilisé, etc.).",
    },
  },

  // home page
  homepage: {
    herosection: {
      welcome: "Bienvenue en Terre Maori",
    },
    homesection1: {
      card1: {
        title: "Vous voulez savoir si la meilleure brasserie de Le Quesnoy a de la place ?",
        callToAction: "Appelez-nous",
      },
      card2: {
        title: "Vous voulez savoir si le Maori est ouvert ?",
        openingHours: "Nos horaires d'ouverture",
        openingHoursKitchen: "Nos horaires de cuisines",
        when: {
          week: "Lundi au Jeudi",
          weekend: "Vendredi et Samedi",
          lunch: "Le midi",
          dinner: "Le soir",
        },
      },
      card3: {
        title: "On préfère vous voir en vrai ! Retrouvez-nous au cœur de Le Quesnoy",
        callToAction: "Itinéraire direct",
      },
      card4: {
        title: "Des plats pour toutes les envies",
        description: "Découvrez nos plats végétariens, vegan, épicés, etc.",
        menuLink: "Lien vers la carte",
      },
    },
    homesection2: {
      title: "Ce qui nous rend uniques",
      carrousel: {
        accessibility: "Accessibilité",
        immersion: "Immersion dans l'univers maori",
        budget: "Pour tous les budgets, des plats pour tous les goûts",
        terrasse: "Table en terrasse",
      },
    },
    homesection3: {
      title: "Moyens de paiement acceptés",
      paymentMethods: {
        creditCard: "Carte bancaire",
        cash: "Espèce",
        mealVouchers: "Chèques déjeuner",
        mealCard: "Carte déjeuner",
      },
    },
    homesection4: {
      choose: {
        title: "Vous ne savez pas quoi choisir",
        callToAction: "Découvrez les plats recommandés par nos chefs",
      },
      immersive: {
        title: "Vidéo immersive dans nos cuisines",
        callToAction: "Regardez notre vidéo",
      },
      media: {
        title: "Nous sommes actifs",
        callToAction: "Retrouvez nos derniers posts",
      },
      reviews: {
        title: "Découvrez les avis de nos clients",
        callToAction: "Lire les avis",
      },
      contact: {
        title: "Besoin d'un renseignement ? Contactez Nous !",
        tel: "Téléphone",
        email: "Email",
      },
    },
  },

  // menu page
  menu: {
    title: "Notre Menu",
    recommendedBy: "Recommandé par",
    sections: {
      Planches: "Planches Apéro",
      Incontournables: "Incontournables",
      Salades: "Salades",
      Poissons: "Poissons",
      Burgers: "Burgers",
      Desserts: "Desserts",
    },
    childrenMenu: {
      title: "Menu Enfant",
      description: "Pour les enfants de moins de 12 ans, un menu spécial est proposé.",
      dish: "Plat Enfant",
      drink: "Boisson",
      dessert: "Dessert",
      dessertList: {
        iceCream: "Glace",
        applesauce: "Compote de pommes",
      },
    },
    dailyMenu: {
      title: "Menu du Jour",
      description: "Découvrez notre menu du jour, préparé avec des ingrédients frais et de saison.",
    },
  },

  // about page
  about: {
    title: "À propos de nous",
    history: {
      title: "Notre Histoire",
      description: "Le Maori 2.0 est né de la passion pour la cuisine et l'amour de l'univers Maori. Depuis notre ouverture en juillet 2023, nous nous engageons à offrir une expérience culinaire unique qui vous fera voyager. Notre ambiance chaleureuse vous fera apprécier chaque instant.",
    },
    socialMedia: {
      title: "Suivez-nous sur les réseaux sociaux",
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter",
    },
    video: {
      title: "C'est comment en cuisine ?",
      description: "Du produit brut à l'assiette découvrez tout ici",
    },
    reviews: {
      title: "Vous avez aimé ?",
      description: "N'hésitez pas à laisser un avis sur notre cuisine et notre service.",
      googleText: "Avis Google",
      tripadvisorText: "Avis Tripadvisor",
    },
  },
} as const