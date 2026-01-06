import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './views/layout/Layout.jsx';
import MainRouter from './router/mainRouter.jsx';

import ScrollToTop from './components/ScrollToTop';

export default function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <MainRouter />
            </Layout>
        </Router>
    );
}
