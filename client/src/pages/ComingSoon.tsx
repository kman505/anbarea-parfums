import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { comingSoonProducts } from "@/data/comingSoon";
import { Clock } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Coming Soon | Anbaréa"
        description="Discover upcoming fragrances from Anbaréa. New luxury-inspired scents launching soon."
      />
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Coming Soon</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Exciting new fragrances are on the horizon. Be the first to experience our latest creations 
              inspired by the world's most coveted scents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonProducts.map(product => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square overflow-hidden bg-accent relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <span className="text-white font-semibold text-sm uppercase tracking-wider">
                      Coming Soon
                    </span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription className="italic">
                    Inspired by {product.inspiredBy}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  
                  {product.notes && (
                    <div className="space-y-2 text-xs">
                      {product.notes.top && (
                        <div>
                          <span className="font-medium text-muted-foreground">Top: </span>
                          <span className="text-foreground">{product.notes.top.join(', ')}</span>
                        </div>
                      )}
                      {product.notes.heart && (
                        <div>
                          <span className="font-medium text-muted-foreground">Heart: </span>
                          <span className="text-foreground">{product.notes.heart.join(', ')}</span>
                        </div>
                      )}
                      {product.notes.base && (
                        <div>
                          <span className="font-medium text-muted-foreground">Base: </span>
                          <span className="text-foreground">{product.notes.base.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto text-center p-8 bg-accent/20 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Want to be notified?</h2>
            <p className="text-muted-foreground mb-6">
              Sign up to receive updates when these fragrances launch. Be among the first to experience 
              our newest creations.
            </p>
            <a 
              href="/contact" 
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Get Notified
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

