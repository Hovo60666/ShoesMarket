
export default function Productsmenu({ setActualindex, filtered  }) {
    const stars = [1,1,1,1,1]
  return (
    <div className='Products_menu_container'>
      {filtered.map((item, index) => {
        return <div className='Product_menu_item'>
            <img src={item.picture} alt="" />
            <h2>{item.name}</h2>
            <p style={{textAlign: 'left'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione id</p>
            <div className="stars">
            {stars.map((s, i) => {
                return i >= 0 && i < item.star ? <div className='star' style={{background : 'orange'}}></div> : <div className='star' style={{background : '#202020'}}></div>
            })}
            </div>
            <h4>{item.price}.00֏</h4>
            <button onClick={() => {
              setActualindex(index)
            }}>View more</button>

        </div>
      })}
    </div>
  )
}
