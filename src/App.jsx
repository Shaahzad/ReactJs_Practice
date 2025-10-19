import React from 'react'
import Item from './Item'
import Cart from './Cart'
import Form from './hook-form/Form'
import { Usememohook } from './usememo'
import { WithCallbackExample } from './useCallbackhook'
import Userefhook from './Userefhook'

const App = () => {
  return (
    <div>
      {/* <Item name="WordPress" price="25000"/>
      <Item name="Php" price="25000"/>
      <Item name="Laravel" price="25000"/>
      <Cart/> */}
      {/* <Form/> */}
      {/* <Usememohook/> */}
      {/* <WithCallbackExample/> */}
      {/* <UseRefhook/> */}
      <Userefhook/>
    </div>
  )
}

export default App