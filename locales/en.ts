import Carrousel from "@components/Carrousel";

// locales/en.ts
export default {

  // header
  header: {
    home: "Home",
    menu: "Menu",
    about: "About",
  },

  // footer
  footer: {
    title: "Brewery Le Maori 2.0",
    phone: "Phone:",
    legalNotice: "Legal Notice",
    reviews: "See Reviews",

    description: {
      text: "🍺 Welcome to Le Maori 2.0 — the top-rated craft brewery in Le Quesnoy! Enjoy exotic homemade beers, a unique Māori atmosphere, and a friendly experience in the heart of Le Quesnoy.",
      copyright: {
        developer: "— Developed by Dacacio Mathis",
      },
    },
  },

  // Mentions Légales
  mentionsLegales: {
    title: {
      legalNotice: "Legal Notice",
      editor: "Site Editor",
      publisher: "Publication Manager",
      developer: "Site Developer",
      hosting: "Hosting",
      liability: "Limitation of Liability",
    },
    content: {
      editor: "Company: Le Maori 2.0\nLegal Form: SAS\nSiren Number: 949894620 \nHead Office Address: 8 Rue Casimir Fournier, 59530 Le Quesnoy\nVAT Number: FR 24949894620\nPhone: 0977052778\nEmail: ",
      publisher: "Mr. Anthony FONTAINE\nContactable at the same coordinates as the editor.",
      developer: "Name: Mathis DACACIO\nEmail: ",
      hosting: "Vercel Inc.\n340 S Lemon Ave #4133, Walnut, CA 91789, USA\nWebsite: ",
      liability: "The information contained on this site is as accurate as possible and the site is periodically updated, but may still contain inaccuracies, omissions, or gaps. If you notice a gap, error, or what seems to be a malfunction, please report it by email describing the problem as precisely as possible (problematic page, triggering action, type of computer and browser used, etc.).",
    },
  },

  // home page
  homepage: {
    herosection: {
      welcome: "Welcome to Maori Land",
    },
    homesection1: {
      card1: {
        title: "Want to know if the best brasserie in Le Quesnoy has a table for you?",
        callToAction: "Call us",
      },
      card2: {
        title: "Wondering if Le Maori is open?",
        openingHours: "Our opening hours",
        openingHoursKitchen: "Our kitchen hours",
        when: {
          week: "Monday to Thursday",
          weekend: "Friday and Saturday",
          lunch: "Lunch",
          dinner: "Dinner",
        },
      },
      card3: {
        title: "We’d rather see you in person! Find us in the heart of Le Quesnoy",
        callToAction: "Get directions",
      },
      card4: {
        title: "Dishes for every craving",
        description: "Discover our vegetarian, vegan, spicy dishes, and more.",
        menuLink: "View the menu",
      },
    },
    homesection2: {
      title: "What makes us unique",
      carrousel: {
        accessibility: "Accessibility",
        immersion: "Immersion in the Māori universe",
        budget: "For all budgets, dishes for all tastes",
      }
    },
    homesection3: {
      title: "Accepted payment methods",
      paymentMethods: {
        creditCard: "Credit card",
        cash: "Cash",
        mealVouchers: "Meal vouchers",
        mealCard: "Meal card",
      },
    },
    homesection4: {
      choose: {
        title: "Not sure what to pick?",
        callToAction: "Check out the dishes our chefs recommend",
      },
      immersive: {
        title: "Step into our kitchen",
        callToAction: "Watch the video",
      },
      media: {
        title: "We’re active!",
        callToAction: "See our latest posts",
      },
      reviews: {
        title: "What our customers say",
        callToAction: "Read reviews on Google",
      },
      contact: {
        title: "Need information? Get in touch!",
        tel: "Phone",
        email: "Email",
      },
    },
  },

  // menu page
  menu: {
    title: "Menu",
    recommendedBy: "Recommended by",
    sections: {
      Planches: "Starters",
      Incontournables: "Specialties",
      Salades: "Salads",
      Poissons: "Fish",
      Burgers: "Burgers",
      Desserts: "Desserts",
    },
    childrenMenu: {
      title: "Children's Menu",
      description: "Specially designed for our little guests, with dishes that are both tasty and healthy.",
      dish: "Children's Dish",
      drink: "Drink",
      dessert: "Dessert",
      dessertList: {
        iceCream: "Ice Cream",
        applesauce: "Applesauce",
      },
    },
    dailyMenu: {
      title: "Daily Menu",
      description: "Discover our daily menu, prepared with fresh, seasonal ingredients.",
    },
  },

  // about page
  about: {
    title: "About Us",
    history: {
      title: "Our Story",
      description: "Le Maori 2.0 was born from a passion for cooking and hospitality. Since our opening in July 2023, we have been committed to providing a unique culinary experience.",
    },
    socialMedia: {
      title: "Follow us on social media",
      facebook: "Facebook",
      instagram: "Instagram",
      twitter: "Twitter",
    },
    video: {
      title: "What’s it like in the kitchen?",
      description: "From raw ingredients to the plate, discover it all here.",
    },
    reviews: {
      title: "Did you enjoy?",
      description: "Feel free to leave a review about our food and service.",
      linkText: "Our reviews",
    },
  },
} as const