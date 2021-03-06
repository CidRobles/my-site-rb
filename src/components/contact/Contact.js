import { React, useState } from 'react'

// Bootstrap
import { Row, Form, Button, Alert, Col, InputGroup } from 'react-bootstrap'

import '../contact/Contact.scss'

const Contact = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        } else {
            event.preventDefault()

        }

        setValidated(true);
    };

    return (
        <Row>
            <Col>
                <Form noValidate validated={validated} onSubmit={handleSubmit} action="https://formspree.io/f/xvovjjne" method="POST">
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="First name"
                                name="fname"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Last name"
                                name="lname"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="example@mail.com"
                                name="email"
                            />
                        </Form.Group>
                        <Form.Group as={Col} md="6">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="10 digits"
                                name="phone"
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group as={Col} md="6">
                            <Button type="submit">Lets talk!</Button>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Col>
        </Row>
    );
}

export default Contact