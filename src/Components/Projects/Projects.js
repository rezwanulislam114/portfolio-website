import React from 'react';
import './Projects.css';
import { Col, Container, Row } from 'react-bootstrap';
import garageZero from '../../images/projects/garaze-zero.png';
import yoGetaway from '../../images/projects/yo-getaway.png';
import alphaCare from '../../images/projects/alpha-care.png';
import arrangeConcert from '../../images/projects/yo-getaway.png';
import educepedia from '../../images/projects/educapedia.png';
import weatherCheck from '../../images/projects/weather-check.png';

const Projects = () => {
    return (
        <Container className="projects">
            <h1 className="title-text">Projects</h1>
            <Row>
                <Col xs={12} md={4}>
                    <div className="project">
                        <img src={garageZero} alt="" />
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="project">
                        <img src={yoGetaway} alt="" />
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="project">
                        <img src={alphaCare} alt="" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <div className="project">
                        <img src={educepedia} alt="" />
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="project">
                        <img src={weatherCheck} alt="" />
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="project">
                        <img src={arrangeConcert} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Projects;