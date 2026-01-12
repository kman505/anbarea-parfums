import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEO({
  title = 'Anbaréa | Inspired Scents. Unforgettable Experiences.',
  description = 'Shop inspired fragrances—designer perfume dupes and niche alternatives. Ethically sourced, affordable, unforgettable scents. Try a 2ml tester today!',
  keywords = 'fragrance, perfume dupes, designer alternatives, niche perfume, affordable scent, oil rollers, luxury fragrance, Anbarea Parfums',
  image = 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1200&q=80',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website'
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // JSON-LD structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org/',
      '@type': 'Store',
      name: 'Anbaréa',
      url: url || 'https://anbarea-parfums.com',
      logo: image,
      description: description,
      sameAs: [],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Fragrances',
        itemListElement: [
          {
            '@type': 'Product',
            name: 'Amber No. 5',
            image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=800&q=80',
            description: 'A radiant floral-aldehyde with classic elegance. Inspired by Chanel No. 5.',
            brand: 'Anbaréa',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: '69.00',
              availability: 'https://schema.org/InStock'
            }
          },
          {
            '@type': 'Product',
            name: 'Oud Royale',
            image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=800&q=80',
            description: 'A regal blend of oud, lemon, and spice. Inspired by Creed Royal Oud.',
            brand: 'Anbaréa',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: '99.00',
              availability: 'https://schema.org/InStock'
            }
          }
        ]
      }
    });
    document.head.appendChild(script);
  }, [title, description, keywords, image, url, type]);

  return null;
}

