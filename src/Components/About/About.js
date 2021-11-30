import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container className="py-5">
                <h1>this is about section</h1>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;