import React from "react";
import { FaTimes, FaTrash } from "react-icons/fa";

export default function Cared({stilesForContainer,stilesForCort,setOpenCard,cart,setCount,total, setTotal,removeing})
{
  const stars = [0,0,0,0,0];
  return (
    <div
      className="Card_container"
      style={stilesForContainer}
      onClick={(e) => {
        if (e.target.className == "Card_container") {
          setOpenCard(false);
        }
      }}
    >
      <div className="card" style={stilesForCort}>
        <div className="cart_top">
          <h2>SHOP CART</h2>
          <FaTimes onClick={() => setOpenCard(false)} />
        </div>
        <p>Card Elements Count is 0</p>
        <div className="grand_total_container">
            <p>Grand Total is {total}.00֏</p>
            <button>Pay with Card</button>
        </div>
        {cart.map((cart_item) => {
          return (
            <div className="cart_content">
              <h2>{cart_item.name}</h2>
              <div className="stars">
            {stars.map((s, i) => {
                return i >= 0 && i <  cart_item.star ? <div className='star' style={{background : 'orange'}}></div> : <div className='star' style={{background : '#202020'}}></div>
            })}
            </div>
              <div className="cart_item">
                <img src={cart_item.picture} alt="" />
                <span>{cart_item.price}.00֏</span>
                <div className="counter">
                  <button
                    onClick={() => {
                      if (cart_item.quanity > 1) {
                        setCount((cart_item.quanity -= 1));
                        setTotal(total - cart_item.price);
                      }
                    }}
                  >
                    -
                  </button>
                  <span>{cart_item.quanity}</span>
                  <button
                    onClick={() => {
                      setCount((cart_item.quanity += 1));
                      setTotal(total + cart_item.price);
                    }}
                  >
                    +
                  </button>
                </div>
                <span>{cart_item.price * cart_item.quanity}.00֏</span>
                <FaTrash onClick={() => {
                    removeing(cart_item);
                    setTotal(total - cart_item.price * cart_item.quanity);
                    cart_item.quanity = 1;
                }}/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
