import React, { useContext } from 'react'
import { CartContext } from './Context/Cartcontext'
const Cart = () => {
  const cart = useContext(CartContext)
  return (
     <div>
       {
         cart && cart.items.map((item, index) => {
           return (
             <div key={index} style={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               padding: 10,
               margin: 10,
               border: '1px solid black'
             }}>
               <h1 style={{marginBottom: 0}}>{item.name}</h1>
               <p>{item.price}</p>
               </div>
           )
         })
               
       }
     </div>
  )
}

export default Cart