import React, { useEffect, useState } from 'react';
import Layout from '../components/Main';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Tabel() {
  const [dataTable, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);

  const navigate = useNavigate();

  const getData = (limit = 5, page = 1) => {
    limit = parseInt(limit);
    page = parseInt(page);
    const query = new URLSearchParams({ limit, page }).toString();
    axios.get(`http://localhost:3314/contactUs?` + query).then(({ data }) => {
      setData(data.result);
      setPageInfo(data.pageInfo);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getNextPage = () => {
    getData(pageInfo.limit, pageInfo.nextPage);
  };

  const getPrevPage = () => {
    getData(pageInfo.limit, pageInfo.prevPage);
  };

  return (
    <Layout>
      <Button variant="dark" type="submit" className="mt-5 ms-4" onClick={() => navigate('/')}>
        Back
      </Button>

      <Table striped bordered hover className="mb-5 mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-center align-items-center my-5 gap-3">
        <Button variant="dark" disabled={pageInfo?.prevPage === null} onClick={getPrevPage}>
          Prev
        </Button>
        <div>{pageInfo?.currentPage}</div>
        <Button variant="dark" disabled={pageInfo?.nextPage === null} onClick={getNextPage}>
          Next
        </Button>
      </div>
    </Layout>
  );
}

export default Tabel;
