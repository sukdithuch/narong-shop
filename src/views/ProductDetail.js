import React from "react";
import { useLocation, Link } from "react-router-dom";

function ProductDetail(props) {
    const { onAdd } = props;
    const { state } = useLocation();


    return (
        <div>
        <h1>product</h1>
        <img className="small" src={state.products.img_url} alt={state.products.name}/>
        <h3> {state.products.name} </h3>
        <h3> {state.products.detail} </h3>
        <div>
        <Link
            to={{
              pathname: "/cart",
            }}
          >
            <button onClick={() => onAdd(state.products)}>เพิ่มลงตะกร้าสินค้า</button>
          </Link>
          </div>


        </div>
    );

}

export default ProductDetail;

