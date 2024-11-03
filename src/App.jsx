
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { CartProvider } from './components/CartContext/CartContext'; 
import Catalog from './components/Catalog/Catalog';    
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PaymentDelivery from './components/PaymentDelivery/PaymentDelivery';
import Register from './components/Register/Register'; 

const App = () => {
    return (
        <CartProvider>
            <Router>
                <Header />
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/payment-delivery" element={<PaymentDelivery />} />
                        <Route path="/register" element={<Register />} /> 
                        <Route path="/login" element={<Login />} /> 
                        <Route path="/contacts" element={<Contacts />} /> 
                        <Route path="/catalog" element={<Catalog />} /> 
                    </Routes>
                </div>
                <Footer />
            </Router>
        </CartProvider>
    );
};

export default App;
