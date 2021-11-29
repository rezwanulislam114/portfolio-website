import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import Navigation from '../../Navigation/Navigation';
import Skills from '../../Skills/Skills';
import './SkillPage.css'

const SkillPage = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Skills></Skills>
            <Container className="skill-graph">
                <h1 className="title-text">Have A Look Here</h1>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="skill">
                            <h6 className="mb-2">Web Development</h6>
                            <ProgressBar now={90} />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="skill">
                            <h6 className="mb-2">Web Design</h6>
                            <ProgressBar now={65} />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="skill">
                            <h6 className="mb-2">Responsive Website</h6>
                            <ProgressBar now={90} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div className="skill">
                            <h6 className="mb-2">React Development</h6>
                            <ProgressBar now={80} />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="skill">
                            <h6 className="mb-2">Full Stack</h6>
                            <ProgressBar now={75} />
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div className="skill">
                            <h6 className="mb-2">Back-End</h6>
                            <ProgressBar now={65} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SkillPage;