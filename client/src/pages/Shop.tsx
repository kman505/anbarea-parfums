import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { products, Product } from "@/data/products";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Shop() {
  const [location] = useLocation();
  const [activeCategory, setActiveCategory] = useState<Product['category'] | 'all'>('all');
  
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category') as Product['category'] | null;
    if (category && ['signature', 'roller', 'vault'].includes(category)) {
      setActiveCategory(category);
    }
  }, [location]);

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const getCategoryTitle = () => {
    switch (activeCategory) {
      case 'signature': return 'Signature Collection';
      case 'roller': return 'Oil Rollers';
      case 'vault': return 'The Vault Collection';
      default: return 'All Products';
    }
  };

  const getCategoryDescription = () => {
    switch (activeCategory) {
      case 'signature': 
        return 'Our premium inspired fragrances, crafted with exceptional quality and care';
      case 'roller': 
        return 'Portable luxury in 10ml oil roller format—perfect for travel and touch-ups';
      case 'vault': 
        return 'Curated pre-loved designer and niche fragrances at exceptional value';
      default: 
        return 'Explore our complete collection of inspired fragrances, oil rollers, and curated finds';
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${getCategoryTitle()} | Anbaréa`}
        description={getCategoryDescription()}
      />
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{getCategoryTitle()}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {getCategoryDescription()}
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Tabs value={activeCategory} onValueChange={(v) => setActiveCategory(v as any)}>
              <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="signature">Signature</TabsTrigger>
                <TabsTrigger value="roller">Oil Rollers</TabsTrigger>
                <TabsTrigger value="vault">The Vault</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No products found in this category yet. Check back soon!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}

          {activeCategory === 'vault' && (
            <div className="mt-12 p-6 bg-accent/20 rounded-lg max-w-3xl mx-auto">
              <h3 className="text-lg font-semibold mb-2">About The Vault Collection</h3>
              <p className="text-muted-foreground">
                The Vault features authentic designer and niche fragrances from our personal collection. 
                Each item is carefully inspected and described with complete transparency. 
                Perfect for fragrance explorers seeking variety and exceptional value.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

