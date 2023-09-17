import React from 'react';

import { About, Footer, Header, Services, Skills, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Services />
    <Work />
    <Skills />
    <Footer />
  </div>
);

export default App;
