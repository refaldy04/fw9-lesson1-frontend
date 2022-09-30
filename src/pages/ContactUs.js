import React from 'react';
import Layout from '../components/Main';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createMessage } from '../redux/asyncActions/message';
import { InputGroup } from 'react-bootstrap';
import { Formik } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

const createMessageSchema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required('Required'),
  phone_number: Yup.string()
    .required('Required')
    .matches(/^(\S+$)/g, '* This field cannot contain blankspaces')
    .phone('ID', true, 'phone number not from Indonesia'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().min(5, 'Too Short!').max(250, 'Too Long!').required('Required'),
});

const ContactUs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Layout>
      <Container fluid className="bg-dark text-light">
        <Row>
          <Col className="d-flex  flex-column pt-5 pb-5 px-5">
            <div>
              <p>say hi to the team</p>
              <h1>Contact Us</h1>
            </div>

            <div className="d-flex flex-column  ">
              <p className="py-5">fell free to contact us and we will get back to you as soon as we can.</p>

              <Formik
                initialValues={{
                  name: '',
                  phone_number: '',
                  email: '',
                }}
                validationSchema={createMessageSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                  dispatch(
                    createMessage({
                      values,
                      cb: () => {
                        navigate('/tabel');
                      },
                    })
                  );
                }}
              >
                {({ errors, handleSubmit, handleChange }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-5">
                      <InputGroup>
                        <Form.Control type="text" name="name" placeholder="name" onChange={handleChange} isInvalid={!!errors.name} />
                        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                      </InputGroup>
                    </Form.Group>

                    <Form.Group className="mb-5">
                      <Form.Control type="tel" name="phone_number" placeholder="phone number" onChange={handleChange} isInvalid={!!errors.phone_number} />
                      <Form.Control.Feedback type="invalid">{errors.phone_number}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-5">
                      <Form.Control type="email" name="email" placeholder="email address" onChange={handleChange} isInvalid={!!errors.email} />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-5">
                      <Form.Control as="textarea" rows={10} type="text" name="message" placeholder="tell us all about it" onChange={handleChange} isInvalid={!!errors.message} />
                      <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                    </Form.Group>

                    <div className="d-grid mb-3">
                      <Button variant="secondary" type="submit">
                        Submit
                      </Button>
                    </div>
                    <Link to="/tabel">to datalist</Link>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-between pt-5 pb-5">
            <div>
              <div className="d-flex flex-column mb-4">
                <p className="text-secondary fw-bolder">opening hours</p>
                <p>
                  Monday - Friday <br />
                  9am - 5pm <br />
                  Weekend <br />
                  Closed
                </p>
              </div>

              <div className="d-flex flex-column mb-4">
                <p className="text-secondary fw-bolder">address</p>
                <p>
                  Jln. Letjen Suparman 51
                  <br />
                  Kediri Jawa Timur 64133, <br />
                  Indonesia
                </p>
              </div>

              <div>
                <p className="text-secondary fw-bolder">support</p>
                <p>
                  hello@lahoi.com
                  <br />
                  +62 21 6539-0605
                </p>
              </div>
            </div>

            <div className="d-flex gap-5">
              <p>dribbble</p>
              <p>instagram</p>
              <p>linkedin</p>
              <p>twitter</p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ContactUs;
