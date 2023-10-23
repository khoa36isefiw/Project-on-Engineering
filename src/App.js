import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import PageNotFound from './pages/NotFound/PageNotFound';
import Home from './pages/Home/Home';
import MyAccount from './pages/MyAccount/MyAccount';
import HeaderDesign from './Components/Header/HeaderComponent';
import SubHeader from './Components/SubHeader/SubHeader';
import GimmeMenu from './Components/GimmeMenu/GimmeMenu';
import Footer from './Components/Footer/Footer';

import ScrollButtonToTop from './Components/BackToTop';
import RecoverPassword from './pages/RecoverPassword/RecoverPassword';
import WishList from './pages/WishList/WishList';
import Checkout from './pages/Checkout/Checkout';
import Shop from './pages/Shop/Shop';
import SignIn from './Components/SignIn';
import ShapeExample from './Components/SlideShowImage';
import RegisterAccount from './pages/RegisterAccount/RegisterAccount';
import Blog from './pages/Blog/Blog';
import Contact from './pages/ContactUs/Contact';
import ContactUs from './pages/ContactUs/Contact';

// function App() {
//     return (
//         <Router>
//             <AppContent />
//         </Router>
//     );
// }

// function AppContent() {
//     const location = useLocation();
//     const shouldDisplayHeaderAndFooter = location.pathname !== '/404';

//     return (
//         <>
//             {shouldDisplayHeaderAndFooter && (
//                 <>
//                     <HeaderDesign />
//                     <SubHeader />
//                     <GimmeMenu />
//                 </>
//             )}

//             <Routes>
//                 {/* Home */}
//                 <Route path="/" exact element={<Home />}></Route>
//                 {/* Header */}
//                 <Route path="/my-account" element={<MyAccount />}></Route>
//                 <Route path="/my-wishlist" element={<WishList />}></Route>
//                 <Route path="/checkout" element={<Checkout />}></Route>
//                 {/* checkout = true --> mean have the className for scss */}
//                 {/* <Route path='/signin' element={<SignIn  isCheckout={true} />}></Route> */}
//                 <Route path="/signin" element={<SignIn />}></Route>
//                 <Route
//                     path="/register-account"
//                     element={<RegisterAccount />}
//                 ></Route>
//                 <Route path="/shop" element={<Shop />}></Route>
//                 <Route path="/blog" element={<Blog />}></Route>
//                 <Route path="/contact" element={<Contact />}></Route>
//                 <Route
//                     path="/recover-password"
//                     element={<RecoverPassword />}
//                 ></Route>

//                 <Route path="/404" element={<PageNotFound />} />
//                 <Route path="*" element={<Navigate to="/404" />} />
//             </Routes>
//             <ScrollButtonToTop/>

//             {shouldDisplayHeaderAndFooter && <Footer />}
//         </>
//     );
// }

// export default App;

function App() {
    // const location = useLocation();
    // const shouldDisplayHeaderAndFooter = location.pathname !== '/404';
    return (
        <Router>
            <HeaderDesign />
            <SubHeader />
            <GimmeMenu />
            <Routes>
                {/* Home */}
                <Route path="/" exact element={<Home />}></Route>
                {/* Header */}
                <Route path="/my-account" element={<MyAccount />}></Route>
                <Route path="/my-wishlist" element={<WishList />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                {/* checkout = true --> mean have the className for scss */}
                {/* <Route path='/signin' element={<SignIn  isCheckout={true} />}></Route> */}
                <Route path="/signin" element={<SignIn />}></Route>
                <Route path="/register-account" element={<RegisterAccount />}></Route>
                <Route path="/shop" element={<Shop />}></Route>
                <Route path="/contact" element={<ContactUs />}></Route>
                <Route path="/recover-password" element={<RecoverPassword />}></Route>

                {/* path for 404 Not Found Page */}
                <Route path="/404" element={<PageNotFound />} />
                <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
            <ScrollButtonToTop />
            <ShapeExample />
            <Footer />
        </Router>
    );
}

export default App;
