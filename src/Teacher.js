import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';

const Teacher = () => {
const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
  };

  const deleteUsrs = async id =>{
      await axios.delete(`http://localhost:3003/users/${id}`);
      loadUsers();
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">operation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.email}</td>
              
              <td><Link class="btn btn-primary"  to={`/teacher/${user.id}`}>View</Link></td>
              <td><button class="btn btn-danger" onClick={() => deleteUsrs(user.id)}>Delete</button></td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Teacher;
