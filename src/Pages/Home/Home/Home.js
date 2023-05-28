import React from 'react';
import Banner from '../Banner/Banner';
import Service from '../Services/Service';
import About from './About/About';
import Courses from '../Courses/Courses';
import Categoryes from '../Categoryes/Categoryes';
import Teachers from '../Teachers/Teachers';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <Courses></Courses>
            <Categoryes></Categoryes>
            <Teachers></Teachers>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;