import React from 'react';
import Banner from '../components/homeComponents/banner/Banner';
import Work from '../components/homeComponents/work/Work';
import Project from '../components/homeComponents/project/Project';
import Product from '../components/homeComponents/product/Product';
import Slider from '../components/homeComponents/slider/Slider';
import Inquery from '../components/homeComponents/inquery/Inquery';
import Blog from '../components/homeComponents/blog/Blog';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Work></Work>
            <Project></Project>
            <Product></Product>
            <Slider></Slider>
            <Inquery></Inquery>
            <Blog></Blog>
        </div>
    );
};

export default Home;