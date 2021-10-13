import React, { useState } from 'react';
const boxlogin = {
    width:'380px',
    height:'450px',
    backgroundColor: "DodgerBlue",
    borderRadius:'5px',
    padding:'20px',
    display:'flex',
    flexDirection:'column',
    justifyContent:'flex-start',
    opacity:'0.5',
    marginLeft: '609px',
    marginTop:'60px'
}

const btnlogin = {
    width: '339px',
    marginTop: '28px'
}

const   message = {
    display:'flex',
    justifyContent:'space-between'
  }

const Login =  () => {
    const [users , setUser] = useState({
        number:"",
        password:""
    });    

    const {number, password} = users;

    const onInputChange = e => {
        const value = e.target.value;
        console.log(value);
        const name = e.target.name;
       setUser({...users, [name]:value});
    }

    const onSubmitForm = e => {
        e.preventDefault();
    }


  return(
      <div style={boxlogin}>
          <form onSubmit={onSubmitForm}>
            <div>
             <div className="form-group">
                <input
                    className="form-control"
                    name="number"
                    type="text"
                    placeholder="Enter Username"
                    onChange={onInputChange}
                />    
             </div>
             <div className="form-group">
                <input
                    className="form-control"
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    onChange={onInputChange}
                />    
             </div>
             <div className="message">
               <div><input type="checkbox" /> Remember ME</div>
           
            </div>
             <button type="button" style={btnlogin} class="btn btn-primary btn-lg btn-block">
                 Login
             </button>
             
          </div>
          </form>
      </div>
  );
}

export default Login;