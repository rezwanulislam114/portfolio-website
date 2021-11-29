import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import developerImg from '../../images/developer-img1.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <img className="developer-img" src={developerImg} alt="" />
                    </Col>
                    <Col xs={12} sm={8}>
                        <h1>Rezwanul Islam_</h1>
                        <small>A Web Developer | MERN Developer</small>
                        <br /> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, eveniet est quo id sit magnam mollitia optio minima quibusdam veniam minus sint dignissimos repellat laudantium ea ratione omnis cumque dolores! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium totam, tempora tenetur at officiis inventore reprehenderit deserunt esse vitae reiciendis. Necessitatibus eum obcaecati distinctio aut id consequuntur hic ipsum.</p>
                        <a className="btn btn-secondary" href="https://drive.google.com/uc?export=download&id=17actcWAUKDUE7VQtl5QNR3g8jROcn6fs">Download Resume</a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;