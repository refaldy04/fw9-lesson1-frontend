import React, { useEffect, useState } from 'react';
import Layout from '../components/Main';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { selectDetail } from '../redux/reducers/message';

function Tabel() {
  const [dataTable, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState(null);
  const [keyword, setKeyword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getData = (limit = 5, page = 1, search = keyword, sort = 'name') => {
    limit = parseInt(limit);
    page = parseInt(page);
    const query = new URLSearchParams({ limit, page, search, sort }).toString();
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

  const onSearch = (e) => {
    e.preventDefault();
    getData(pageInfo.limit, 1, keyword);
  };

  return (
    <Layout className="ps-5">
      <Button variant="dark" type="submit" className="mt-5 ms-4" onClick={() => navigate('/')}>
        Back
      </Button>

      <div className="d-flex justify-content-start gap-5">
        <Form onSubmit={onSearch}>
          <InputGroup className="my-3 ms-4 me-5">
            <Button variant="dark" id="button-addon1" type="submit">
              Search
            </Button>
            <Form.Control aria-label="Example text with button addon" aria-describedby="basic-addon1" onChange={(e) => setKeyword(e.target.value)} />
          </InputGroup>
        </Form>
        <select aria-label="Default select example" onChange={(e) => getData(pageInfo.limit, 1, '', e.target.value)}>
          <option>Sort By</option>
          <option value={'name'}>Name</option>
          <option value={'email'}>Email</option>
        </select>
      </div>

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
              <td>
                <Button
                  variant="success"
                  size="sm"
                  className="mb-2"
                  onClick={() => {
                    dispatch(selectDetail(data.id));
                    navigate('/detail');
                  }}
                >
                  detail
                </Button>
                <br />
                <Button variant="danger" size="sm">
                  delete
                </Button>
              </td>
            </tr>
          ))}
          {dataTable.length < 1 && (
            <tr className="">
              <td colSpan={5} className="text-center py-5 table-high">
                No data in here
              </td>
            </tr>
          )}
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
        <select onChange={(e) => getData(e.target.value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5} defaultValue>
            5
          </option>
        </select>
      </div>
    </Layout>
  );
}

export default Tabel;
