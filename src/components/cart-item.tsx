'use client';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import PlusIcon from '@/components/svg/plus-icon';
import MinusIcon from '@/components/svg/minus-icon';
import DeleteIcon from '@/components/svg/delete-icon';
import {
  addProductToCartAction,
  deleteProductFromCartAction,
  removeProductFromCartAction,
} from '@/modules/actions';

const CartItem = (props: any) => {
  const {
    cartItem: { id: productId, name, price, image, quantity },
  } = props;

  const onclickPlus = async () => {
    await addProductToCartAction(productId);
  };

  const onclickMinus = async () => {
    await removeProductFromCartAction(productId);
  };

  const onclickDelete = async () => {
    await deleteProductFromCartAction(productId);
  };

  return (
    <div className="mb-2 h-[110px] overflow-hidden rounded border">
      <div className="flex">
        <div className="relative h-[110px] w-[110px] overflow-hidden">
          <Image
            fill
            alt={name}
            src={image}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex w-full flex-col justify-evenly px-3 py-1">
          <div className="flex w-full justify-between">
            <p className="line-clamp-1 w-[90%] text-sm font-medium">{name}</p>
            <Button onClick={onclickDelete}>
              <DeleteIcon />
            </Button>
          </div>
          <p className="text-sm text-green-600">{price}</p>
          <div className="flex items-center gap-3 text-sm">
            <Button
              onClick={onclickMinus}
              className="flex h-6 w-6 items-center justify-center rounded bg-gray-100"
            >
              <MinusIcon />
            </Button>
            <span>{quantity}</span>
            <Button
              onClick={onclickPlus}
              className="flex h-6 w-6 items-center justify-center rounded bg-gray-100"
            >
              <PlusIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
