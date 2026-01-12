import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Our Story | Anbaréa"
        description="Discover the story behind Anbaréa - a personal journey of scent, memory, and the art of fragrance layering."
      />
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center font-serif">The Art of Scent</h1>
            
            <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
              <p className="text-xl leading-relaxed font-medium text-foreground text-center italic">
                "Perfume is not just a smell. It's a memory, a mood, a silent language that speaks before you say a word."
              </p>

              <div className="my-12 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=1200&q=80"
                  alt="The art of perfumery"
                  className="w-full h-96 object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12">A Personal Journey</h2>
              
              <p className="text-lg leading-relaxed">
                My obsession with fragrance began long before Anbaréa existed. I was the person who would stop strangers to ask what they were wearing. I spent hours in department stores, spraying testers on every inch of my arms, closing my eyes, and letting the scents transport me.
              </p>

              <p className="text-lg leading-relaxed">
                To me, fragrance has always been emotional. A whiff of vanilla takes me back to baking in my grandmother's kitchen. The sharp scent of oud reminds me of travel and mystery. I realized that my perfume collection wasn't just bottles on a vanity—it was my wardrobe of feelings.
              </p>

              <p className="text-lg leading-relaxed">
                But as my passion grew, so did the frustration. The fragrances that truly moved me—the complex, rich, long-lasting ones—were often locked behind impossible price tags. I wanted to layer scents, to experiment, to wear a different mood every day, but luxury pricing made that a rare indulgence rather than a daily joy.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">The Birth of Anbaréa</h2>

              <p className="text-lg leading-relaxed">
                Anbaréa was born from a simple desire: to democratize the magic of scent. I started experimenting in my own home, blending oils, learning the chemistry of notes, and understanding how base notes anchor a fragrance while top notes let it sing.
              </p>

              <p className="text-lg leading-relaxed">
                I didn't just want to copy scents; I wanted to capture their <em>soul</em>. I wanted to create fragrances that felt rich, deep, and expensive, but were accessible enough that you could spray them liberally, layer them fearlessly, and live in them fully.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-accent/10 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">The Power of Layering</h3>
                  <p>
                    Like Mona Kattan, I believe fragrance is personal. Don't be afraid to mix! Try layering <em>Vanilla Cherry Glow</em> over <em>Cognac Haze</em> for a warm, boozy sweetness. Or add <em>Ashen Wood</em> to anything to give it a smoky, mysterious depth. Make the scent your own.
                  </p>
                </div>
                <div className="bg-accent/10 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">Why "Anbaréa"?</h3>
                  <p>
                    The name is rooted in "Amber"—the golden, warm heart of perfumery. It represents timelessness, warmth, and the glow that a beautiful scent leaves on your skin. It's an invitation to find your own glow.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12">My Promise to You</h2>

              <p className="text-lg leading-relaxed">
                Anbaréa is my love letter to fragrance. Every bottle is an invitation to explore, to play, and to feel beautiful. We are honest about who we are: an independent house creating inspired interpretations of the world's most beautiful scents.
              </p>

              <p className="text-lg leading-relaxed">
                We strip away the celebrity endorsements and crystal bottles to focus on what matters: the juice inside. The quality. The longevity. The feeling.
              </p>

              <div className="mt-12 p-6 bg-primary/5 border-l-4 border-primary rounded">
                <h3 className="text-lg font-semibold mb-3 text-foreground">A Note on Authenticity</h3>
                <p className="text-sm leading-relaxed">
                  Anbaréa is an independent fragrance house. We are <strong>not affiliated with</strong> any of the designer brands mentioned on our site. We use their names only to help you understand the scent profile of our original creations. We are proud to offer high-quality alternatives that stand on their own merit. <a href="/disclaimer" className="underline hover:text-foreground font-medium">Read our full disclaimer</a>.
                </p>
              </div>

              <div className="mt-16 text-center">
                <p className="text-2xl font-serif italic text-foreground mb-8">
                  "Wear your fragrance like an invisible crown."
                </p>
                <a 
                  href="/shop" 
                  className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Scent Journey
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
