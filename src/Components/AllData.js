
import React, { useContext } from "react";
import { Card, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataContext from "../Context/data-context";

const AllData = () => {
  const ctx = useContext(DataContext);

  return (
    <Card className="card-page">
      <h1 className="card-head">All Data in Store</h1>
      <div className="table-container">
      <Table striped bordered hover className="card-body">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
        {ctx.users.map(user => {
          return (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.balance}</td>
            </tr>
          )
        })}
        </tbody>
      </Table>
      </div>
    </Card>
  );
}

export default AllData;