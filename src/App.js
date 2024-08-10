import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';

import Navbar from './Navbar';
import Grow from './Grow';
import Profile from './Profile';
import About from './About';

import Shop from './bowlItem';
import Cart from './Cart';
import Payment from './Payment';
import LikedProducts from './LikedProducts';

// import { getLikedItemsFromLocalStorage } from './localStorageUtils';


//import FarmersToGardeners from './Home';
import EarnestPromise from './EarnestPromise';
import Slider from './Slider/Slider';
import LandingPage from './LandingPage';
import Features from './Features';
import Media from './Media';
import Gallery from './Gallery';
import Footer from './Footer';
import Checkout from './checkout';
import ProfileDropdown from './pd';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/LandingPage" element={<LandingPage/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/Home" element={<FarmersToGardeners/>}/> */}
        <Route path="/" element={<LandingPage />} />
       <Route path="/Navbar" element={<Navbar />}/>
        <Route path="/Grow" element={<Grow />}/>
        <Route path="/Profile" element={<Profile />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/BowlItem" element={<Shop/>}/>
       
        <Route path="/Cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
           <Route path="/LikedProducts" element={<LikedProducts/>}/>  
        <Route path="/Payment" element={<Payment/>}/>


<Route path="/Slider" element={<Slider/>}/>
<Route path="/Home" element={<EarnestPromise/>}/>
<Route path="/Features" element={<Features/>}/>
<Route path="/Media" element={<Media/>}/>
<Route path="/Gallery" element={<Gallery/>}/>
<Route path="/Footer" element={<Footer/>}/>
<Route path="/countryData" element={<countryData/>}/>
<Route path="/pd" element={<ProfileDropdown/>}/>
          </Routes>
    </Router>
  );
}

export default App;
