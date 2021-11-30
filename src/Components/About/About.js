import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './About.css'

const About = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container className="py-5">
                <Row className="mt-5 mb-5">
                    <Col xs={12} md={6}>
                        <h1>Hi</h1>
                        <h3>I'm <span className="fs-1">Rezwanul Islam Rifat</span></h3>
                        <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet ipsa neque, doloremque facilis deserunt odio iusto! Dolor tenetur fuga, et impedit repellendus eligendi, eius nisi corporis quos quia illum consequatur! Lorem ipsum dolor </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h1>image</h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col xs={12} sm={6} md={3}>
                        <div className="info">
                            <i class="fas fa-check"></i>
                            <div>
                                <h2>24+</h2>
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="info">
                            <i class="fas fa-user-friends"></i>
                            <div>
                                <h2>7+</h2>
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="info">
                            <i class="fas fa-check"></i>
                            <div>
                                <h2>24</h2>
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <div className="info">
                            <i class="fas fa-user-friends"></i>
                            <div>
                                <h2>24</h2>
                                <p>Project Completed</p>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="education-experience">
                    <div>
                        <h1 className="title-text">Education</h1>
                        <div class="timeline">
                            <div class="timeline-container primary">
                                <div class="timeline-icon">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="timeline-body">
                                    <h4 class="timeline-title"><span class="badge">BSc (Engg.)</span></h4>
                                    <h3 className="mb-4">Shahjalal University of Science and Technology</h3>
                                    <p>Doing BSc (Engg.) in <strong>Industrial and Production Engineering</strong></p>
                                    <p class="timeline-subtitle">2020 - running</p>
                                </div>
                            </div>
                            <div class="timeline-container danger">
                                <div class="timeline-icon">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="timeline-body">
                                    <h4 class="timeline-title"><span class="badge">HSC</span></h4>
                                    <h3 className="mb-4">Government Science College</h3>
                                    <p>Passed from Science background with GPA 5.00 out of scale 5.00</p>
                                    <p class="timeline-subtitle">2017 - 2019</p>
                                </div>
                            </div>
                            <div class="timeline-container success">
                                <div class="timeline-icon">
                                    <i class="fas fa-graduation-cap"></i>
                                </div>
                                <div class="timeline-body">
                                    <h4 class="timeline-title"><span class="badge">SSC</span></h4>
                                    <h3 className="mb-4">Uttara High School and College</h3>
                                    <p>Passed from Science background with GPA 5.00 out of scale 5.00</p>
                                    <p class="timeline-subtitle">2017 - 2019</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="title-text">Experience</h1>
                        <div class="timeline">
                            <div class="timeline-container">
                                <div class="timeline-icon">
                                    <i class="far fa-edit"></i>
                                </div>
                                <div class="timeline-body">
                                    <h4 class="timeline-title"><span class="badge">Self</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                    <p class="timeline-subtitle">3 Days Ago</p>
                                </div>
                            </div>
                            <div class="timeline-container">
                                <div class="timeline-icon">
                                    <i class="far fa-edit"></i>
                                </div>
                                <div class="timeline-body">
                                    <h4 class="timeline-title"><span class="badge">Self</span></h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam necessitatibus numquam earum ipsa fugiat veniam suscipit, officiis repudiandae, eum recusandae neque dignissimos. Cum fugit laboriosam culpa, repellendus esse commodi deserunt.</p>
                                    <p class="timeline-subtitle">3 Days Ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;