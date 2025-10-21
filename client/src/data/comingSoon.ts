export interface ComingSoonProduct {
  id: string;
  name: string;
  description: string;
  inspiredBy: string;
  notes?: {
    top?: string[];
    heart?: string[];
    base?: string[];
  };
  image: string;
}

export const comingSoonProducts: ComingSoonProduct[] = [
  {
    id: 'rose-eclat',
    name: 'Rose Éclat',
    description: 'Radiant Turkish rose with lychee and rhubarb—luminous, feminine, unforgettable. A blooming garden at dawn.',
    inspiredBy: 'Delina by Parfums de Marly',
    notes: {
      top: ['Lychee', 'Rhubarb', 'Bergamot', 'Nutmeg'],
      heart: ['Turkish Rose', 'Peony', 'Vanilla'],
      base: ['Musk', 'Cashmeran', 'Incense']
    },
    image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'citrus-royale',
    name: 'Citrus Royale',
    description: 'Bright orange blossom and bergamot in regal splendor—fresh, opulent, joyful. Pure sunshine in a bottle.',
    inspiredBy: 'Oriana by Parfums de Marly',
    notes: {
      top: ['Bergamot', 'Mandarin', 'Grapefruit'],
      heart: ['Orange Blossom', 'Marshmallow', 'Blackcurrant'],
      base: ['Musk', 'Ambergris', 'Whipped Cream']
    },
    image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'rose-noire',
    name: 'Rose Noire',
    description: 'Darker, deeper rose with incense and oud—mysterious, seductive, exclusive. Rose for the night.',
    inspiredBy: 'Delina Exclusif by Parfums de Marly',
    notes: {
      top: ['Lychee', 'Nutmeg', 'Bergamot'],
      heart: ['Turkish Rose', 'Incense', 'Vanilla'],
      base: ['Oud', 'Musk', 'Benzoin', 'Leather']
    },
    image: 'https://images.unsplash.com/photo-1509909756405-be0199881695?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sovereign-flame',
    name: 'Sovereign Flame',
    description: 'The power of Aventus meets the radiance of Baccarat—bold, luminous, commanding. Power that glows from within.',
    inspiredBy: 'Aventus + Baccarat Rouge 540 Fusion',
    notes: {
      top: ['Pineapple', 'Blackcurrant', 'Saffron', 'Apple'],
      heart: ['Birch', 'Jasmine', 'Amberwood', 'Patchouli'],
      base: ['Oakmoss', 'Vanilla', 'Fir Resin', 'Musk']
    },
    image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'crimson-elixir',
    name: 'Crimson Elixir',
    description: 'The intensified essence of Crimson Crystal—deeper, richer, more intoxicating. Pure liquid luxury.',
    inspiredBy: 'Baccarat Rouge 540 Extrait',
    notes: {
      top: ['Bitter Almond', 'Saffron'],
      heart: ['Egyptian Jasmine', 'Cedar'],
      base: ['Ambergris', 'Woody Notes', 'Musk', 'Vanilla']
    },
    image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80'
  }
];

