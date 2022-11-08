import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './AppComponent/App';
import Header from './HeaderComponent/Header';
import Footer from './FooterComponent/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header auth={false}/>
    <App/>
    <Footer/>
  </>
);