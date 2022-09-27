import React from 'react';
import Layout from '../components/Main';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ContactUs = () => {
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

              <Form>
                <Form.Group className="mb-5">
                  <Form.Control type="text" placeholder="name" />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Control type="email" placeholder="email address" />
                </Form.Group>

                <Form.Group className="mb-5">
                  <Form.Control type="text" placeholder="tell us all about it" />
                </Form.Group>

                <div className="d-grid">
                  <Button variant="secondary" type="submit">
                    Submit
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
          <Col className="d-flex flex-column justify-content-between pt-5 pb-5">
            <div>
              <div className="d-flex flex-column ">
                <p className="text-secondary fw-bolder">opening hours</p>
                <p>
                  Monday - Friday <br />
                  9am - 5pm <br />
                  Weekend <br />
                  Closed
                </p>
              </div>

              <div>
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