// Types d'éléments de menu
export type MenuType =
  | "Planches Apéro"
  | "Incontournables"
  | "Salades"
  | "Poissons"
  | "Burgers"
  | "Menu Enfant"
  | "Desserts";

// Sous-catégories pour les desserts
export type DessertType = "Best-sellers" | "Glaces" | "Une touche de gourmandise";

// Étiquettes spécifiques aux plats
export type Magnet = "Végétarien" | "Épicé" | "Très Épicé";

// Personnes qui recommandent un plat
export type FavoriteBy =
  | "Anthony"
  | "serveur1"
  | "serveur2"
  | "serveur3"
  | "serveur4"
  | "serveur5";

// Définition du type d’un plat du menu
export interface MenuItem {
  name: string;
  type: MenuType;
  description: string;
  image: string;
  price?: number;
  magnets?: Magnet[];
  favoriteBy?: FavoriteBy[];
  dessertType?: DessertType;
}

// Menu complet
export const menu: MenuItem[] = [
  // Planches Apéro
  {
    name: "Planche Fromages",
    type: "Planches Apéro",
    description: "Une sélection de fromages affinés",
    price: 9,
    image: "/image/menu/planche/planche-fromages.jpg",
    magnets: ["Végétarien"]
  },
  {
    name: "Planche Charcuterie",
    type: "Planches Apéro",
    description: "Une sélection de charcuteries artisanales",
    price: 9,
    magnets: [],
    image: "/image/menu/planche/planche-charcuterie.jpg"
  },
  {
    name: "Planche Mixte",
    type: "Planches Apéro",
    description: "Une sélection de fromages et charcuteries",
    price: 10,
    image: "/image/menu/planche/planche-mixte.jpg",
    magnets: []
  },
  {
    name: "Planche Tapas",
    type: "Planches Apéro",
    description: "8 pièces de tapas avec nachos, sauce guacamole et peppers",
    price: 8.50,
    image: "/image/menu/planche/planche-mixte.jpg",
    magnets: []
  },

  // Incontournables
  {
    name: "Tiki Gyros",
    type: "Incontournables",
    description: "Viande de porc marinée cuite à la broche, frites et salade",
    price: 14,
    image: "/image/menu/incontournable/tiki-gyros.jpg",
    magnets: [],
    favoriteBy: ["Anthony"]
  },
  {
    name: "Tiki Poulet",
    type: "Incontournables",
    description: "Poulet mariné cuit à la broche, frites et salade",
    price: 14,
    image: "/image/menu/incontournable/tiki-poulet.jpg",
    magnets: [],
  },
  {
    name: "Tiki Mixte",
    type: "Incontournables",
    description: "Viande de porc et poulet marinés cuits à la broche, frites et salade",
    price: 15,
    image: "/image/menu/incontournable/tiki-mixte.jpg",
    magnets: [],
  },
  {
    name: "Brochettes de boeuf",
    type: "Incontournables",
    description: "Brochettes de boeuf marinées, frites et salade",
    price: 17.90,
    image: "/image/menu/incontournable/brochette-boeuf.jpg",
    magnets: [],
  },
  {
    name: "Andouillette de Troyes",
    type: "Incontournables",
    description: "Andouillette de Troyes grillée, frites et salade",
    price: 15.90,
    image: "/image/menu/incontournable/andouillette-troyes.jpg",
    magnets: [],
  },
  {
    name: "Bavette",
    type: "Incontournables",
    description: "Bavette de boeuf grillée, frites et salade",
    price: 16.90,
    image: "/image/menu/incontournable/bavette.jpg",
    magnets: [],
    favoriteBy: ["serveur4", "serveur1"]
  },
  {
    name: "La Maotine",
    type: "Incontournables",
    description: "Frites, viande gyros, viande de poulet, oignons frits, fromage (maroilles ou cheddar)",
    image: "/image/menu/incontournable/maotine.jpg",
    magnets: [],
    price: 14.90
  },
  // Salades
  {
    name: "Salade Tiki poulet",
    type: "Salades",
    description: "Salade verte, poulet mariné, tomates cerises, concombre et vinaigrette",
    price: 15,
    image: "/image/menu/salade/salade-cesar.jpg",
    magnets: []
  },
  {
    name: "Salade Tiki gyros",
    type: "Salades",
    description: "Salade verte, viande de porc marinée, tomates cerises, concombre et vinaigrette",
    price: 15,
    image: "/image/menu/salade/salade-tiki-gyros.jpg",
    magnets: []
  },
  {
    name: "Salade Tiki mixte",
    type: "Salades",
    description: "Salade verte, viande de porc et poulet marinés, tomates cerises, concombre et vinaigrette",
    price: 16,
    image: "/image/menu/salade/salade-tiki-mixte.jpg",
    magnets: []
  },
  {
    name: "Salade thon",
    type: "Salades",
    description: "Salade verte, thon, tomates cerises, concombre, olives noires et vinaigrette",
    price: 15,
    image: "/image/menu/salade/salade-thon.jpg",
    magnets: []
  },
  // Poissons
  {
    name: "Poisson frais",
    type: "Poissons",
    description: "Poisson frais selon arrivage avec l'accompagnement de votre choix",
    image: "/image/menu/poisson/poisson-frais.jpg",
    price: 17,
  },
  //burgers
  {
    name: "Le Pacifique",
    type: "Burgers",
    description: "Pain burger bleu océan, poisson pané 100% filet, sauce béarnaise, salade, tomates, oignons",
    image: "/image/menu/burger/pacifique.jpg",
    magnets: []
  },
  {
    name: "Le Maori",
    type: "Burgers",
    description: "Pain burger noir à l'encre de seiche avec graines d'avoine, steak, maroilles, sauce burger, salade, tomates, oignons rouges",
    image: "/image/menu/burger/maori.jpg",
    magnets: ["Épicé"],
  },
  {
    name: "Le Classique",
    type: "Burgers",
    description: "Pain burger blanc aux céréales, steak, cheddar, sauce burger, salade, tomates, oignons rouges",
    image: "/image/menu/burger/classique.jpg",
    magnets: [],
  },
  {
    name: "Le Dynamite",
    type: "Burgers",
    description: "Pain burger rouge, steak, cheddar, sauce samouraï, piment d'espelette, salade, tomates, oignons rouges",
    image: "/image/menu/burger/dynamite.jpg",
    magnets: ["Très Épicé"],
  },
  {
    name: "Le States",
    type: "Burgers",
    description: "Pain burger bleu, steak, bacon, cheddar, sauce ketchup, salade, tomates, oignons rouges",
    image: "/image/menu/burger/states.jpg",
    magnets: [],
  },
  {
    name: "Le Bimberlot",
    type: "Burgers",
    description: "Pain burger orange, steak de poulet pané, emmental, sauce mayonnaise, salade, tomates, oignons rouges",
    image: "/image/menu/burger/bimberlot.jpg",
    magnets: [],
  },
  {
    name: "Le Végé",
    type: "Burgers",
    description: "Pain burger vert, steak 100% végétarien, mozzarella enrobée de graines de sésame, sauce burger, carottes râpées, salade, tomates, oignons",
    image: "/image/menu/burger/vege.jpg",
    magnets: ["Végétarien"],
  },
  {
    name: "Le Guerrier",
    type: "Burgers",
    description: "Galette, viande (poulet, gyros ou mixte), sauce andalouse, salade, tomates, oignons, cheddar et éclat de nachos",
    image: "/image/menu/burger/guerrier.jpg",
    magnets: [],
    price: 18.90
  },
  // Desserts
    // Best-sellers
  {
    name: "Tiramisu",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Tiramisu traditionnel au café",
    image: "/image/menu/dessert/tiramisu.jpg",
    price: 6.50,
    favoriteBy: ["serveur2", "serveur3", "Anthony"],
  },
  {
    name: "Profiteroles",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Profiteroles maison avec glace vanille et chocolat chaud",
    image: "/image/menu/dessert/profiteroles.jpg",
    price: 6.50,
  },
  {
    name: "Crème Brûlée",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Crème brûlée à la vanille",
    image: "/image/menu/dessert/creme-brulee.jpg",
    price: 6,
  },
  {
    name: "Mousse au Chocolat",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Mousse au chocolat noir maison",
    image: "/image/menu/dessert/mousse-chocolat.jpg",
    price: 6
  },
  {
    name: "Riz au Lait",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Riz au lait nature, caramel ou vanille",
    image: "/image/menu/dessert/riz-au-lait.jpg",
    price: 6,
  },
  {
    name: "Gâteau Coco",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Gâteau moelleux à la noix de coco",
    image: "/image/menu/dessert/gateau-coco.jpg",
    price: 6
  },
    // Glaces
  {
    name: "Dame Blanche",
    type: "Desserts",
    dessertType: "Glaces",
    description: "3 boules vanille, chantilly maison et coulis de chocolat",
    image: "/image/menu/dessert/dame-blanche.jpg",
    price: 7.50,
  },
  {
    name: "Café liégeois",
    type: "Desserts",
    dessertType: "Glaces",
    description: "2 boules café, 1 boule vanille, chantilly maison et coulis caramel",
    image: "/image/menu/dessert/cafe-liegeois.jpg",
    price: 7.50,
  },
  {
    name: "Chocolat liégeois",
    type: "Desserts",
    dessertType: "Glaces",
    description: "2 boules chocolat, 1 boule vanille, chantilly maison et coulis chocolat",
    image: "/image/menu/dessert/chocolat-liegeois.jpg",
    price: 7.50,
  },
  {
    name: "Fraise Melba",
    type: "Desserts",
    dessertType: "Glaces",
    description: "2 boules fraise, 1 boule vanille, chantilly maison, morceaux de pêche et coulis de fraise",
    image: "/image/menu/dessert/fraise-melba.jpg",
    price: 7.50,
  },
  {
    name: "1 boule au choix",
    type: "Desserts",
    dessertType: "Glaces",
    description: "Parfums : vanille, chocolat, fraise, citron, citron vert, mangue, menthe-chocolat, café, caramel, coco",
    image: "/image/menu/dessert/1-boule-glace.jpg",
    price: 2.50,
  },
  {
    name: "2 boules au choix",
    type: "Desserts",
    dessertType: "Glaces",
    description: "Parfums : vanille, chocolat, fraise, citron, citron vert, mangue, menthe-chocolat, café, caramel, coco",
    image: "/image/menu/dessert/2-boules-glace.jpg",
    price: 3.50,
  },
    // Une touche de gourmandise
  {
    name: "Café Gourmand",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Café accompagné de 3 mini desserts au choix",
    image: "/image/menu/dessert/cafe-gourmand.jpg",
    price: 8.50,
  },
  {
    name: "Thé Gourmand",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Thé accompagné de 3 mini desserts au choix",
    image: "/image/menu/dessert/the-gourmand.jpg",
    price: 8.50,
  },
  {
    name: "Irish Gourmand",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Irish coffee accompagné de 3 mini desserts au choix",
    image: "/image/menu/dessert/irish-gourmand.jpg",
    price: 14.90,
  },
  {
    name: "Baileys Gourmand",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Baileys accompagné de 3 mini desserts au choix",
    image: "/image/menu/dessert/baileys-gourmand.jpg",
    price: 14.90,
  },
  {
    name: "Dessert de la Semaine",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Un dessert surprise chaque semaine, demandez à votre serveur !",
    image: "/image/menu/dessert/dessert-semaine.jpg",
  }
];