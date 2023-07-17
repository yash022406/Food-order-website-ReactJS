import React, { useContext, useEffect, useState } from 'react'
import CartI from '../Cart/CartI'
import classes from './cartButton.module.css'
import CartContext from '../../Store/CartContext'
function CartB(props) {
  
  const [btnIsHigh, setbtnIsHigh] = useState(false)
  const cartctx = useContext(CartContext)
  const {items} = cartctx
  const numberOfItems = items.reduce((curNumber, items)=>{
    return curNumber + items.amount
  },0)

  const btnClasses = `${classes.button} ${btnIsHigh? classes.bump:''}`
  
  useEffect (() => {
    if(items.length===0)return
    setbtnIsHigh(true)

    const timer = setTimeout(() => {
      setbtnIsHigh(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [items])
  return (
   <button className={btnClasses} onClick={props.onClick}>
        
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfItems}</span>
    </button>

  )
}

export default CartB