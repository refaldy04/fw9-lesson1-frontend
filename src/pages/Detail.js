import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { editMessage } from '../redux/asyncActions/message';

const Detail = () => {
  const [data, setData] = useState(null);
  const [form, setForm] = useState({});
  const [smShow, setSmShow] = useState(false);

  const id = useSelector((state) => state.message.id);
  const dataMessage = useSelector((state) => state.message.dataMessage);
  const dispatch = useDispatch();

  const handleClose = () => setSmShow(false);

  useEffect(() => {
    axios.get(`http://localhost:3314/contactUs/${id}`).then(({ data }) => {
      setData(data);
    });
  }, []);

  const onEdit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(editMessage({ id: data.id, message: form }));
    handleClose();
  };

  const onChangeText = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Detail Message</Card.Title>
        <div className="d-flex flex-column gap-3 my-5">
          <div className=" d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p>Name</p>
              <p className="">{data?.name}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p>Phone Number</p>
              <p>{data?.phone_number}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p>Email</p>
              <p>{data?.email}</p>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex flex-column">
              <p>Message</p>
              <p>{dataMessage.message}</p>
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
            <Form onSubmit={onEdit}>
              <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control name="message" type="text" placeholder="new message" onChange={onChangeText} />
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
          </Modal>
        </div>
        <Link to="/tabel">Back</Link>
      </Card.Body>
    </Card>
  );
};

export default Detail;
