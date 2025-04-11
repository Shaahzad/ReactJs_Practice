import React from 'react'
import Item from './Item'
import Cart from './Cart'

const App = () => {
  return (
    <div>
      <Item name="WordPress" price="25000"/>
      <Item name="Php" price="25000"/>
      <Item name="Laravel" price="25000"/>
      <Cart/>
    </div>
  )
}

export default App