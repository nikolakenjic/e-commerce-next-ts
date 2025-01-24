import { Button } from '@/components/ui/button';
import { getAllProducts } from '@/sanity/lib/products/getAllProducts';

export default async function Home() {
  const products = await getAllProducts();

  return (
    <div>
      <h1>E-commerce</h1>
      <Button>Click</Button>
    </div>
  );
}
