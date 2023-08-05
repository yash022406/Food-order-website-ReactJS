import React from 'react';
import Head from './Layout/Head'
import { Fragment, useState } from 'react';
import Meals from './Meals/Meals'
import Cart from './Cart/Cart'
import CartProvider from '../Store/CartProvider'

function HomePage() {

    const [cartShown, setcartShown] = useState(false)
    const cartHandler = () => {
        setcartShown(true)
    }
    const carthideHandler = () => {
    setcartShown(false)
    }


  return (

    <CartProvider>
      {cartShown && <Cart onClose={carthideHandler} />}
      <Head onShowCart={cartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>

  )
}

export default HomePage