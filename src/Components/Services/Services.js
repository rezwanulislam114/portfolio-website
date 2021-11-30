import React from 'react';
import './Services.css'
import { Col, Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import webDev from '../../images/icons/web-dev.png'
import webDesign from '../../images/icons/web-design.png'
import responsiveWeb from '../../images/icons/responsive.png'

const Services = () => {
    AOS.init({ duration: 1200 });

    return (
        <Container className="services-section">
            <h1 data-aos="fade-right" className="title-text">What I Do</h1>
            <div className="services-container">
                <Col data-aos="zoom-in">
                    <div className="service">
                        <img src={webDev} alt="" />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
                <Col data-aos="zoom-in">
                    <div className="service">
                        <img src={webDesign} alt="" />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
                <Col data-aos="zoom-in">
                    <div className="service">
                        <img src={responsiveWeb} alt="" />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
                <Col data-aos="zoom-in">
                    <div className="service">
                        <img src={webDesign} alt="" />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
                <Col data-aos="zoom-in">
                    <div className="service">
                        <img src={webDev} alt="" />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
                <Col data-aos="zoom-in">
                    <div className="service">
                        <img src={responsiveWeb} alt="" />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
            </div>
        </Container>
    );
};

export default Services;