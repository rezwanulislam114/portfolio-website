import React from 'react';
import './Projects.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Col, Container, Row } from 'react-bootstrap';
import garageZero from '../../images/projects/garaze-zero.png';
import yoGetaway from '../../images/projects/yo-getaway.png';
import alphaCare from '../../images/projects/alpha-care.png';
import arrangeConcert from '../../images/projects/yo-getaway.png';
import educepedia from '../../images/projects/educapedia.png';
import weatherCheck from '../../images/projects/weather-check.png';

const Projects = () => {
    AOS.init({ duration: 1200 })

    return (
        <Container className="projects">
            <h1 data-aos="fade-right" className="title-text">Projects</h1>
            <Row>
                <Col data-aos="fade-right" xs={12} md={4}>
                    <div className="project">
                        <img className="project-img" src={garageZero} alt="" />
                        <div className="project-info">
                            <h3>GarageZero</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id itaque, repellat excepturi quidem asperiores</p>
                            <div className="project-link">
                                <a href="/">Live Preview</a>
                                <a href="/">Client-side Code</a>
                                <a href="/">Server-side Code</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col data-aos="zoom-in" xs={12} md={4}>
                    <div className="project">
                        <img className="project-img" src={yoGetaway} alt="" />
                        <div className="project-info">
                            <h3>GarageZero</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id itaque, repellat excepturi quidem asperiores</p>
                            <div className="project-link">
                                <a href="/">Live Preview</a>
                                <a href="/">Client-side Code</a>
                                <a href="/">Server-side Code</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col data-aos="fade-left" xs={12} md={4}>
                    <div className="project">
                        <img className="project-img" src={alphaCare} alt="" />
                        <div className="project-info">
                            <h3>GarageZero</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id itaque, repellat excepturi quidem asperiores</p>
                            <div className="project-link">
                                <a href="/">Live Preview</a>
                                <a href="/">Client-side Code</a>
                                <a href="/">Server-side Code</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col data-aos="fade-right" xs={12} md={4}>
                    <div className="project">
                        <img className="project-img" src={arrangeConcert} alt="" />
                        <div className="project-info">
                            <h3>GarageZero</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id itaque, repellat excepturi quidem asperiores</p>
                            <div className="project-link">
                                <a href="/">Live Preview</a>
                                <a href="/">Client-side Code</a>
                                <a href="/">Server-side Code</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col data-aos="zoom-in" xs={12} md={4}>
                    <div className="project">
                        <img className="project-img" src={educepedia} alt="" />
                        <div className="project-info">
                            <h3>GarageZero</h3>
                            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, id itaque, repellat excepturi quidem asperiores</p>
                            <div className="project-link">
                                <a href="/">Live Preview</a>
                                <a href="/">Client-side Code</a>
                                <a href="/">Server-side Code</a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col data-aos="fade-left" xs={12} md={4}>
                    <div className="project">
                        <img className="project-img" src={weatherCheck} alt="" />
                        <div className="project-info">
                            <h3>GarageZero</h3>
                            <p className="text-center">Lorem ipsum dolor sit am</p>
                            <div className="project-link">
                                <a href="/">Live Preview</a>
                                <a href="/">Client-side Code</a>
                                <a href="/">Server-side Code</a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;