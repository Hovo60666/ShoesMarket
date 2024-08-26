import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'

export default function Header({setOpenCard}) {
  return (
    <header>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Servaise</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Collection</a></li>
            <li><a href="#">Sells</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <BiShoppingBag  onClick={() => setOpenCard(true)}/>
    </header>
  )
}
