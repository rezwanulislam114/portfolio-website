import React from 'react';
import Banner from '../../Banner/Banner';
import Navigation from '../../Navigation/Navigation';
import Projects from '../../Projects/Projects';
import Services from '../../Services/Services';
import Skills from '../../Skills/Skills';
import Contact from '../../Contact/Contact'

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;