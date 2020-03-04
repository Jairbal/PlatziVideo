import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import Carrouselitem from '../components/Carrouselitem';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />

    <Categories>
      <Carrousel>
        <Carrouselitem />
        <Carrouselitem />
        <Carrouselitem />
        <Carrouselitem />
        <Carrouselitem />
      </Carrousel>
    </Categories>

    <Footer />
  </div>
);

export default App;
