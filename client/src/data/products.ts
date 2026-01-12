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
    description: 'A dimly lit jazz club, the clink of crystal, and the warmth of aged spirits. Cognac Haze is an intoxicating embrace of oak, cinnamon, and praline that lingers on the skin like a cherished memory. Rich, boozy, and undeniably sophisticated.',
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
    description: 'Silvery moonlight filtering through ancient trees. Ashen Wood is a mysterious, androgynous masterpiece where cool iris meets the smoky warmth of incense. It whispers rather than shouts—a scent of quiet power and ethereal beauty.',
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
    description: 'Sunset in a bottle. The playful brightness of black cherry melts into a creamy, radiant vanilla heart. It’s warm, inviting, and effortlessly chic—a fragrance that feels like the golden hour on your skin.',
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
    description: 'The first bite of a crisp green apple on a spring morning. Clean, modern, and revitalizing, this scent blends sparkling fruit notes with a soft, skin-like musk. Pure everyday elegance that feels like a fresh start.',
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
    description: 'A comforting cloud of creamy sandalwood and whipped almond milk. Milky Dream is soft, intimate, and wraps you in a cocoon of calm. Like cashmere against bare skin, it’s a scent of pure serenity.',
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
    description: 'The allure of the open road and worn leather jackets. Santal Mystique is a cult classic reimagined—a smoky, woody embrace of sandalwood, cardamom, and violet. Addictive, unisex, and unforgettable.',
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
    description: 'A talisman of protection and luck. Azure Amulet captures the infinite blue of the sky meeting the sea. Ethereal pear and bergamot float over a grounding woody base, creating a scent that feels both mystical and modern.',
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
    description: 'Alchemy in a bottle. Crimson Crystal is a radiant paradox—transparent yet dense, airy yet intense. Saffron and jasmine dance over a base of warm ambergris, creating a luminous trail that turns heads wherever you go.',
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
    description: 'Pure, unadulterated joy. Sugar Veil is a playful gourmand delight where sparkling sugar crystals meet fluffy marshmallow and vanilla bean. It’s sweet, nostalgic, and irresistibly charming—a treat for the senses.',
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
    description: 'Liquid gold that moves with you. Golden Essence is a celebration of fluidity—warm vanilla and amber melting into spicy nutmeg and coriander. It adapts to your skin chemistry, creating a signature glow that is uniquely yours.',
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
    description: 'A midnight garden in full bloom. Violet Velvet pairs the deep, powdery elegance of violet and iris with a rich vanilla base. Luxurious, dark, and velvety smooth—like draping yourself in purple silk.',
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
    description: 'The heat of the desert night. Arabian Ember is a passionate blend of spicy saffron, rich tonka bean, and dark oud. It burns with a quiet intensity—warm, exotic, and deeply comforting.',
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
    description: 'A daydream in pink. Orchid Reverie takes the beloved creamy sweetness of vanilla orchid and adds a surprising spark of bright tangerine. It’s fluffy, feminine, and utterly dreamy.',
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
    description: 'A palace of rose and gold. Oud Lumière is an opulent masterpiece where the animalic depth of oud is tamed by the luminous beauty of damask rose. Regal, sophisticated, and breathtakingly grand.',
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
    description: 'The intoxicating warmth of Cognac Haze, concentrated in a travel-friendly oil. Perfect for pulse points.',
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
    description: 'The radiant alchemy of Crimson Crystal in a potent oil format. A touch of luxury anywhere you go.',
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
    description: 'The cult classic woody scent in a deeply moisturizing oil base. Intimate and long-lasting.',
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
    description: 'A pocket-sized sunset. Sweet cherry and vanilla oil that melts into the skin for a warm, radiant glow.',
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
    description: 'Pure comfort in a roller. Creamy sandalwood and almond milk oil for moments when you need serenity.',
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
    description: 'Opulence in your pocket. The regal blend of oud and rose in a concentrated oil for intense longevity.',
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
