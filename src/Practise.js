import React, {useEffect, useState} from 'react';

const Practise = () =>{
    const [users, setUsers] = useState(0);

    useEffect(() =>{
        console.log("useeffec working: dsfsdf");
    });

    return(
        <div>
        <h5>useEffect when load the page</h5>
        <h1>default state value is {users}</h1>
        <button onClick={() =>setUsers(users + 5)}>click me</button>
    </div>
    );
};
export default Practise;