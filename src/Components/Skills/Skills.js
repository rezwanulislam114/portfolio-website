import React from 'react';
import './Skills.css'
import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import html from '../../images/skills/html.png'
import css from '../../images/skills/css.png'
import bootstrap from '../../images/skills/bootstrap.png'
import tailwind from '../../images/skills/tailwind.svg'
import express from '../../images/skills/express.png'
import firebase from '../../images/skills/firebase.png'
import github from '../../images/skills/github.png'
import heroku from '../../images/skills/heroku.png'
import js from '../../images/skills/js.png'
import material from '../../images/skills/material.png'
import mongodb from '../../images/skills/mongodb.png'
import netlify from '../../images/skills/netlify.png'
import node from '../../images/skills/node.png'
import react from '../../images/skills/react.png'
import vscode from '../../images/skills/vscode.png'

const Skills = () => {
    AOS.init({ duration: 1200 });

    return (
        <Container className="skills">
            <h1 data-aos="fade-right" className="title-text">My Skills</h1>
            <Row data-aos="zoom-in">
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={html} alt="" />
                        <h5>HTML</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={css} alt="" />
                        <h5>CSS</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={js} alt="" />
                        <h5>javaScript</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={bootstrap} alt="" />
                        <h5>Bootstrap</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={tailwind} alt="" />
                        <h5>Tailwind</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={react} alt="" />
                        <h5>React</h5>
                    </div>
                </Col>
            </Row>
            <Row data-aos="zoom-in">
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={node} alt="" />
                        <h5>Node.js</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={express} alt="" />
                        <h5>Express</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={mongodb} alt="" />
                        <h5>MongoDB</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={material} alt="" />
                        <h5>Material UI</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={firebase} alt="" />
                        <h5>Firebase</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={netlify} alt="" />
                        <h5>Netlify</h5>
                    </div>
                </Col>
            </Row>
            <Row data-aos="zoom-in">
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={github} alt="" />
                        <h5>GitHub</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={heroku} alt="" />
                        <h5>Heroku</h5>
                    </div>
                </Col>
                <Col xs={6} sm={4} md={2}>
                    <div className="skill">
                        <img src={vscode} alt="" />
                        <h5>VS Code</h5>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Skills;