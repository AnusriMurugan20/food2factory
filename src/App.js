import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext'; // Import UserProvider
import Login from './Login';
import SignUp from './SignUp';
import ForgotPassword from './ForgotPassword';
import Navbar from './Navbar';
import Grow from './Grow';
import Profile from './Profile';
import About from './About';
import Shop from './bowlItem';
import Cart from './Cart';
import LikedProducts from './LikedProducts';
import EarnestPromise from './EarnestPromise';
import Slider from './Slider/Slider';
import LandingPage from './LandingPage';
import Features from './Features';
import Media from './Media';
import Gallery from './Gallery';
import Footer from './Footer';
import Checkout from './checkout';
import ProfileDropdown from './pd';
import DonationForm from './Payment';
import AdminBarChart from './Admin/AdminBarChart/AdminBarChart';
import AdminBigChart from './Admin/AdminBigChart/AdminBigChart';
import AdminChartBox from './Admin/AdminChartBox/AdminChartBox';
import AdminDonation from './Admin/AdminDonationHandling/AdminDonation';
import AdminFooter from './Admin/AdminFooter/AdminFooter';
import AdminLanding from './Admin/AdminLanding/AdminLanding';
import AdminHome from './Admin/AdminHome/AdminHome';
import AdminMenu from './Admin/AdminMenu/AdminMenu';
import AdminNavbar from './Admin/AdminNavbar/AdminNavbar';
import AdminPieChart from './Admin/AdminPieChart/AdminPieChart';
import AdminTopBox from './Admin/AdminTopBox/AdminTopBox';
import DataTable from './Admin/ManageUsers/ManageUsers';
import DonationList from './Admin/DonationList';
import Home from './Components/Hom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebarr';
import Appp from './Components/Appp';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/LandingPage" element={<LandingPage/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/Navbar" element={<Navbar />}/>
          <Route path="/Grow" element={<Grow />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/BowlItem" element={<Shop/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/LikedProducts" element={<LikedProducts/>}/>  
          <Route path="/Payment" element={<DonationForm/>}/>
          <Route path="/Slider" element={<Slider/>}/>
          <Route path="/Home" element={<EarnestPromise/>}/>
          <Route path="/Features" element={<Features/>}/>
          <Route path="/Media" element={<Media/>}/>
          <Route path="/Gallery" element={<Gallery/>}/>
          <Route path="/Footer" element={<Footer/>}/>
          <Route path="/countryData" element={<countryData/>}/>
          <Route path="/pd" element={<ProfileDropdown/>}/>
          <Route path="/AdminBarChart" element={<AdminBarChart/>}/>
          <Route path="/AdminBigChart" element={<AdminBigChart/>}/>
          <Route path="/AdminChartBox" element={<AdminChartBox/>}/>
          <Route path="/AdminFooter" element={<AdminFooter/>}/>          
          <Route path="/admin/*" element={<AdminLanding/>}>
              <Route path="aHome" element={<AdminHome/>}/>
              {/* <Route path="/aDonation" element={<AdminDonation/>}/> */}
          </Route>
          <Route path="/AdminMenu" element={<AdminMenu/>}/>
          <Route path="/aNavbar" element={<AdminNavbar/>}/>
          <Route path="/AdminPieChart" element={<AdminPieChart/>}/>
          <Route path="/AdminTopBox" element={<AdminTopBox/>}/>
          <Route path="/aUsers" element={<DataTable/>}/>
          <Route path="/aDonationList" element={<DonationList/>}/>
          <Route path="/Hom" element={<Home/>}/>
          <Route path="/Header" element={<Header/>}/>
          <Route path="/Sidebarr" element={<Sidebar/>}/>
          <Route path="/Appp" element={<Appp/>}/>


        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
