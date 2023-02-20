import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import ProductContext from "../ProductContext";

const CreateButtons = (props) => {
  const [product, setProduct] = useContext(ProductContext);
  const [showModal, setShowModal] = useState(false);
  const cost = props.cost;
  const clearArray = () => {
    let arr = [0];
    product.map(() => arr.push(0));
    setProduct(arr);
  };
  return (
    <div className="cartButtons">
      {cost ? <div className="subtotal">Subtotal: ${cost}</div> : null}
      <Link to="/">
        <button className="continueShoppingBtn">Continue shopping</button>
      </Link>
      {cost ? (
        <button onClick={() => setShowModal(true)}>Check Out</button>
      ) : (
        <div> Your Cart is Empty </div>
      )}
      {showModal ? (
        <Modal>
          {" "}
          <div className="check">
            <div>Thank You ❤️</div>
            <div>Checkout: ${cost}</div>
            <button onClick={() => clearArray()}>
              <Link to="/">Return to Shop</Link>
            </button>
            <div></div>
          </div>{" "}
        </Modal>
      ) : null}
    </div>
  );
};

export default CreateButtons;
