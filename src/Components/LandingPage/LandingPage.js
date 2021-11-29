import React from 'react'
import { Container } from 'react-bootstrap';
import './LandingPage.css';
import Typical from 'react-typical'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Container>
                <h1>I'm <span className="secondary-color">Rezwanul Islam Rifat</span></h1>
                <h2>
                    <Typical
                        steps={[
                            'Web Developer', 1000,
                            'React Developer', 1000,
                            'MERN Developer', 1000,
                            'Web Designer', 1000,
                        ]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h2>
                <button className="btn-regular mt-5">
                    <i class="fas fa-download"></i>
                    <a href="https://drive.google.com/uc?export=download&id=17actcWAUKDUE7VQtl5QNR3g8jROcn6fs">Download Resume</a>
                </button>
            </Container>
        </div>
    );
};

export default LandingPage;