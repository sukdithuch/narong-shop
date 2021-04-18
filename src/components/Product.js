import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const { product } = props;
  return (
    <div className="product col">
      <div>
        <div className="card">
          <img className="small card-img-top" src={product.img_url} alt={product.name} />
          <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">ราคา: {product.price} บาท</p>
          <div className="btn-detail">
            <Link
              to={{
                pathname: `/product/${product.id}`,
                state: { products: product },
              }}
            >
              <button className="btn btn-sm btn-secondary">รายละเอียดสินค้า</button>
            </Link>
          </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Product;
