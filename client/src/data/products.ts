export interface Product {
  id: string;
  name: string;
  category: 'signature' | 'roller' | 'vault';
  description: string;
  inspiredBy?: string;
  notes?: {
    top?: string[];
    heart?: string[];
    base?: string[];
  };
  prices: {
    size: string;
    price: number;
  }[];
  image: string;
  inStock: boolean;
}

export const products: Product[] = [
  // Signature Collection
  {
    id: 'cognac-haze',
    name: 'Cognac Haze',
    category: 'signature',
    description: 'Intoxicating warmth of cognac, oak, and tonka bean. A boozy, sophisticated embrace that lingers like a cherished memory.',
    inspiredBy: "Angel's Share by Kilian",
    notes: {
      top: ['Cognac', 'Cinnamon', 'Oak'],
      heart: ['Tonka Bean', 'Praline', 'Sandalwood'],
      base: ['Vanilla', 'Benzoin', 'Labdanum']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/cognac-haze.jpg',
    inStock: true
  },
  {
    id: 'ashen-wood',
    name: 'Ashen Wood',
    category: 'signature',
    description: 'Smoky, silvery woods meet iris and musk. A mysterious, androgynous scent that captivates with its quiet power.',
    inspiredBy: 'Bois d\'Argent / Bois Talisman',
    notes: {
      top: ['Cypress', 'Juniper', 'Iris'],
      heart: ['Myrrh', 'Patchouli', 'Vetiver'],
      base: ['Incense', 'Amber', 'White Musk']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/ashen-wood.jpg',
    inStock: true
  },
  {
    id: 'vanilla-cherry-glow',
    name: 'Vanilla Cherry Glow',
    category: 'signature',
    description: 'Sweet cherry and creamy vanilla create a warm, radiant aura. Playful yet sophisticated, like sunset in a bottle.',
    notes: {
      top: ['Black Cherry', 'Almond', 'Pink Pepper'],
      heart: ['Turkish Rose', 'Jasmine Sambac'],
      base: ['Vanilla', 'Tonka Bean', 'Sandalwood']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/vanilla-cherry-glow.jpg',
    inStock: true
  },
  {
    id: 'fresh-apple-musks',
    name: 'Fresh Apple Musks',
    category: 'signature',
    description: 'Crisp green apple meets soft, clean musk. Refreshing and modern, perfect for everyday elegance.',
    notes: {
      top: ['Green Apple', 'Pear', 'Bergamot'],
      heart: ['White Flowers', 'Peony', 'Freesia'],
      base: ['White Musk', 'Cedarwood', 'Amber']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/fresh-apple-musks.jpg',
    inStock: true
  },
  {
    id: 'milky-dream',
    name: 'Milky Dream',
    category: 'signature',
    description: 'Soft, creamy sandalwood and white florals create a dreamy, comforting cloud. Like cashmere on skin.',
    notes: {
      top: ['Almond Milk', 'Fig', 'Mandarin'],
      heart: ['Coconut', 'Jasmine', 'Heliotrope'],
      base: ['Sandalwood', 'Vanilla', 'Musk']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/milky-dream.jpg',
    inStock: true
  },
  {
    id: 'santal-mystique',
    name: 'Santal Mystique',
    category: 'signature',
    description: 'A smoky, woody embrace of sandalwood, leather, and cardamom. Mysterious and addictive, with an unforgettable trail.',
    inspiredBy: 'Le Labo Santal 33',
    notes: {
      top: ['Cardamom', 'Iris', 'Violet'],
      heart: ['Sandalwood', 'Papyrus', 'Cedar'],
      base: ['Leather', 'Amber', 'Musk']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/santal-mystique.jpg',
    inStock: true
  },
  {
    id: 'azure-amulet',
    name: 'Azure Amulet',
    category: 'signature',
    description: 'A mystical blend of blue notes, woods, and ethereal florals. Like a talisman of sky and sea.',
    inspiredBy: 'Ex Nihilo Blue Talisman',
    notes: {
      top: ['Lavender', 'Mint', 'Bergamot'],
      heart: ['Iris', 'Violet', 'Jasmine'],
      base: ['Cedarwood', 'Vetiver', 'Musk']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/azure-amulet.jpg',
    inStock: true
  },
  {
    id: 'crimson-crystal',
    name: 'Crimson Crystal',
    category: 'signature',
    description: 'Radiant saffron and amber wood in crystalline brilliance. A luminous, unforgettable signature scent.',
    inspiredBy: 'Baccarat Rouge 540',
    notes: {
      top: ['Saffron', 'Jasmine'],
      heart: ['Amberwood', 'Ambergris'],
      base: ['Fir Resin', 'Cedar', 'Musk']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/crimson-crystal.jpg',
    inStock: true
  },
  {
    id: 'sugar-veil',
    name: 'Sugar Veil',
    category: 'signature',
    description: 'Delicate vanilla sweetness wrapped in sparkling sugar crystals. Playful, gourmand, irresistibly charming.',
    inspiredBy: 'Kayali Vanilla Candy Rock Sugar',
    notes: {
      top: ['Sugar', 'Bergamot', 'Pear'],
      heart: ['Vanilla', 'Jasmine', 'Praline'],
      base: ['Musk', 'Tonka Bean', 'Benzoin']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/sugar-veil.jpg',
    inStock: true
  },
  {
    id: 'golden-essence',
    name: 'Golden Essence',
    category: 'signature',
    description: 'Warm, ambery fluidity with vanilla and musk. Liquid gold that adapts to your skin, creating a unique signature.',
    inspiredBy: 'MFK Gentle Fluidity Gold',
    notes: {
      top: ['Coriander', 'Nutmeg'],
      heart: ['Vanilla', 'Amber', 'Musk'],
      base: ['Juniper Berry', 'Woody Notes']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/golden-essence.jpg',
    inStock: true
  },
  {
    id: 'violet-velvet',
    name: 'Violet Velvet',
    category: 'signature',
    description: 'Deep purple florals entwined with creamy vanilla. Luxurious and velvety, like amethyst in liquid form.',
    inspiredBy: 'Amethyst & Vanilla',
    notes: {
      top: ['Violet', 'Blackcurrant', 'Bergamot'],
      heart: ['Iris', 'Rose', 'Jasmine'],
      base: ['Vanilla', 'Patchouli', 'Musk']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/violet-velvet.jpg',
    inStock: true
  },
  {
    id: 'arabian-ember',
    name: 'Arabian Ember',
    category: 'signature',
    description: 'Rich tonka bean and vanilla from the heart of Arabia. Warm, exotic, and deeply comforting.',
    inspiredBy: 'Montale Arabians Tonka',
    notes: {
      top: ['Saffron', 'Bergamot', 'Orange'],
      heart: ['Tonka Bean', 'Rose', 'Oud'],
      base: ['Vanilla', 'Amber', 'White Musk']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/arabian-ember.jpg',
    inStock: true
  },
  {
    id: 'orchid-reverie',
    name: 'Orchid Reverie',
    category: 'signature',
    description: 'Sweet orchid and vanilla with an unexpected citrus spark. A dreamy twist on a beloved classic.',
    inspiredBy: 'Yara by Lattafa (with special twist)',
    notes: {
      top: ['Mandarin', 'Heliotrope', 'Tangerine'],
      heart: ['Orchid', 'Gourmand Accord', 'Vanilla'],
      base: ['Musk', 'Sandalwood', 'Patchouli']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/orchid-reverie.jpg',
    inStock: true
  },
  {
    id: 'oud-lumiere',
    name: 'Oud Lumière',
    category: 'signature',
    description: 'Luminous oud with rose and labdanum, a Persian treasure. Opulent yet refined, a true masterpiece.',
    inspiredBy: 'Dior Oud Isphahan',
    notes: {
      top: ['Labdanum', 'Rose'],
      heart: ['Oud', 'Patchouli', 'Sandalwood'],
      base: ['Cedar', 'Amber', 'Incense']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: '/oud-lumiere.jpg',
    inStock: true
  },
  
  // Oil Rollers - Top sellers
  {
    id: 'cognac-haze-roller',
    name: 'Cognac Haze Oil Roller',
    category: 'roller',
    description: 'Our bestselling Cognac Haze in a convenient 10ml oil roller. Boozy warmth on the go.',
    inspiredBy: "Angel's Share by Kilian",
    prices: [
      { size: '10ml Roller', price: 18.00 }
    ],
    image: '#D4A574',
    inStock: true
  },
  {
    id: 'crimson-crystal-roller',
    name: 'Crimson Crystal Oil Roller',
    category: 'roller',
    description: 'The iconic Crimson Crystal in portable oil roller format. Radiance wherever you go.',
    inspiredBy: 'Baccarat Rouge 540',
    prices: [
      { size: '10ml Roller', price: 18.00 }
    ],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'santal-mystique-roller',
    name: 'Santal Mystique Oil Roller',
    category: 'roller',
    description: 'Smoky sandalwood and leather in a travel-friendly 10ml roller. Mystery in your pocket.',
    inspiredBy: 'Le Labo Santal 33',
    prices: [
      { size: '10ml Roller', price: 18.00 }
    ],
    image: '#C19A6B',
    inStock: true
  },
  {
    id: 'vanilla-cherry-glow-roller',
    name: 'Vanilla Cherry Glow Oil Roller',
    category: 'roller',
    description: 'Sweet cherry and vanilla warmth in portable format. Perfect for touch-ups throughout the day.',
    prices: [
      { size: '10ml Roller', price: 18.00 }
    ],
    image: '#FFB6C1',
    inStock: true
  },
  {
    id: 'milky-dream-roller',
    name: 'Milky Dream Oil Roller',
    category: 'roller',
    description: 'Creamy sandalwood comfort in a 10ml roller. Dreamy softness on the go.',
    prices: [
      { size: '10ml Roller', price: 18.00 }
    ],
    image: '#FFFAF0',
    inStock: true
  },
  {
    id: 'oud-lumiere-roller',
    name: 'Oud Lumière Oil Roller',
    category: 'roller',
    description: 'Luminous oud and rose in travel-friendly format. Persian luxury wherever you roam.',
    inspiredBy: 'Dior Oud Isphahan',
    prices: [
      { size: '10ml Roller', price: 18.00 }
    ],
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=800&q=80',
    inStock: true
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

