import React, { useEffect, useState } from 'react'
import Item from './Item'
import Cart from './Cart'
import Form from './hook-form/Form'
import { Usememohook } from './usememo'
import { WithCallbackExample } from './useCallbackhook'
import Userefhook from './Userefhook'
import Progressbar from './progress.bar'

const App = () => {
const [value, setValue] = useState(0)

useEffect(()=>{
setInterval(()=>{
setValue((val)=> val+1)
},100)
},[])
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
      {/* <Userefhook/> */}
      {/* <div className='app'>
      <Progressbar value={value}/>
      </div> */}
    </div>
  )
}

export default App