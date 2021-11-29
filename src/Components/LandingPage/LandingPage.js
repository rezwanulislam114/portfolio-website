import React from 'react';
import { Container } from 'react-bootstrap';
import './LandingPage.css'

const LandingPage = () => {
    return (
        <div className="landing-page">
            <Container>
                <h1>I'm Rezwanul Islam Rifat</h1>
                <h2>Web Developer</h2>
                <button className="btn-regular mt-5">
                    <i class="fas fa-download"></i>
                    <a href="https://drive.google.com/uc?export=download&id=17actcWAUKDUE7VQtl5QNR3g8jROcn6fs">Download Resume</a>
                </button>
            </Container>
        </div>
    );
};

export default LandingPage;