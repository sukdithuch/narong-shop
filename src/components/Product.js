import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;
  return (
    <div className="row col-sm-3">
      <div>
        <img className="small" src={product.img_url} alt={product.name} />
        <h3>{product.name}</h3>
        <div>ราคา: {product.price} บาท</div>
        <div>
          <Link
            to={{
              pathname: `/product/${product.id}`,
              state: { products:product },
            }}
          >
            <button>รายละเอียดสินค้า</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Product;
