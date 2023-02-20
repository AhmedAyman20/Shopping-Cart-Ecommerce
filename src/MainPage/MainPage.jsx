import "./MainPage.css";
// import { PRODUCTS } from "../Data/products";
import { useContext, useState } from "react";
import ProductContext from "../ProductContext";
import FetchProduct from "../FetchingData/FetchProduct";
import { useQuery } from "@tanstack/react-query";

const MainPage = () => {
  const result = useQuery(["products"], FetchProduct);
  const PRODUCTS = result.data;
  const [product, setProduct] = useContext(ProductContext);
  const [lol, setLol] = useState(0);
  let arr = product;
  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  return (
    <div className="mainPage">
      <div className="title">PedroTech Shop</div>
      <div className="container">
        {PRODUCTS.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.productImage} alt={product.productName} />
            <div>{product.productName}</div>
            <div>${product.price}</div>
            <button
              onClick={() => {
                arr[product.id] += 1;
                setLol(lol + 1);
                setProduct(arr);
              }}
            >
              Add To Cart
              {arr[product.id] ? (
                <span className="span">({arr[product.id]})</span>
              ) : null}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
