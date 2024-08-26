import { useState } from "react";

export default function Productsfilter( { actualindex, setCount, filtereing,  filtered, setActualindex,adding,cart,total,setTotal,setOpenCard }) {
    const category_names = [ 'All', 'Man', 'Women', 'Children']
    const stars = [1,1,1,1,1];
    const [addc, setAddC] = useState(false);
  return (
    <div className='Produccts_filter-Container'>
      <h2>filter Categories</h2>
      {category_names.map(name => {
        return <button onClick={() => {
          filtereing(name);
          setActualindex(0);
        }}>{name}</button>
      })}
      <div className="products_wiew_container">
        <p>Choose Products</p>
        <div className='Product_menu_item'>
            <img src={ filtered[actualindex].picture} alt="" />
            <marquee style={ {textAlign: 'left'}}>{ filtered[actualindex].name}</marquee>
            <p style={ {textAlign: 'left'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione id</p>
            <div className="stars">
            {stars.map((s, i) => {
                return i >= 0 && i <  filtered[actualindex].star ? <div className='star' style={{background : 'orange'}}></div> : <div className='star' style={{background : '#202020'}}></div>
            })}
            </div>
            <div className="counter">
              <button onClick={() => {
                if ( filtered[actualindex].quanity > 1) {
                  setCount(filtered[actualindex].quanity -= 1);
                  setTotal(total - filtered[actualindex].price);
                }
              }}>-</button>
              <span>{ filtered[actualindex].quanity}</span>
              <button onClick={() => {
                setCount(filtered[actualindex].quanity += 1);
                setTotal(total + filtered[actualindex].price);
              }}>+</button>
            </div>
            <h4 style={ {textAlign: 'left'}}>{ filtered[actualindex].price}.00֏</h4>
            <button onClick={() => {
              if(!cart.includes(filtered[actualindex])) {
                adding(filtered[actualindex]);
                setTotal(total + filtered[actualindex].price);
                setAddC(true);
                setTimeout(() => {
                  setAddC(false);
                  window.scrollTo({top : 0, behavior : 'smooth'});
                  setOpenCard(true);
                }, 2000);
              } 
            }}>Add to card
            <div className="button_overlay" style={{ animation : addc ? 'addcart 2s linear 1' : 'none'}}></div>
            </button>
        </div>
      </div>
    </div>
  )
}
