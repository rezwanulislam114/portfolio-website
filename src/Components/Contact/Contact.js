import React from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'
import { Col, Container, Row } from 'react-bootstrap';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_zl198c9', 'template_zi9kvjh', e.target, 'user_beqBo8GjyF1jnDKEmKRrV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div className="contact">
            <Container>
                <h1 className="title-text">Get in touch</h1>
                <Row>
                    <Col xs={12} md={6} className="mb-5">
                        <p className="mb-0">
                            46/A, Road No: 3, Promy Socity <br />
                            Moynartek, Uttarkhan <br />
                        </p>
                        <h2>Dhaka, Bangladesh.</h2>
                        <br />
                        <div className="d-flex mb-3">
                            <h4 className="m-0">Phone:</h4>
                            <p className="mb-0 ms-5">
                                +8801785998429 <br />
                                +8801852877996
                            </p>
                        </div>
                        <div className="d-flex align-items-center">
                            <h4 className="m-0">Email:</h4>
                            <p className="mb-0 ms-5">
                                rezwanulislam114@gmail.com
                            </p>
                        </div>
                        <div className="media-links">
                            <a href="https://www.facebook.com/rezwanul.islam.5036/"><i class="fab fa-facebook"></i></a>
                            <a href="https://www.linkedin.com/in/rezwanulislam114/"><i class="fab fa-linkedin"></i></a>
                            <a href="https://www.instagram.com/rezwanul_islam_rifat/"><i class="fab fa-instagram"></i></a>
                            <a href="https://github.com/rezwanulislam114"><i class="fab fa-github"></i></a>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <h4>Or just write me a letter here_</h4>
                        <form onSubmit={sendEmail}>
                            <input placeholder="Your Name" type="text" name="from_name" required />
                            <input placeholder="Your Email" type="email" name="from_email" required />
                            <input placeholder="Subject" type="text" name="subject" />
                            <textarea placeholder="Message" name="message" required />
                            <input type="submit" value="Send" />
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;