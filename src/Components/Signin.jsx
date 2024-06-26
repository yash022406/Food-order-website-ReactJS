import { React, useEffect, useState } from 'react';
import GoogleButton from 'react-google-button';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from './Context/AuthContext';   
import './signin.css'

const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signIn } = UserAuth();
  const { googleSignIn, user } = UserAuth();
  const emailValidation = (val) => {
    if (val.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g)) {
      console.log("true");
    } else {
      console.log("false");
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();

    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password)
      navigate('/account')
    } catch (e) {
      setError(e)
      console.log(e)
    }
  }

  return (
    <div className='body' >
      <div className='cover signincover'>
        <div align='center'>
          <h1>login</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className='text'>
            
            <input onChange={(e) => setEmail(e.target.value)} placeholder='Email id' type="email" required />
            
          </div>
          <div className='text'>
            <input onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="Password" required />
          </div>
          <button className='si'>Sign In</button>
          <p className='lol'>Don't have an account? <Link to='/signup'> Sign Up.</Link></p>
          <div className='googleButton' align='center'>
            <GoogleButton onClick={handleGoogleSignIn} />
          </div>
        </form>
      </div>
    </div>
  )
}


export default Signin