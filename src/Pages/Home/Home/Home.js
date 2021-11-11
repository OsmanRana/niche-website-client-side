import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import HomeBanner from '../Banner/HomeBanner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <HomeBanner></HomeBanner>
            <Reviews></Reviews>
            <Products></Products>
        </div>
    );
};

export default Home;