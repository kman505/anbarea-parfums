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
                "Perfume is not just a smell. It is memory. Mood. A silent language that speaks before you ever do."
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
                My relationship with fragrance began long before Anbaréa had a name.
              </p>

              <p className="text-lg leading-relaxed">
                I was the person who stopped strangers on the street to ask what they were wearing. I spent hours in department stores, arms layered with testers, eyes closed, letting scent carry me elsewhere. To me, fragrance was never decorative—it was emotional. Transformative.
              </p>

              <p className="text-lg leading-relaxed">
                A trace of vanilla could return me to baking in my grandmother’s kitchen. A dark ribbon of oud felt like mystery and movement, like distant places calling me back. Over time, I realized my collection wasn’t just bottles on a vanity—it was a wardrobe of feelings. Each scent held a moment. A version of myself.
              </p>

              <p className="text-lg leading-relaxed font-medium text-foreground">
                But the first fragrance that ever truly stopped me didn’t come from a bottle. It came from Jerusalem.
              </p>

              <p className="text-lg leading-relaxed">
                As a child, I wandered through cobblestone markets where the air itself felt alive—oud curling through sunlit alleys, bukhoor smoke rising from doorways, spices warming in the heat. It was overwhelming and grounding all at once. Sacred and human. That moment planted something deep within me, long before I had the language to name it.
              </p>

              <p className="text-lg leading-relaxed italic">
                That memory became my north star.
              </p>

              <h2 className="text-3xl font-bold text-foreground mt-12">The Birth of Anbaréa</h2>

              <p className="text-lg leading-relaxed">
                As my love for fragrance deepened, so did my frustration. The scents that moved me most—the rich, complex, long-lasting ones—were often locked behind impossible price tags. Luxury felt distant. Precious. Untouchable.
              </p>

              <p className="text-lg leading-relaxed">
                I wanted fragrance to be lived in.
              </p>

              <p className="text-lg leading-relaxed">
                So I began experimenting at home—blending oils, learning the chemistry of notes, understanding how base notes anchor a scent while top notes let it breathe and evolve. I didn’t want to copy perfumes. I wanted to capture their soul.
              </p>

              <p className="text-lg leading-relaxed">
                Anbaréa was born from a simple but powerful desire: to create fragrances that feel deep, grounded, and expensive—without being exclusive. Scents you can spray generously, layer intuitively, and wear as part of your everyday ritual.
              </p>

              <p className="text-lg leading-relaxed font-medium text-foreground">
                Fragrance shouldn’t whisper restraint. It should invite expression.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-12">
                <div className="bg-accent/10 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">The Power of Layering</h3>
                  <p>
                    Fragrance is personal. It always has been. Like Mona Kattan, I believe scent is meant to be explored, mixed, and made your own. There are no rules—only instinct. Layer <em>Vanilla Cherry Glow</em> over <em>Cognac Haze</em> for warmth and indulgence. Add <em>Ashen Wood</em> to introduce a smoky, steady depth.
                  </p>
                  <p className="mt-4 italic">
                    Your fragrance should move with you. Shift with your mood. Tell your story, not someone else’s.
                  </p>
                </div>
                <div className="bg-accent/10 p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-foreground mb-4">Why "Anbaréa"?</h3>
                  <p>
                    The name Anbaréa is rooted in amber—the golden heart of perfumery. Amber is warmth, depth, and glow. It lingers. It grounds. It holds memory the way skin holds heat.
                  </p>
                  <p className="mt-4">
                    Anbaréa represents that quiet radiance—the confidence that doesn’t announce itself, but is felt. A return to something familiar. A glow that stays with you long after the moment passes.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-foreground mt-12">My Promise to You</h2>

              <p className="text-lg leading-relaxed">
                Anbaréa is my love letter to fragrance.
              </p>

              <p className="text-lg leading-relaxed">
                Every bottle is an invitation to explore, to play, and to feel deeply connected to what you wear. We are honest about who we are: an independent fragrance house creating inspired interpretations of the world’s most beautiful scent profiles.
              </p>

              <p className="text-lg leading-relaxed">
                We strip away celebrity endorsements and crystal excess to focus on what truly matters—the juice. The quality. The longevity. The feeling.
              </p>

              <p className="text-lg leading-relaxed font-medium text-foreground">
                Fragrance should be expressive, accessible, and intentional.
              </p>

              <div className="mt-12 p-6 bg-primary/5 border-l-4 border-primary rounded">
                <h3 className="text-lg font-semibold mb-3 text-foreground">A Note on Authenticity</h3>
                <p className="text-sm leading-relaxed">
                  Anbaréa is an independent fragrance house. We are <strong>not affiliated with</strong> any designer brands referenced on our site. Names are used solely to help describe scent profiles and olfactory families. Our creations are original interpretations, crafted to stand on their own merit. <a href="/disclaimer" className="underline hover:text-foreground font-medium">Read our full disclaimer</a>.
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
