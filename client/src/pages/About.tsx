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
                It started with a question: Why should a bottle of perfume cost more than a week's groceries?
              </p>

              <p className="text-lg leading-relaxed">
                Like many fragrance enthusiasts, I fell in love with scents I couldn't afford to wear every day. 
                I'd spray testers at department stores, watch YouTube reviews, and dream about owning a full bottle 
                of Baccarat Rouge or Creed Aventus. But at $300+ per bottle, it felt impossible.
              </p>

              <p className="text-lg leading-relaxed">
                Then I discovered the world of fragrance dupes and inspired perfumes. I tried dozens—some were 
                terrible, but a few were surprisingly close to the originals. That's when it clicked: <strong className="text-foreground">what 
                if I could create my own?</strong>
              </p>

              <div className="my-12 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=80"
                  alt="Perfume creation process"
                  className="w-full h-96 object-cover"
                />
              </div>

              <p className="text-lg leading-relaxed">
                I started small—mixing oils in my kitchen, testing on friends, tweaking formulas until they felt 
                just right. Some were disasters (sorry to everyone who smelled my early attempts at oud). But slowly, 
                I learned what worked: high-quality fragrance oils, the right concentrations, and patience.
              </p>

              <p className="text-lg leading-relaxed">
                Anbaréa Parfums grew from those kitchen experiments. Today, we partner with experienced perfumers 
                and use premium ingredients to create fragrances inspired by the scents we all love—but at prices 
                that don't require a second mortgage.
              </p>

              <p className="text-lg leading-relaxed">
                We're not trying to fool anyone. Our bottles don't pretend to be Chanel or Dior. We're honest about 
                what we are: <strong className="text-foreground">affordable alternatives that let you enjoy luxury scents without the luxury price tag</strong>. 
                Whether you're building your collection, trying a scent before investing in the original, or just 
                want a great-smelling fragrance that doesn't break the bank—we're here for you.
              </p>

              <div className="mt-12 p-8 bg-accent/20 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Why "Anbaréa"?</h2>
                <p className="text-lg leading-relaxed">
                  The name comes from "amber"—one of the most beloved notes in perfumery, warm and timeless. 
                  I added the accent (é) because, honestly, it looked cooler and gave the brand a bit of personality. 
                  Plus, if you're going to sell fragrances, why not have a little fun with the name?
                </p>
              </div>

              <div className="mt-12 p-6 bg-primary/5 border-l-4 border-primary rounded">
                <h3 className="text-lg font-semibold mb-3 text-foreground">Important Legal Notice</h3>
                <p className="text-sm leading-relaxed">
                  Anbaréa Parfums is an independent fragrance company. We are <strong>not affiliated with, endorsed by, 
                  or connected to</strong> any of the designer brands, perfume houses, or trademark owners mentioned on our website. 
                  All brand names are used solely for comparison and descriptive purposes to help customers understand the scent 
                  profile and inspiration behind our fragrances. Our products are original Anbaréa Parfums creations—not counterfeits, 
                  copies, or imitations. <a href="/disclaimer" className="underline hover:text-foreground font-medium">Read our full legal disclaimer</a>.
                </p>
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6 text-foreground">What We Believe</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Fragrance for Everyone</h3>
                    <p>
                      You shouldn't have to choose between smelling great and paying rent. Beautiful scents should 
                      be accessible, not exclusive.
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Honest Quality</h3>
                    <p>
                      We use high-quality oils and ingredients. We're upfront about what we are—inspired fragrances, 
                      not designer originals—and we're proud of that.
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Try Before You Commit</h3>
                    <p>
                      That's why we offer 2ml testers for $5. Test it, love it, then go bigger. No regrets, 
                      no wasted money on full bottles you'll never wear.
                    </p>
                  </div>
                  <div className="p-6 border rounded-lg">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">Direct to You</h3>
                    <p>
                      No fancy storefronts, no celebrity endorsements, no inflated markups. Just great fragrances 
                      shipped straight to your door.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-accent/20 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Join the Anbaréa Community</h2>
                <p className="text-lg leading-relaxed mb-6">
                  We're more than a fragrance brand—we're a community of scent lovers who refuse to pay luxury 
                  prices for everyday luxury. Whether you're new to fragrances or a seasoned collector, you belong here.
                </p>
                <a 
                  href="/shop" 
                  className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  Explore Our Scents
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

