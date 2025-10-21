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
    id: 'amber-no-5',
    name: 'Amber No. 5',
    category: 'signature',
    description: 'A radiant floral-aldehyde with classic elegance. Timeless sophistication captured in a bottle, featuring luminous aldehydes dancing with jasmine and rose.',
    inspiredBy: 'Chanel No. 5',
    notes: {
      top: ['Aldehydes', 'Neroli', 'Ylang-Ylang'],
      heart: ['Jasmine', 'Rose', 'Lily of the Valley'],
      base: ['Sandalwood', 'Vanilla', 'Amber']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'oud-royale',
    name: 'Oud Royale',
    category: 'signature',
    description: 'A regal blend of oud, lemon, and spice—timeless, powerful, unforgettable. Experience the majesty of precious oud wood harmonized with bright citrus and warm spices.',
    inspiredBy: 'Creed Royal Oud',
    notes: {
      top: ['Lemon', 'Pink Pepper', 'Bergamot'],
      heart: ['Cedar', 'Galbanum', 'Angelica'],
      base: ['Oud', 'Sandalwood', 'Musk']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'jasmin-lumiere',
    name: 'Jasmin Lumière',
    category: 'signature',
    description: 'A luminous bouquet of jasmine and rose, uplifting and sophisticated. Delicate petals kissed by morning light, creating an ethereal floral symphony.',
    inspiredBy: 'Maison Francis Kurkdjian À la rose',
    notes: {
      top: ['Bergamot', 'Orange', 'Violet'],
      heart: ['Jasmine', 'Rose', 'Magnolia'],
      base: ['White Musk', 'Cedar', 'Amber']
    },
    prices: [
      { size: '2ml Tester', price: 5.00 },
      { size: '30ml', price: 69.00 },
      { size: '50ml', price: 99.00 }
    ],
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  // Oil Rollers
  {
    id: 'amber-no-5-roller',
    name: 'Amber No. 5 Oil Roller',
    category: 'roller',
    description: 'Our signature Amber No. 5 in a convenient 10ml oil roller. Perfect for travel and touch-ups throughout the day.',
    inspiredBy: 'Chanel No. 5',
    prices: [
      { size: '10ml Roller', price: 18.00 }
    ],
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'oud-royale-roller',
    name: 'Oud Royale Oil Roller',
    category: 'roller',
    description: 'Experience the majesty of Oud Royale in a portable 10ml oil roller format. Luxury on the go.',
    inspiredBy: 'Creed Royal Oud',
    prices: [
      { size: '10ml Roller', price: 18.00 }
    ],
    image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
    inStock: true
  },
  {
    id: 'jasmin-lumiere-roller',
    name: 'Jasmin Lumière Oil Roller',
    category: 'roller',
    description: 'Jasmin Lumière in a travel-friendly 10ml oil roller. Luminous florals wherever you go.',
    inspiredBy: 'Maison Francis Kurkdjian À la rose',
    prices: [
      { size: '10ml Roller', price: 18.00 }
    ],
    image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?auto=format&fit=crop&w=800&q=80',
    inStock: true
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(p => p.category === category);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};

