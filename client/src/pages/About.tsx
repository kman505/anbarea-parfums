import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="About Us | Anbaréa Parfums"
        description="Learn about Anbaréa Parfums - our mission to make luxury fragrances accessible to everyone through inspired scents and ethical practices."
      />
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Story</h1>
            
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Anbaréa Parfums was born from a simple idea: everyone deserves to experience the magic 
                of a signature scent, without compromise.
              </p>

              <p className="text-lg leading-relaxed">
                Frustrated by the sky-high prices and exclusivity of luxury fragrances, our founder set 
                out on a mission: to recreate and reinterpret the world's most beloved perfumes, delivering 
                them directly—no middlemen, no markups, just pure artistry in a bottle.
              </p>

              <div className="my-12 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=80"
                  alt="Perfume creation process"
                  className="w-full h-96 object-cover"
                />
              </div>

              <p className="text-lg leading-relaxed">
                Each bottle is a testament to the idea that scent should be personal, accessible, and 
                unforgettable. We use only high-quality, ethically sourced ingredients, blending in small 
                batches to ensure every fragrance captures the heart of its inspiration.
              </p>

              <p className="text-lg leading-relaxed">
                Today, Anbaréa Parfums is more than a fragrance house—it's a community, a movement against 
                overpriced luxury, and a promise that <strong className="text-foreground">your signature scent is within reach</strong>.
              </p>

              <div className="mt-12 p-8 bg-accent/20 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-foreground">About the Name</h2>
                <p className="text-lg leading-relaxed">
                  The name "Anbaréa" is inspired by "amber"—the golden essence prized in perfumery—and 
                  the elegance of French fragrance heritage. The accent on the 'é'? That's our signature 
                  flourish, a nod to artistry, authenticity, and a bit of daring.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Our Values</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Quality First</h3>
                    <p>
                      We never compromise on ingredients or craftsmanship. Every fragrance is meticulously 
                      crafted to capture the essence of its inspiration.
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Accessibility</h3>
                    <p>
                      Luxury shouldn't be exclusive. We believe everyone deserves access to beautiful, 
                      high-quality fragrances at fair prices.
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Transparency</h3>
                    <p>
                      We're honest about our inspirations and our process. What you see is what you get—no 
                      hidden fees, no false promises.
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Sustainability</h3>
                    <p>
                      From ethically sourced ingredients to our Vault collection of pre-loved fragrances, 
                      we're committed to sustainable practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

