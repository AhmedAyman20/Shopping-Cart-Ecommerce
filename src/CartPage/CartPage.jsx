import "./CartPage.css";
import ProductInCart from "./ProductsInCart";

const CartPage = () => {
  //throw new Error("ehy");
  return (
    <div className="cart">
      <div className="title">Your Cart Items</div>
      <ProductInCart />
    </div>
  );
};

export default CartPage;
