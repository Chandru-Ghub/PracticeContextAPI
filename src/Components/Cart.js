import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Kart } from './Context';
import SingleProduct from './SingleProduct';
const Cart = () => {
    const {cart,setCart} = useContext(Kart);
    const [total,setTotal] = useState(0)
    useEffect(()=>{
                setTotal(cart.reduce((a,b)=>Number(a+b.price),0))
    },[cart])
  return (
    <div>
        <span>MY Cart</span>
        <p>
            Total:{total}
        </p>
       <div className="container">
        {cart.map((prod)=>(
            <SingleProduct
                    prod={prod}
            />
        ))}
       </div>

    </div>
  )
}

export default Cart