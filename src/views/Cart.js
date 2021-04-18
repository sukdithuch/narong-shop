import React from "react";

function Cart(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.07;
  const shippingPrice = itemsPrice > 100 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  return (
    <div className="Cart container-xxl">
      <h1>ตะกร้าสินค้า</h1>
      <div>
        {cartItems.length === 0 && <div>ยังไม่มีสินค้า</div>}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>{" "}
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price.toFixed(2)} บาท
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">ราคาสินค้า</div>
              <div className="col-1 text-right">{itemsPrice.toFixed(2)} บาท</div>
            </div>
            <div className="row">
              <div className="col-2">ภาษีมูลค่าเพิ่ม7%</div>
              <div className="col-1 text-right">{taxPrice.toFixed(2)} บาท</div>
            </div>
            <div className="row">
              <div className="col-2">ค่าขนส่ง</div>
              <div className="col-1 text-right">
                {shippingPrice.toFixed(2)} บาท
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>รวมทั้งสิ้น</strong>
              </div>
              <div className="col-1 text-right">
                <strong>{totalPrice.toFixed(2)} บาท</strong>
              </div>
            </div>
            <hr />
            <div className="btn p-0">
              <button 
               onClick={() => alert("ต้องการสั่งซื้อใช่หรือไม่")}>
                สั่งซื้อ
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
