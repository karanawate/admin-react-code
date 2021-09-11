import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import Teacher from "./Teacher";
import { FiArrowLeft } from "react-icons/fi";
const Home =  () => {
    const [isNewAdded, setIsNewAdded] = useState(false)
    const [users, setUser]= useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name,username,email, phone, website} = users;
    const onInputChange = e => {
        const name  = e.target.name;
        const value = e.target.value;
        setUser({...users, [name]:value});
    };

    let history = useHistory();
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users/", users);
        e.target.reset()
        // refetch the collection
        setIsNewAdded(prev => !prev)
    }

    return <div>
                <form onSubmit={onSubmit}>
                <div className="card" style={{ width: '500px',margin:'50px' }}>
                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="name"
                    placeholder="enter first name"
                    onChange={onInputChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="username"
                    placeholder="enter username name"
                    onChange={onInputChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="email"
                    placeholder="enter first email"
                    onChange={onInputChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="phone"
                    placeholder="enter phone"
                    onChange={onInputChange}
                    />
                </div>

                <div className="form-group">
                    <input 
                    type="text"
                    className="form-control form-control-lg"
                    name="website"
                    placeholder="enter website"
                    onChange={onInputChange}
                    />
                </div>
                </div>
                <button className="btn btn-primary btn-block">Add Teacher</button>
            </form>
            <Teacher isNewAdded={isNewAdded} />
    </div>
}

    export default Home;
