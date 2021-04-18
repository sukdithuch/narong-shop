import React from "react";
import Product from "./Product";

function ProductShow(props) {
    const { datas } = props;
  return (
    <div className="ProductShow">
      <div className="row row-col-sm-3">
        {datas.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div>
      {datas.length === 0 && <span>ไม่พบสินค้า</span>}
      </div>
    </div>
  );
}

export default ProductShow;
