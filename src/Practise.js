import React, {useEffect, useState} from 'react';

const Practise = () =>{
    const [users, setUsers] = useState(0);

    useEffect(() =>{
        console.warn("useeffec working: dsfsdf", users);
    },[])

    return(
        <div>
        <h5>useEffect hooke {users}</h5>
        <button onClick={() =>setUsers(users + 1)}>click me</button>
    </div>
    );
};
export default Practise;