import Head from './Components/Layout/Head';
import { Fragment, useState } from 'react';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import CartProvider from '../src/Store/CartProvider'
function App() {

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
  );
}

export default App;
