import React, {useState} from 'react';

const [users, setUsers] = useState({});


const onSubmit = e => {
  
}

const View = () =>{
    return <div>
        <form onSubmit={e => onsubmit(e)}>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                label="name"
                name="name"
                onChange={e =>onchange(e)}
                 />
            </div>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                label="username"
                name="username"
                onChange={e =>onchange(e)}
                 />
            </div>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                label="email"
                name="email"
                onChange={e =>onchange(e)}
                 />
            </div>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                label="phone"
                name="phone"
                onChange={e =>onchange(e)}
                 />
            </div>
            <div className="form-group">
                <input
                type="text"
                className="form-control"
                label="website"
                name="website"
                onChange={e =>onchange(e)}
                 />
            </div>
            <button type="button" className="btn btn-primary">Submit</button>
            <button type="Reset" className="btn btn-danger">Cancel</button>
        </form>
    </div>
}
export default View;
