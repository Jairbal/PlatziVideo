/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Header from '../components/Header';
import Categories from '../components/Categories';
import Carrousel from '../components/Carrousel';
import Carrouselitem from '../components/Carrouselitem';
import '../assets/styles/App.scss';

const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carrousel>
            {myList.map((item) => (
              <Carrouselitem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carrousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carrousel>
          {trends.map((item) => <Carrouselitem key={item.id} {...item} />)}
        </Carrousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carrousel>
          {originals.map((item) => <Carrouselitem key={item.id} {...item} />)}
        </Carrousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

export default connect(mapStateToProps, null)(Home);
