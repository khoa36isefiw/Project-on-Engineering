import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import {Container, Box, Typography, } from '@mui/material';

import PageNotFound from './pages/NotFound/PageNotFound';
import Home  from './pages/Home/Home';
import CreatePost from './pages/CreatePost/CreatePost';
import MyAccount from './pages/MyAccount/MyAccount';
import HeaderDesign from './Components/Header/HeaderComponent';
import SubHeader from './Components/SubHeader/SubHeader';
import GimmeMenu from './Components/GimmeMenu/GimmeMenu';
import Footer from './Components/Footer/Footer';

import ShapeExample from './Components/SlideShowImage';
import ScrollButtonToTop from './Components/BackToTop';

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
              <Route path='/create' element={<CreatePost/>}></Route>

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