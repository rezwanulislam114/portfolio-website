import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import developerImg from '../../images/developer-img.jpeg'

const Banner = () => {
    AOS.init({ duration: 1200 });

    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col xs={12} sm={4}>
                        <img data-aos="zoom-in" className="developer-img" src={developerImg} alt="" />
                    </Col>
                    <Col data-aos="fade-left" xs={12} sm={8}>
                        <h1>Rezwanul Islam_</h1>
                        <small>A Web Developer | MERN Developer</small>
                        <br /> <br />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, eveniet est quo id sit magnam mollitia optio minima quibusdam veniam minus sint dignissimos repellat laudantium ea ratione omnis cumque dolores! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste praesentium totam, tempora tenetur at officiis inventore reprehenderit deserunt esse vitae reiciendis. Necessitatibus eum obcaecati distinctio aut id consequuntur hic ipsum.</p>
                        <button className="btn-regular">
                            <i class="fas fa-download"></i>
                            <a href="https://drive.google.com/uc?export=download&id=17actcWAUKDUE7VQtl5QNR3g8jROcn6fs">Download Resume</a>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;