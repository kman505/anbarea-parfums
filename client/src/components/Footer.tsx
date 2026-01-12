export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Anbaréa</h3>
            <p className="text-sm text-muted-foreground">
              Inspired scents. Unforgettable experiences.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Shop</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/shop?category=signature" className="hover:text-foreground transition-colors">Signature Collection</a></li>
              <li><a href="/shop?category=roller" className="hover:text-foreground transition-colors">Oil Rollers</a></li>
              <li><a href="/shop?category=vault" className="hover:text-foreground transition-colors">The Vault</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/disclaimer" className="hover:text-foreground transition-colors">Legal Disclaimer</a></li>
              <li><a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground space-y-2">
          <p className="text-xs">
            Anbaréa is an independent fragrance company. We are not affiliated with any designer brands. 
            All trademarks are property of their respective owners. <a href="/disclaimer" className="underline hover:text-foreground">Read full disclaimer</a>.
          </p>
          <p>© {currentYear} Anbaréa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

