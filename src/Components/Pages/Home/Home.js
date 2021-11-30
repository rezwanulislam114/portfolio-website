import React from 'react';
import Banner from '../../Banner/Banner';
import Navigation from '../../Navigation/Navigation';
import Projects from '../../Projects/Projects';
import Services from '../../Services/Services';
import Skills from '../../Skills/Skills';
import Contact from '../../Contact/Contact'
import Footer from '../../Footer/Footer';
import LandingPage from '../../LandingPage/LandingPage';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <LandingPage></LandingPage>
            <Banner></Banner>
            <Services></Services>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;