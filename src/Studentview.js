import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useParams } from 'react-router-dom';

const Studentview = () => {
    const [user, setUser] = useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });

    const {id} = useParams();
    
    useEffect(() => {
        viewLoad();
    });

     const viewLoad = async () => {
         let  result = await axios.get(`http://localhost:3003/users/${id}`);
         setUser(result.data);
     } 

        return(
           <div className="container">
               {JSON.stringify(user)}
            <div className="card" style={{ width: '18rem' }}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">{user.name}</li>
                    <li className="list-group-item">{user.username}</li>
                    <li className="list-group-item">{user.email}</li>
                    <li className="list-group-item">{user.phone}</li>
                    <li className="list-group-item">{user.website}</li>
                </ul>
            </div>
           </div>
         )
}
export default Studentview;