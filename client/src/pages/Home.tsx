import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { Link } from "wouter";
import { Sparkles, Leaf, Package } from "lucide-react";

export default function Home() {
  const signatureProducts = products.filter(p => p.category === 'signature');
  
  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-accent/30 to-background py-20 md:py-32">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Inspired Scents.<br />Unforgettable Experiences.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                Discover luxury, reimagined. At Anbaréa, we believe fragrance is for everyone. 
                We recreate and reinterpret your favorite designer and niche perfumes, offering exceptional 
                quality at accessible prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/shop">
                  <Button size="lg" className="text-lg px-8">
                    Shop Our Scents
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="text-lg px-8">
                    Our Story
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Signature Collection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our carefully crafted fragrances, inspired by the world's most beloved scents
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {signatureProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                * Try a 2ml tester before committing to a full bottle!
              </p>
              <Link href="/shop">
                <Button variant="outline" size="lg">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-24 bg-accent/20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Anbaréa?</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Premium Quality</h3>
                <p className="text-muted-foreground">
                  High-quality inspired fragrances for a fraction of luxury prices
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ethically Sourced</h3>
                <p className="text-muted-foreground">
                  Ethically sourced ingredients, small-batch production
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Try Before You Buy</h3>
                <p className="text-muted-foreground">
                  Order a 2ml tester for just $5—find your perfect scent risk-free
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon Teaser */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/20">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Coming Soon</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              New luxury-inspired fragrances launching soon. From radiant roses to bold fusions, 
              discover what's next in the Anbaréa collection.
            </p>
            <Link href="/coming-soon">
              <Button size="lg" variant="outline">
                Preview Upcoming Scents
              </Button>
            </Link>
          </div>
        </section>

        {/* Collections Preview */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/shop?category=roller">
                <div className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=800&q=80"
                    alt="Oil Rollers"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">Oil Rollers</h3>
                      <p className="text-white/90">Portable luxury, perfect for travel • 10ml • $18</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/shop?category=vault">
                <div className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1563170351-be82bc888aa4?auto=format&fit=crop&w=800&q=80"
                    alt="The Vault Collection"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-2">The Vault Collection</h3>
                      <p className="text-white/90">Curated pre-loved fragrances at exceptional value</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

