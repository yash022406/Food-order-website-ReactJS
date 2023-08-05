import React, { Fragment } from 'react'
import classes from './header.module.css'
import mealsimg from '../assets/meals.jpg'
import CartB from './CartB'
import { UserAuth } from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
const Head = (props) => {

  const {user,logout} = UserAuth();
    const navigate = useNavigate();
    const handleLogout = async () => {
        try{
        await logout()
        navigate('/');
        console.log('You are logged out.')
        }catch(e){
        console.log(e)
        }
    }


  return (
    <Fragment> 
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <div className={classes.wrapper}>
            <CartB onClick={props.onShowCart} />
            <button className='logout' onClick={handleLogout}>Logout</button>
            </div>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimg} alt="" />
        </div>
    </Fragment>
  )
}

export default Head



