import React, { Fragment } from 'react'
import classes from './header.module.css'
import mealsimg from '../assets/meals.jpg'
import CartB from './CartB'
const Head = (props) => {
  return (
    <Fragment> 
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <CartB onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimg} alt="" />
        </div>
    </Fragment>
  )
}

export default Head



