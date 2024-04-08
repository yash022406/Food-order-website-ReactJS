import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Signin from './Components/Signin'
import HomePage from './Components/HomePage';
import Signup from './Components/Signup'
import { AuthContextProvider } from './Components/Context/AuthContext';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <div className=''>

      <AuthContextProvider>

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={
          
          <ProtectedRoutes>
          <HomePage />
          </ProtectedRoutes>
        }>
            

        </Route>
      </Routes>
      </BrowserRouter>

      </AuthContextProvider>

    </div>
  );
}

export default App;
 