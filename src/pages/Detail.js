import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Detail = () => {
  const [data, setData] = useState(null);

  const id = useSelector((state) => state.message.id);

  useEffect(() => {
    axios.get(`http://localhost:3314/contactUs/${id}`).then(({ data }) => {
      setData(data);
    });
  }, []);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Detail Message</Card.Title>
        <Card.Text>
          Name: {data?.name} <br />
          Phone Number: {data?.phone_number} <br />
          Email: {data?.email} <br />
          Message: {data?.message} <br />
        </Card.Text>
        <Link to="/tabel">Back</Link>
      </Card.Body>
    </Card>
  );
};

export default Detail;
