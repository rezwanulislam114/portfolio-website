import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import developerImg from '../../images/developer-img.jpeg'
import { useHistory } from 'react-router';

const Banner = () => {
    AOS.init({ duration: 1200 });
    const history = useHistory()

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
                        <button onClick={() => history.push('/about')} className="btn-regular mt-4">Learn More About Me <i class="fas fa-chevron-right ms-2"></i></button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;