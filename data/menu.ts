// Types
export type MenuType = "Planches" | "Incontournables" | "Salades" | "Poissons" | "Burgers" | "Desserts";
export type DessertType = "Best-sellers" | "Glaces" | "Une touche de gourmandise";
export type Magnet = "Végétarien" | "Épicé";
export type MagnetEn = "Vegetarian" | "Spicy";
export type FavoriteBy = "Anthony" | "Client";

export interface MenuItem {
  name: string;
  nameEn: string;
  type: MenuType;
  description: string;
  descriptionEn: string;
  image: string;
  price?: number;
  magnets?: Magnet[];
  magnetsEn?: MagnetEn[];
  favoriteBy?: FavoriteBy[];
  dessertType?: DessertType;
}

// voir en bas du fichier pour la fonction getMenu
export type LocalizedMenuItem = Omit<MenuItem, "name" | "description" | "magnets"> & {
  name: string;
  description: string;
  magnets?: string[];
};

// Données brutes du menu
const rawMenu: MenuItem[] = [
  // Planches
  {
    name: "Planche Fromages",
    nameEn: "Cheese Platter",
    type: "Planches",
    description: "Une sélection de fromages affinés",
    descriptionEn: "A selection of aged cheeses",
    price: 9,
    image: "/image/menu/planche/planche-fromages.jpg",
    magnets: ["Végétarien"],
    magnetsEn: ["Vegetarian"],
  },
  {
    name: "Planche Charcuterie",
    nameEn: "Charcuterie Platter",
    type: "Planches",
    description: "Une sélection de charcuteries artisanales",
    descriptionEn: "A selection of artisanal cold cuts",
    price: 9,
    image: "/image/menu/planche/planche-charcuterie.jpg"
  },
  {
    name: "Planche Mixte",
    nameEn: "Mixed Platter",
    type: "Planches",
    description: "Une sélection de fromages et charcuteries",
    descriptionEn: "A selection of cheeses and cold cuts",
    price: 10,
    image: "/image/menu/planche/planche-mixte.jpg",
  },
  {
    name: "Planche Tapas",
    nameEn: "Tapas Platter",
    type: "Planches",
    description: "8 pièces de tapas avec nachos, sauce guacamole et peppers",
    descriptionEn: "8 pieces of tapas with nachos, guacamole sauce and peppers",
    price: 8.50,
    image: "/image/menu/planche/planche-mixte.jpg",
  },

  // Incontournables
  {
    name: "Tiki Gyros",
    nameEn: "Tiki Gyros",
    type: "Incontournables",
    description: "Viande de porc marinée cuite à la broche, frites et salade",
    descriptionEn: "Marinated pork meat cooked on a spit, served with fries and salad",
    price: 14,
    image: "/image/menu/incontournable/tiki-gyros.jpg",
    favoriteBy: ["Anthony", "Client"]
  },
  {
    name: "Tiki Poulet",
    nameEn: "Tiki Chicken",
    type: "Incontournables",
    description: "Poulet mariné cuit à la broche, frites et salade",
    descriptionEn: "Marinated chicken cooked on a spit, served with fries and salad",
    price: 14,
    image: "/image/menu/incontournable/tiki-poulet.jpg",
  },
  {
    name: "Tiki Mixte",
    nameEn: "Tiki Mixed",
    type: "Incontournables",
    description: "Viande de porc et poulet marinés cuits à la broche, frites et salade",
    descriptionEn: "Marinated pork and chicken meat cooked on a spit, served with fries and salad",
    price: 15,
    image: "/image/menu/incontournable/tiki-mixte.jpg",
  },
  {
    name: "Brochettes de boeuf",
    nameEn: "Beef Skewers",
    type: "Incontournables",
    description: "Brochettes de boeuf marinées, frites et salade",
    descriptionEn: "Marinated beef skewers, served with fries and salad",
    price: 17.90,
    image: "/image/menu/incontournable/brochette-boeuf.jpg",
  },
  {
    name: "Andouillette de Troyes",
    nameEn: "Troyes Andouillette",
    type: "Incontournables",
    description: "Andouillette de Troyes grillée, frites et salade",
    descriptionEn: "Grilled Troyes andouillette, served with fries and salad",
    price: 15.90,
    image: "/image/menu/incontournable/andouillette-troyes.jpg",
  },
  {
    name: "Bavette",
    nameEn: "Flank Steak",
    type: "Incontournables",
    description: "Bavette de boeuf grillée, frites et salade",
    descriptionEn: "Grilled flank steak, served with fries and salad",
    price: 16.90,
    image: "/image/menu/incontournable/bavette.jpg",
  },
  {
    name: "La Maotine",
    nameEn: "Maotine",
    type: "Incontournables",
    description: "Frites, viande gyros, viande de poulet, oignons frits, fromage (maroilles ou cheddar)",
    descriptionEn: "Fries, gyros meat, chicken meat, fried onions, cheese (maroilles or cheddar)",
    image: "/image/menu/incontournable/maotine.jpg",
    price: 14.90,
    favoriteBy: ["Client"]
  },
  // Salades
  {
    name: "Salade Tiki poulet",
    nameEn: "Tiki Chicken Salad",
    type: "Salades",
    description: "Salade verte, poulet mariné, tomates cerises, concombre et vinaigrette",
    descriptionEn: "Green salad, marinated chicken, cherry tomatoes, cucumber and vinaigrette",
    price: 15,
    image: "/image/menu/salade/salade-cesar.jpg",
     
  },
  {
    name: "Salade Tiki gyros",
    nameEn: "Tiki Gyros Salad",
    type: "Salades",
    description: "Salade verte, viande de porc marinée, tomates cerises, concombre et vinaigrette",
    descriptionEn: "Green salad, marinated pork meat, cherry tomatoes, cucumber and vinaigrette",
    price: 15,
    image: "/image/menu/salade/salade-tiki-gyros.jpg",
     
  },
  {
    name: "Salade Tiki mixte",
    nameEn: "Tiki Mixed Salad",
    type: "Salades",
    description: "Salade verte, viande de porc et poulet marinés, tomates cerises, concombre et vinaigrette",
    descriptionEn: "Green salad, marinated pork and chicken meat, cherry tomatoes, cucumber and vinaigrette",
    price: 16,
    image: "/image/menu/salade/salade-tiki-mixte.jpg",
     
  },
  {
    name: "Salade thon",
    nameEn: "Tuna Salad",
    type: "Salades",
    description: "Salade verte, thon, tomates cerises, concombre, olives noires et vinaigrette",
    descriptionEn: "Green salad, tuna, cherry tomatoes, cucumber, black olives and vinaigrette",
    price: 15,
    image: "/image/menu/salade/salade-thon.jpg",
     
  },
  // Poissons
  {
    name: "Poisson frais",
    nameEn: "Fresh Fish",
    type: "Poissons",
    description: "Poisson frais selon arrivage avec l'accompagnement de votre choix",
    descriptionEn: "Fresh fish depending on arrival, with your choice of side dish",
    image: "/image/menu/poisson/poisson-frais.jpg",
    price: 17,
  },
  //burgers
  {
    name: "Le Pacifique",
    nameEn: "The Pacific",
    type: "Burgers",
    description: "Pain burger bleu océan, poisson pané 100% filet, sauce béarnaise, salade, tomates, oignons",
    descriptionEn: "Ocean blue burger bun, 100% breaded fish fillet, bearnaise sauce, lettuce, tomatoes, onions",
    image: "/image/menu/burger/pacifique.jpg",
  },
  {
    name: "Le Maori",
    nameEn: "The Maori",
    type: "Burgers",
    description: "Pain burger noir à l'encre de seiche avec graines d'avoine, steak, maroilles, sauce burger, salade, tomates, oignons rouges",
    descriptionEn: "Black squid ink burger bun with oat flakes, steak, maroilles cheese, burger sauce, lettuce, tomatoes, red onions",
    image: "/image/menu/burger/maori.jpg",
    favoriteBy: ["Client"],
  },
  {
    name: "Le Classique",
    nameEn: "The Classic",
    type: "Burgers",
    description: "Pain burger blanc aux céréales, steak, cheddar, sauce burger, salade, tomates, oignons rouges",
    descriptionEn: "White cereal burger bun, steak, cheddar, burger sauce, lettuce, tomatoes, red onions",
    image: "/image/menu/burger/classique.jpg",
  },
  {
    name: "Le Dynamite",
    nameEn: "The Dynamite",
    type: "Burgers",
    description: "Pain burger rouge, steak, cheddar, sauce samouraï, piment d'espelette, salade, tomates, oignons rouges",
    descriptionEn: "Red burger bun, steak, cheddar, samurai sauce, espelette pepper, lettuce, tomatoes, red onions",
    image: "/image/menu/burger/dynamite.jpg",
    magnets: ["Épicé"],
  },
  {
    name: "Le States",
    nameEn: "The States",
    type: "Burgers",
    description: "Pain burger bleu, steak, bacon, cheddar, sauce ketchup, salade, tomates, oignons rouges",
    descriptionEn: "Blue burger bun, steak, bacon, cheddar, ketchup sauce, lettuce, tomatoes, red onions",
    image: "/image/menu/burger/le_states.png",
  },
  {
    name: "Le Bimberlot",
    nameEn: "The Bimberlot",
    type: "Burgers",
    description: "Pain burger orange, steak de poulet pané, emmental, sauce mayonnaise, salade, tomates, oignons rouges",
    descriptionEn: "Orange burger bun, breaded chicken steak, emmental cheese, mayonnaise sauce, lettuce, tomatoes, red onions",
    image: "/image/menu/burger/bimberlot.jpg",
  },
  {
    name: "Le Végé",
    nameEn: "The Veggie",
    type: "Burgers",
    description: "Pain burger vert, steak 100% végétarien, mozzarella enrobée de graines de sésame, sauce burger, carottes râpées, salade, tomates, oignons",
    descriptionEn: "Green burger bun, 100% vegetarian steak, mozzarella coated with sesame seeds, burger sauce, grated carrots, lettuce, tomatoes, onions",
    image: "/image/menu/burger/vege.jpg",
    magnets: ["Végétarien"],
    magnetsEn: ["Vegetarian"],
  },
  {
    name: "Le Guerrier",
    nameEn: "The Warrior",
    type: "Burgers",
    description: "Galette, viande (poulet, gyros ou mixte), sauce andalouse, salade, tomates, oignons, cheddar et éclat de nachos",
    descriptionEn: "Patty, meat (chicken, gyros or mixed), Andalusian sauce, lettuce, tomatoes, onions, cheddar and nacho chips",
    image: "/image/menu/burger/guerrier.jpg",
    price: 18.90,
    favoriteBy: ["Client"]
  },
  // Desserts
    // Best-sellers
  {
    name: "Tiramisu",
    nameEn: "Tiramisu",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Tiramisu traditionnel au café",
    descriptionEn: "Traditional coffee tiramisu",
    image: "/image/menu/dessert/tiramisu.jpg",
    price: 6.50,
  },
  {
    name: "Profiteroles",
    nameEn: "Profiteroles",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Profiteroles maison avec glace vanille et chocolat chaud",
    descriptionEn: "Homemade profiteroles with vanilla ice cream and hot chocolate",
    image: "/image/menu/dessert/profiteroles.jpg",
    price: 6.50,
  },
  {
    name: "Crème Brûlée",
    nameEn: "Crème Brûlée",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Crème brûlée à la vanille",
    descriptionEn: "Vanilla crème brûlée",
    image: "/image/menu/dessert/creme-brulee.jpg",
    price: 6,
  },
  {
    name: "Mousse au Chocolat",
    nameEn: "Chocolate Mousse",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Mousse au chocolat noir maison",
    descriptionEn: "Homemade dark chocolate mousse",
    image: "/image/menu/dessert/mousse-chocolat.jpg",
    price: 6
  },
  {
    name: "Riz au Lait",
    nameEn: "Rice Pudding",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Riz au lait nature, caramel ou vanille",
    descriptionEn: "Plain, caramel or vanilla rice pudding",
    image: "/image/menu/dessert/riz-au-lait.jpg",
    price: 6,
  },
  {
    name: "Gâteau Coco",
    nameEn: "Coconut Cake",
    type: "Desserts",
    dessertType: "Best-sellers",
    description: "Gâteau moelleux à la noix de coco",
    descriptionEn: "Moist coconut cake",
    image: "/image/menu/dessert/gateau-coco.jpg",
    price: 6,
  },
    // Glaces
  {
    name: "Dame Blanche",
    nameEn: "White Lady",
    type: "Desserts",
    dessertType: "Glaces",
    description: "3 boules vanille, chantilly maison et coulis de chocolat",
    descriptionEn: "3 scoops of vanilla ice cream, homemade whipped cream and chocolate sauce",
    image: "/image/menu/dessert/dame-blanche.jpg",
    price: 7.50,
  },
  {
    name: "Café liégeois",
    nameEn: "Coffee Liégeois",
    type: "Desserts",
    dessertType: "Glaces",
    description: "2 boules café, 1 boule vanille, chantilly maison et coulis caramel",
    descriptionEn: "2 scoops of coffee ice cream, 1 scoop of vanilla, homemade whipped cream and caramel sauce",
    image: "/image/menu/dessert/cafe-liegeois.jpg",
    price: 7.50,
  },
  {
    name: "Chocolat liégeois",
    nameEn: "Chocolate Liégeois",
    type: "Desserts",
    dessertType: "Glaces",
    description: "2 boules chocolat, 1 boule vanille, chantilly maison et coulis chocolat",
    descriptionEn: "2 scoops of chocolate ice cream, 1 scoop of vanilla, homemade whipped cream and chocolate sauce",
    image: "/image/menu/dessert/chocolat-liegeois.jpg",
    price: 7.50,
  },
  {
    name: "Fraise Melba",
    nameEn: "Strawberry Melba",
    type: "Desserts",
    dessertType: "Glaces",
    description: "2 boules fraise, 1 boule vanille, chantilly maison, morceaux de pêche et coulis de fraise",
    descriptionEn: "2 scoops of strawberry ice cream, 1 scoop of vanilla, homemade whipped cream, peach pieces and strawberry sauce",
    image: "/image/menu/dessert/fraise-melba.jpg",
    price: 7.50,
  },
  {
    name: "1 boule au choix",
    nameEn: "1 Scoop of Your Choice",
    type: "Desserts",
    dessertType: "Glaces",
    description: "Parfums : vanille, chocolat, fraise, citron, citron vert, mangue, menthe-chocolat, café, caramel, coco",
    descriptionEn: "Flavors: vanilla, chocolate, strawberry, lemon, lime, mango, mint-chocolate, coffee, caramel, coconut",
    image: "/image/menu/dessert/1-boule-glace.jpg",
    price: 2.50,
  },
  {
    name: "2 boules au choix",
    nameEn: "2 Scoops of Your Choice",
    type: "Desserts",
    dessertType: "Glaces",
    description: "Parfums : vanille, chocolat, fraise, citron, citron vert, mangue, menthe-chocolat, café, caramel, coco",
    descriptionEn: "Flavors: vanilla, chocolate, strawberry, lemon, lime, mango, mint-chocolate, coffee, caramel, coconut",
    image: "/image/menu/dessert/2-boules-glace.jpg",
    price: 3.50,
  },
    // Une touche de gourmandise
  {
    name: "Café Gourmand",
    nameEn: "Coffee with a Touch of Indulgence",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Café accompagné de 3 mini desserts au choix",
    descriptionEn: "Coffee served with 3 mini desserts of your choice",
    image: "/image/menu/dessert/cafe-gourmand.jpg",
    price: 8.50,
  },
  {
    name: "Thé Gourmand",
    nameEn: "Tea with a Touch of Indulgence",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Thé accompagné de 3 mini desserts au choix",
    descriptionEn: "Tea served with 3 mini desserts of your choice",
    image: "/image/menu/dessert/the-gourmand.jpg",
    price: 8.50,
  },
  {
    name: "Irish Gourmand",
    nameEn: "Irish Coffee with a Touch of Indulgence",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Irish coffee accompagné de 3 mini desserts au choix",
    descriptionEn: "Irish coffee served with 3 mini desserts of your choice",
    image: "/image/menu/dessert/irish-gourmand.jpg",
    price: 14.90,
  },
  {
    name: "Baileys Gourmand",
    nameEn: "Baileys with a Touch of Indulgence",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Baileys accompagné de 3 mini desserts au choix",
    descriptionEn: "Baileys served with 3 mini desserts of your choice",
    image: "/image/menu/dessert/baileys-gourmand.jpg",
    price: 14.90,
  },
  {
    name: "Dessert de la Semaine",
    nameEn: "Dessert of the Week",
    type: "Desserts",
    dessertType: "Une touche de gourmandise",
    description: "Un dessert surprise chaque semaine, demandez à votre serveur !",
    descriptionEn: "A surprise dessert every week, ask your server!",
    image: "/image/menu/dessert/dessert-semaine.jpg",
  }
];

// changement des champs en fonction de la langue
export function getMenu(locale: "fr" | "en"): LocalizedMenuItem[] {
  return rawMenu.map((item) => ({
    ...item,
    name: locale === "en" && item.nameEn ? item.nameEn : item.name,
    description: locale === "en" && item.descriptionEn ? item.descriptionEn : item.description,
    magnets:
      locale === "en" && item.magnetsEn
        ? item.magnetsEn
        : item.magnets,
  }));
}