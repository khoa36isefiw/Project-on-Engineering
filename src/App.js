import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Container, Box, Typography, } from '@mui/material';

import PageNotFound from './pages/NotFound/PageNotFound';
import Home  from './pages/Home/Home';
import MyAccount from './pages/MyAccount/MyAccount';
import HeaderDesign from './Components/Header/HeaderComponent';
import SubHeader from './Components/SubHeader/SubHeader';
import GimmeMenu from './Components/GimmeMenu/GimmeMenu';
import Footer from './Components/Footer/Footer';

import ShapeExample from './Components/SlideShowImage';
import ScrollButtonToTop from './Components/BackToTop';
import RecoverPassword from './pages/RecoverPassword/RecoverPassword';
import WishList from './pages/WishList/WishList';
import Checkout from './pages/Checkout/Checkout';
import Shop from './pages/Shop/Shop';

function App() {
  return (
      <Router>
          <HeaderDesign/>    
          <SubHeader/>
          <GimmeMenu />

          <Routes>
              {/* Home */}
              <Route path='/' exact element={<Home />}></Route>
              {/* Header */}
              <Route path='/my-account' element={<MyAccount/>}></Route>
              <Route path='/my-wishlist' element={<WishList/>}></Route>
              <Route path='/checkout' element={<Checkout/>}></Route>
              <Route path='/shop' element={<Shop/>}></Route>
              <Route path='/recover-password' element={<RecoverPassword/>}></Route>
              

              {/* path for 404 Not Found Page */}
              <Route path="/404" element={<PageNotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
          <ScrollButtonToTop/>
          <ShapeExample/>
          <Footer/>
      </Router>
  )
}

export default App