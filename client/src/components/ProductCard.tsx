import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/products";
import { Link } from "wouter";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = Math.min(...product.prices.map(p => p.price));
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div 
        className="aspect-square overflow-hidden"
        style={{ background: product.image }}
      />
      <CardHeader>
        <CardTitle className="text-xl">{product.name}</CardTitle>
        {product.inspiredBy && (
          <CardDescription className="italic">
            Inspired by {product.inspiredBy}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 space-y-1">
          {product.prices.map((price, idx) => (
            <div key={idx} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{price.size}</span>
              <span className="font-semibold">${price.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/product/${product.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

