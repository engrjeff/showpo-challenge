import { getProducts } from "@/services/products";
import ProductDetail from "./components/ProductDetail";

async function HomePage() {
  const products = await getProducts();

  const currentProduct = products[0];

  return (
    <main className='max-w-6xl container py-8 px-4'>
      <ProductDetail product={currentProduct} />
    </main>
  );
}

export default HomePage;
