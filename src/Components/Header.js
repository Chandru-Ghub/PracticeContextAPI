import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { Kart } from './Context';
const Header = () => {
    const {cart,setCart} = useContext(Kart);
  return (
    <div className='bar' style={{color:'white'}}>
        context API
        <ul className='nav'>
            <li>
                <Link to= '/' className='j'>Home</Link>
            </li>
            <li>
                <Link to = '/cart'  className='j'>Cart{cart.length}</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header