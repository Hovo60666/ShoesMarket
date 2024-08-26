import React, { useState } from 'react'
import Productsfilter from './Productsfilter'
import Productsmenu from './Productsmenu'
import Productsadvert from './Productsadvert'
import { list } from './list'

export default function Produncts({ adding,setCount,cart,total,setTotal,setOpenCard }) {
  const [actualindex, setActualindex] = useState(0);
  const [filtered, setFiltered] = useState(list);

  const filtereing = item => {
    item == 'All' ? setFiltered(list) : setFiltered(list.filter(lis => lis.cadegory.toLowerCase() == item.toLowerCase()));
    window.scrollTo({ top : 0, behavior : 'smooth' });
  }

  return (
    <div className='Products_container'>
      <Productsfilter setActualindex={setActualindex} actualindex={actualindex} setCount={setCount} filtereing={filtereing} filtered={filtered} adding={adding} cart={cart} total={total} setTotal={setTotal} setOpenCard={setOpenCard} />
      <Productsmenu filtered={filtered} setActualindex={setActualindex} />
      <Productsadvert />
    </div>
  )
}