import React, {useState} from 'react';

const Practise = () =>{
    const [users, setUsers] = useState(0);
    return(
        <div>
        <h1>useState have two property first is default as 0  users & second is property is updating setUsers</h1>
        <h1>default state value is {users}</h1>
        <button onClick={() =>setUsers(users + 5)}>click me</button>
    </div>
    );
};
export default Practise;