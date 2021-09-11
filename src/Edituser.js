import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Edituser =  () => {
    let history = useHistory();
    const [user, setUser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    
    const {id} = useParams();

    const {name,username,email, phone, website} = user;
    useEffect(() =>{
        loadUsers();
    },[]);

    const onInputChange = e => {
        setUser({...user,[e.target.name]:e.target.value});
    };
    
    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/teacher"); 
    }


    const loadUsers = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        console.log(result);
        setUser(result.data);
    }

   

    return <div>
        {/* <div>{JSON.stringify(user)}</div> */}
        <form onSubmit={e => onSubmit(e)}>
                <div className="card" style={{ width: '500px',margin:'50px' }}>
                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    value={name}
                    onChange={e => onInputChange(e) }
                    placeholder="enter first name"
                   
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="username"
                    value={username}
                    onChange={e => onInputChange(e) }
                    placeholder="enter username name"
                   
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="email"
                    value={email}
                    onChange={e => onInputChange(e) }
                    placeholder="enter first email"
                   
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="phone"
                    value={phone}
                    onChange={e => onInputChange(e) }
                    placeholder="enter phone"
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="website"
                    value={website}
                    onChange={e => onInputChange(e) }
                    placeholder="enter website"
                   
                    />
                </div>
                </div>
                <button className="btn btn-primary btn-block">Add Teacher</button>
            </form>
            
    </div>
}

    export default Edituser;
