import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { editMessage } from '../redux/asyncActions/message';
import { Formik } from 'formik';
import * as Yup from 'yup';

const editMessageSchema = Yup.object().shape({
  message: Yup.string().min(5, 'Too Short!').max(250, 'Too Long!').required('Required'),
});

const Detail = () => {
  const [smShow, setSmShow] = useState(false);

  const dataMessage = useSelector((state) => state.message.dataMessage);

  const dispatch = useDispatch();

  const handleClose = () => setSmShow(false);

  const onEdit = (data) => {
    console.log(data);
    dispatch(editMessage({ id: dataMessage.id, message: data }));
    handleClose();
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Detail Message</Card.Title>
        <div className="d-flex flex-column gap-3 my-5">
          <div className=" d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p>Name</p>
              <p>{dataMessage?.name}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p>Phone Number</p>
              <p>{dataMessage?.phone_number}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p>Email</p>
              <p>{dataMessage?.email}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p>Message</p>
              <p>{dataMessage?.message}</p>
            </div>
            <Button
              variant="warning"
              size="sm"
              onClick={() => {
                setSmShow(true);
              }}
            >
              Edit
            </Button>
          </div>
          <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm" centered>
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">Confirmation</Modal.Title>
            </Modal.Header>
            <Formik
              initialValues={{
                message: '',
              }}
              validationSchema={editMessageSchema}
              onSubmit={(values) => {
                // same shape as initial values
                console.log(values);
                onEdit(values);
              }}
            >
              {({ errors, touched, handleSubmit, values, handleChange }) => (
                <Form onSubmit={handleSubmit}>
                  <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control as="textarea" rows={10} name="message" type="text" placeholder="new message" onChange={handleChange} isInvalid={!!errors.message} />
                      <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Cancel
                    </Button>
                    <Button variant="warning" type="submit">
                      submit
                    </Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          </Modal>
        </div>
        <Link to="/tabel">Back</Link>
      </Card.Body>
    </Card>
  );
};

export default Detail;
