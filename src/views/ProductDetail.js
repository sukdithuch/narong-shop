import React from "react";
import { useLocation, Link } from "react-router-dom";

function ProductDetail(props) {
  const { onAdd } = props;
  const { state } = useLocation();

  return (
    <div className="ProductDetail container-xxl">
      <div className="ProductDetail-side">
        <img
          className="img-detail"
          src={state.products.img_url}
          alt={state.products.name}
        />
      </div>
      <div className="ProductDetail-main">
        <h1> {state.products.name} </h1>
        <h3> {state.products.detail} </h3>
        <div className="btn-cart">
          <Link
            to={{
              pathname: "/cart",
            }}
          >
            <button onClick={() => onAdd(state.products)}>
              เพิ่มลงตะกร้าสินค้า
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
