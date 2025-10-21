import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export default function Disclaimer() {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Legal Disclaimer | Anbaréa Parfums"
        description="Important legal information about Anbaréa Parfums and our inspired fragrances."
      />
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Legal Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none space-y-6">
            <section className="p-6 bg-accent/20 border-l-4 border-primary rounded">
              <h2 className="text-2xl font-bold mb-4">Important Notice</h2>
              <p className="text-muted-foreground">
                Anbaréa Parfums is an <strong>independent fragrance company</strong> and is <strong>not affiliated with, 
                endorsed by, or connected to</strong> any of the designer brands, perfume houses, or trademark owners 
                mentioned on this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Trademark Disclaimer</h2>
              <p>
                All brand names, trademarks, and registered trademarks mentioned on this website (including but not 
                limited to Chanel, Dior, Creed, Maison Francis Kurkdjian, Le Labo, Parfums de Marly, Ex Nihilo, 
                Baccarat, Kayali, Montale, Lattafa, and By Kilian) are the property of their respective owners.
              </p>
              <p>
                These names are used solely for <strong>comparison and descriptive purposes</strong> to help customers 
                understand the scent profile and inspiration behind our fragrances. The use of these names does not 
                imply any affiliation, sponsorship, or endorsement by the trademark owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Fragrances</h2>
              <p>
                Anbaréa Parfums creates <strong>original fragrance interpretations</strong> inspired by popular scents. 
                Our products are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Independently formulated and manufactured</li>
                <li>Not counterfeits, copies, or imitations</li>
                <li>Not original designer fragrances</li>
                <li>Created with our own unique blends and concentrations</li>
                <li>Sold under the Anbaréa Parfums brand name</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Scent Descriptions</h2>
              <p>
                When we state that a fragrance is "inspired by" or reference another perfume, we are describing the 
                <strong> scent character and style</strong> that our fragrance evokes. This is a common industry practice 
                to help customers understand what to expect from the fragrance profile.
              </p>
              <p>
                Our fragrances may share similar notes or olfactory families with the referenced scents, but they are 
                <strong> distinct products</strong> created by Anbaréa Parfums.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">No Affiliation</h2>
              <p>
                Anbaréa Parfums is not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Affiliated with any designer brand or perfume house</li>
                <li>Authorized to sell, distribute, or represent any designer fragrances</li>
                <li>Claiming our products are manufactured by or endorsed by any designer brand</li>
                <li>Using original designer formulas or proprietary ingredients</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Quality & Authenticity</h2>
              <p>
                All Anbaréa Parfums products are:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>100% authentic Anbaréa Parfums creations</li>
                <li>Made with high-quality fragrance oils and ingredients</li>
                <li>Ethically sourced and responsibly produced</li>
                <li>Clearly labeled with our brand name and product information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Customer Understanding</h2>
              <p>
                By purchasing from Anbaréa Parfums, customers acknowledge and understand that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>They are purchasing Anbaréa Parfums branded products</li>
                <li>These are not original designer fragrances</li>
                <li>Scent profiles may vary from the referenced inspirations</li>
                <li>All sales are final for fragrance products due to hygiene regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Fair Use & Commentary</h2>
              <p>
                Our use of brand names and fragrance references falls under <strong>fair use</strong> for the purposes of:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comparative advertising</li>
                <li>Descriptive commentary</li>
                <li>Consumer education</li>
                <li>Nominative fair use (identifying products by their common names)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact for Concerns</h2>
              <p>
                If you are a trademark owner and have concerns about how your brand is referenced on our website, 
                please contact us at <a href="mailto:legal@anbarea-parfums.com" className="text-primary hover:underline">
                legal@anbarea-parfums.com</a>. We are committed to respecting intellectual property rights and will 
                address any legitimate concerns promptly.
              </p>
            </section>

            <section className="p-6 bg-muted rounded">
              <p className="text-sm text-muted-foreground italic">
                <strong>Last Updated:</strong> October 21, 2025
              </p>
              <p className="text-sm text-muted-foreground italic mt-2">
                This disclaimer is subject to change without notice. Please review periodically for updates.
              </p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

