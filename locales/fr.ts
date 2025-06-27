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
  home: {
    title: {
      welcome: "Bienvenue en Terre Maori",
    },
  },
  hello: "bonjour",
} as const