import ProductCard from '@/components/product-card';
import { getAllProductsQuery } from '@/modules/queries';

const Home = async () => {
  const products = await getAllProductsQuery();
  return (
    <div className="flex items-center justify-center">
      <div className="mx-1 my-6 grid max-w-screen-lg grid-cols-2 gap-2 md:mx-auto md:w-4/5 md:grid-cols-3 md:gap-4 lg:mx-auto lg:w-3/5 lg:grid-cols-3 lg:gap-6">
        {products.map((product) => {
          const { id } = product;
          return <ProductCard key={id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
