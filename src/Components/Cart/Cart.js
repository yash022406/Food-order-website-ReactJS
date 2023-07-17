// import { Modal } from 'react-bootstrap'
import classes from './Cart.module.css'
import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../../Store/CartContext'
import CartItem from './CartItem'
import Checkout from './Checkout'
import { useSearchParams } from 'react-router-dom'
const Cart = (props) => {

  const [isCheckout, setisCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setdidSubmit] = useState(false)

  const cartctx=useContext(CartContext)
  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`
  const hasItems = cartctx.items.length > 0

  const cartItemRemovehandler = id => {
    cartctx.removeItem(id)
  }

  const cartItemAddHandler = item => {
cartctx.addItem(item)
  }
  const orderHandler =() => {
    setisCheckout(true)
  }

  const cartitems = (
    <ul className={classes['cart-items']}>
      {cartctx.items.map((item) => (
      <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemovehandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} />
      ))}
    </ul>
  )

  const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler} >Order</button>}
        </div>
  )

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true)
    const response = await fetch('https://food-ordering-website-http-default-rtdb.firebaseio.com/orders.json',{
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItems: cartctx.items
      })
    })
    setIsSubmitting(false)
    setdidSubmit(true)
    cartctx.clearCart()
  }

  const cartModalContent = (<React.Fragment>
    {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
        {!isCheckout && modalActions}
  </React.Fragment>
  )

  const isSubmittingModal = (
    <p>Sending order data...</p>
  )
  const didSubmitModalContent = (
    <React.Fragment>
  <p>Successfully submitted the order!</p>
  <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>

        </div>
  </React.Fragment>
  )

  return (
    <Modal onClose={props.onClose}>
        {!isSubmitting &&!didSubmit && cartModalContent}
        {isSubmitting && isSubmittingModal}
        {!isSubmitting && didSubmit && didSubmitModalContent}
        
    </Modal>
  )
}

export default Cart