'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { addProductToCartAction } from '@/modules/actions';

const ProductCard = (props: any) => {
  const { id, name, image, price, description } = props;

  const onClickAddToCart = async () => {
    await addProductToCartAction(id);
  };
  const isAddedToCart = true;

  return (
    <div className="group relative min-h-[350px] w-full max-w-[350px] cursor-pointer overflow-hidden rounded transition-all hover:shadow-lg md:min-h-[380px] md:max-w-[380px]">
      <div className="relative h-[260px] w-full md:h-[280px] md:max-h-[300px]">
        <Image
          fill
          alt={name}
          src={image}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 transform bg-white px-2 pt-3 text-sm transition-transform group-hover:translate-y-[-15px]">
        <p className="line-clamp-1">{name}</p>

        <div className="flex flex-col justify-between gap-2 py-3 md:flex-row md:items-center md:gap-0">
          <p className="text-sm text-green-600">{price}</p>

          {isAddedToCart ? (
            <Button
              onClick={onClickAddToCart}
              className="w-full rounded bg-black px-4 py-1 text-white md:w-fit"
            >
              {'Add to cart'}
            </Button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
