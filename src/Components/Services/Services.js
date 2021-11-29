import React from 'react';
import './Services.css'
import { Col, Container, Row } from 'react-bootstrap';
import webDev from '../../images/icons/web-dev.png'
import webDesign from '../../images/icons/web-design.png'
import responsiveWeb from '../../images/icons/responsive.png'

const Services = () => {
    return (
        <Container className="services-section">
            <h1 className="title-text">What I Do</h1>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <div className="service">
                        <img src={webDev} alt="" />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <div className="service">
                        <img src={webDesign} alt="" />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <div className="service">
                        <img src={responsiveWeb} alt="" />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <div className="service">
                        <img src={webDesign} alt="" />
                        <h2>Web Design</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <div className="service">
                        <img src={webDev} alt="" />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <div className="service">
                        <img src={responsiveWeb} alt="" />
                        <h2>Web Development</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda repellat maxime deleniti architecto ab quisquam sapiente totam</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Services;