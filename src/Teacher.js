import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import { FaEdit } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
const Teacher = (props) => {
  
  const [users, setUsers] = useState([]);
  const [isDeleting, setIsDeleting] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(() => {
    loadUsers();
  }, [props.isNewAdded]);

  const loadUsers = async () => {
    setIsLoading(true)
    const result = await axios.get("http://localhost:3003/users");
    setUsers(result.data);
    setIsLoading(false)
    // setTimeout(() => {
    //   setIsLoading(false)
    // }, 3000);
  };

  const deleteUsrs = async id =>{
    setIsDeleting(id)
      await axios.delete(`http://localhost:3003/users/${id}`);
      
      setTimeout(() => {
        loadUsers();
        setIsDeleting(null)
      }, 2000);
  }
  const onChanesearchInput = (e) =>{
    const key = e.target.value;
     fetch("http://localhost:3003/users?q="+key).then((data) => {
      data.json().then((resp)=>{
        console.log(resp);
      })
    })
    
  }

    const avatar_img = {
     height:'50px',
     width:'50px',
     borderRadius:'5px'
    }
  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
        <div className="md-form mt-0" style={{width: "500px",marginLeft:"800px"}}>
          <input className="form-control" type="text" placeholder="Search"  onChange={onChanesearchInput} aria-label="Search" />
        </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            <th scope="col">Email</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td><img style={avatar_img} src={`https://ui-avatars.com/api/?bold=true&background=random&name=`+user.name} />{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.email}</td>
              <td><Link   to={`/teacher/${user.id}`}><BsFillPersonFill/></Link></td>
              <td><Link   to={`/edit/${user.id}`}><FaEdit /></Link></td>
              <td><button disabled={isDeleting === user.id} class="btn btn-danger" onClick={() => deleteUsrs(user.id)}>{isDeleting === user.id ? 'Deleting...' : 'Delete'}</button></td> 
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default React.forwardRef(Teacher);
