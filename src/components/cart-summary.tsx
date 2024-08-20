'use client';

const CartSummary = (props: any) => {
  const { cartItems } = props;
  const { numberOfItemsInCart, cartAmount } = cartItems.reduce(
    (acc: any, { price, quantity }: any) => {
      const { cartAmount, numberOfItemsInCart } = acc;
      return {
        numberOfItemsInCart: numberOfItemsInCart + quantity,
        cartAmount: cartAmount + price * quantity,
      };
    },
    { numberOfItemsInCart: 0, cartAmount: 0 },
  );

  return (
    <div className="mt-3 w-full space-y-2 rounded border bg-gray-50 p-3">
      <h3 className="text-md border-b font-medium">Cart Summary</h3>
      <div className="space-y-2 text-sm">
        <div>
          <p>
            Price ({numberOfItemsInCart} items): ₹ {cartAmount.toFixed(2)}
          </p>
          <p>Discount: {100}%</p>
        </div>
        <div className="pt-2">
          <strong className="text-md">Grand Total: ₹</strong>
          <button className="mt-2 w-full rounded bg-black px-4 py-2 text-white">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
