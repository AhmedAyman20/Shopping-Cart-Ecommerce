import "./CartPage.css";
import { useContext, useEffect, useMemo, useState } from "react";
import ProductContext from "../ProductContext";
// import { PRODUCTS } from "../Data/products";
import CreateButtons from "./CreateButtons";
import debounce from "lodash.debounce";
import FetchProduct from "../FetchingData/FetchProduct";
import { useQuery } from "@tanstack/react-query";

const ProductInCart = () => {
  const result = useQuery(["products"], FetchProduct);
  const PRODUCTS = result.data;
  const [product, setProduct] = useContext(ProductContext);
  let arr = product;
  const [, setRenderComp] = useState(0);
  let cost = 0;
  let x = 1;
  console.log(PRODUCTS.length);

  for (let i = 0; i < PRODUCTS.length; ++i) {
    if (product[i + 1]) cost += product[i + 1] * PRODUCTS[i].price;
  }
  cost = cost.toFixed(2);
  const handleChange = () => {
    setRenderComp((x += 1));
  };
  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  if (result.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }

  return (
    <div className="productsInCart">
      {PRODUCTS.map((item) =>
        product[item.id] ? (
          <div className="products" key={item.id}>
            <img src={item.productImage} alt={item.productName} />
            <div className="productInfo">
              <div className="productName">{item.productName}</div>
              <div>Price: ${item.price}</div>
              <div>
                <button
                  onClick={() => {
                    arr[item.id] -= 1;
                    debouncedResults();
                    setProduct(arr);
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  id="productQuantity"
                  name="productQuantity"
                  value={product[item.id]}
                  onChange={(e) => {
                    arr[item.id] = +e.target.value;
                    debouncedResults();
                    setProduct(arr);
                  }}
                />
                <button
                  onClick={() => {
                    arr[item.id] += 1;
                    debouncedResults();
                    setProduct(arr);
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ) : null
      )}
      <CreateButtons cost={cost} />
    </div>
  );
};

export default ProductInCart;
