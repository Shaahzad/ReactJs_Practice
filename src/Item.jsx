import React, { useContext, useEffect } from 'react'
import { CartContext } from './Context/Cartcontext'



const Item = (props) => {
  const cart = useContext(CartContext)
  const HandleAddItem = () => {
   cart.setItems([
    ...cart.items,
    {
      name: props.name,
      price: props.price,
    }
   ])
  }

  return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}
    >
        <h1 style={{marginBottom: 0}}>
          {props.name}</h1>
        <p>{props.price}</p>
        <button onClick={HandleAddItem}>Add To Cart</button>
    </div>
  )
}

export default Item