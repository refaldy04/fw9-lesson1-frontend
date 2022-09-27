import React, { useEffect, useState } from 'react';
import Layout from '../components/Main';
import axios from 'axios';

function Tabel() {
  const [dataTable, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const data = await axios.get('http://localhost:3314/contactUs');
      console.log(data);
      setData(data.data);
      // ...
    }
    fetchData();
  }, []);
  return (
    <Layout>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
          {dataTable.map((data) => (
            <>
              <tr>
                <th>{data.name}</th>
                <th>{data.email}</th>
                <th>{data.message}</th>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </Layout>
  );
}

export default Tabel;
