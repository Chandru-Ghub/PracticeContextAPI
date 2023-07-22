import React from 'react'
import { useState,useEffect } from 'react';
import SingleProduct from './SingleProduct';
const Home = () => {
    useEffect(()=>{
        fetch('/mocks.json').then((a)=>a.json()).then((result)=>setList(result.products));
  },[])
  const[list,setList] = useState([])

    
  return (
    <div className='ot'>        
    <div className='container'>
        {
          list.map((prod)=>(

            <SingleProduct
                prod = {prod}
                // cart = {cart}
                // setCart = {setCart}
            />
           
          ))
        }
        </div>
        </div>
        )
}

export default Home