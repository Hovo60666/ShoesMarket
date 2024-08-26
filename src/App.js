import { useState } from 'react';
import './App.css';
import Cared from './Cared';
import Header from './Header';
import Produncts from './Produncts';

function App() {
  const [openCard, setOpenCard] = useState(false);
  const [cart,setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [total,setTotal] = useState(0);

  const adding = item => setCart([...cart, item]);
  const removeing = item => setCart([...cart.filter(elem => elem.id !== item.id)]);

  const stilesForContainer = {
    transform: openCard ? 'translateY(0)' : 'translateY(-100vw)',
    opacity:  openCard ? 1 : 0,
    visibility: openCard ? 'visible' : 'hidden',
    transition: '.8s'
  }

  const stilesForCort = {
    transform: openCard ? 'translateY(0)' : 'translateY(-100vw)',
    opacity:  openCard ? 1 : 0,
    visibility: openCard ? 'visible' : 'hidden',
    transition: '.8s'
  }

  return (
    <div className="App">
      <Header setOpenCard={setOpenCard}/>
     <Produncts adding={adding} setCount={setCount} cart={cart} total={total} setTotal={setTotal} setOpenCard={setOpenCard}/>
     <Cared setOpenCard={setOpenCard} stilesForContainer={stilesForContainer} stilesForCort={stilesForCort} cart={cart} setCount={setCount} total={total} setTotal={setTotal} removeing={removeing} />
    </div>
  );
}

export default App;
