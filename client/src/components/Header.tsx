import { Link } from "wouter";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/">
          <a className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold tracking-tight">Anbaréa Parfums</span>
          </a>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/">
            <a className="transition-colors hover:text-foreground/80 text-foreground">
              Home
            </a>
          </Link>
          <Link href="/shop">
            <a className="transition-colors hover:text-foreground/80 text-foreground">
              Shop
            </a>
          </Link>
          <Link href="/about">
            <a className="transition-colors hover:text-foreground/80 text-foreground">
              About
            </a>
          </Link>
          <Link href="/contact">
            <a className="transition-colors hover:text-foreground/80 text-foreground">
              Contact
            </a>
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Shopping cart</span>
          </Button>
        </div>
      </div>
    </header>
  );
}

