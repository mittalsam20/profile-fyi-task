import CartItem from '@/components/cart-item';
import CouponModal from '@/components/coupon-modal';
import CartSummary from '@/components/cart-summary';
import { getUserCartItemsQuery } from '@/modules/queries';

const CartList = ({ cartItems }: any) => {
  return cartItems.map((cartItem: any) => {
    const { id } = cartItem;
    return <CartItem key={id} cartItem={cartItem} />;
  });
};

const Cart = async () => {
  const cartItems = await getUserCartItemsQuery();
  const numberOfTypesOfProductInCart = cartItems.length;

  return (
    <div className="flex w-full flex-col items-center">
      <div className="w-[95%] py-4 md:w-[1100px]">
        <p className="text-base">
          <span className="font-semibold">{`${numberOfTypesOfProductInCart} items`}</span>
          {'in your cart'}
        </p>
        <div className="flex flex-col gap-3 md:flex-row">
          <div className="flex-[3]">
            <CartList cartItems={cartItems} />
          </div>
          <CouponModal />
          <div className="flex-1">
            <CartSummary cartItems={cartItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
