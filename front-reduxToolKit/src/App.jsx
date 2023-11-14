import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Error404 from './containers/errors/Error404'
import Home from './containers/Home'

import Signup from './containers/auth/Signup'
import Login from './containers/auth/Login'
import Activate from './containers/auth/Activate'
import { GoogleOAuthProvider } from '@react-oauth/google';



function App() {

return (
  <>


    <Router>
      <Routes>
        <Route path="*" element={<Error404/>}/>
        <Route exact path="/" element={<Home/>}/>
        {/* Autenticacion */}
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/login' element={
          <GoogleOAuthProvider clientId="2">
            <Login />
          </GoogleOAuthProvider>  
        } />
        <Route exact path='/activate/:uid/:token' element={<Activate/>}/>
      </Routes>
    </Router>

  </>
)
}

export default App