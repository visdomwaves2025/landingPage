import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../views/layout/MainLayout.jsx';
import Login from '../views/auth/Login.jsx';
import Home from '../views/landingPage/index.jsx';
import {
    About,
    Blog,
    BlogPost,
    Careers,
    CaseStudies,
    Contact,
    Industries,
    IndustryDetail,
    NotFound,
    ProductDetail,
    Products,
    ServiceDetail,
    Services
} from './pages';

const MainRouter = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/case-studies" element={<CaseStudies />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:slug" element={<ProductDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:slug" element={<ServiceDetail />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/industries/:slug" element={<IndustryDetail />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default MainRouter;
