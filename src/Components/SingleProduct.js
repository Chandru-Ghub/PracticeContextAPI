import React, { useState } from 'react'
import { useContext } from 'react';
import { Kart } from './Context';
const SingleProduct = ({prod}) => {
    const {cart,setCart} = useContext(Kart);
    // const[cart,setCart] = useState([])
    return (
        <div className="ot">
    <ul className='card'>
             
    <li>
       <img className='phone' src={prod.thumbnail} alt="ecommerce" />
    </li>  
    <li className='title'>{prod.title}</li>
    <li className='price'>{prod.price}</li>
  

    {cart.includes(prod)?(
           <button className='removeCart' onClick={()=>{
              setCart(cart.filter((a)=>a.id!==prod.id))
            }}>Remove cart</button> 
    ):(
      <button className='addCart' onClick={()=>{
          setCart([...cart,prod])
        }}>Add Cart</button>  
      
    )}
  
    
  
</ul>
</div>

)
}

export default SingleProduct