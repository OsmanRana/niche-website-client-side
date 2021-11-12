import React from 'react';
import HomeBanner from '../Banner/HomeBanner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Reviews></Reviews>
            <Products></Products>
        </div>
    );
};

export default Home;