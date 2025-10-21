import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { getProductById } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function ProductDetail() {
  const [, params] = useRoute("/product/:id");
  const product = params?.id ? getProductById(params.id) : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Link href="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`${product.name} | Anbaréa Parfums`}
        description={product.description}
        image={product.image}
      />
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-6xl">
          <Link href="/shop">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Button>
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-square overflow-hidden rounded-lg bg-accent">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
                {product.inspiredBy && (
                  <p className="text-lg text-muted-foreground italic">
                    Inspired by {product.inspiredBy}
                  </p>
                )}
              </div>

              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>

              {product.notes && (
                <div className="space-y-4 p-6 bg-accent/20 rounded-lg">
                  <h3 className="font-semibold text-lg">Fragrance Notes</h3>
                  {product.notes.top && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Top Notes</p>
                      <p className="text-sm">{product.notes.top.join(', ')}</p>
                    </div>
                  )}
                  {product.notes.heart && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Heart Notes</p>
                      <p className="text-sm">{product.notes.heart.join(', ')}</p>
                    </div>
                  )}
                  {product.notes.base && (
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Base Notes</p>
                      <p className="text-sm">{product.notes.base.join(', ')}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Select Size</h3>
                {product.prices.map((price, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 border rounded-lg hover:border-primary transition-colors cursor-pointer">
                    <div>
                      <p className="font-medium">{price.size}</p>
                      {idx === 0 && product.prices.length > 1 && (
                        <p className="text-sm text-muted-foreground">Try before you buy!</p>
                      )}
                    </div>
                    <p className="text-xl font-bold">${price.price.toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full">
                Add to Cart
              </Button>

              <div className="text-sm text-muted-foreground space-y-2 pt-4 border-t">
                <p>✓ Ethically sourced ingredients</p>
                <p>✓ Small-batch production</p>
                <p>✓ Fast, direct shipping</p>
              </div>

              {product.inspiredBy && (
                <div className="text-xs text-muted-foreground pt-4 border-t italic">
                  <p>
                    * This fragrance is inspired by {product.inspiredBy} but is not affiliated with or endorsed by the original brand. 
                    Anbaréa Parfums is an independent fragrance company. <a href="/disclaimer" className="underline hover:text-foreground">Learn more</a>.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

