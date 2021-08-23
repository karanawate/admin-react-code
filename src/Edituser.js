import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Edituser =  () => {
    const [users, setUser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const {id} = useParams();

   useEffect(() =>{
       loadUsers();
   },[]);
    const {name,username,email, phone, website} = users;

    let history = useHistory();
    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result);
        setUser(result.data);
    }

    return <div>
        
                <form>
                <div className="card" style={{ width: '500px',margin:'50px' }}>
                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={name}
                    placeholder="enter first name"
                   
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="username"
                    name={username}
                    placeholder="enter username name"
                   
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="email"
                    value={email}
                    placeholder="enter first email"
                   
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="phone"
                    name={phone}
                    placeholder="enter phone"
                   
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="website"
                    value={website}
                    placeholder="enter website"
                   
                    />
                </div>
                </div>
                <button className="btn btn-primary btn-block">Add Teacher</button>
            </form>
            
    </div>
}

    export default Edituser;
