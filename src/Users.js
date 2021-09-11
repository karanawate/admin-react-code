import React from 'react';

const Users = () => {
    return (
        <div className="container-fluid">
            <div >
                <div className="input-group mb-3">
                    <input type="text" name="name" className="form-control" placeholder="teacher Name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="username" className="form-control" placeholder="teacher last name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text"  name="email" className="form-control" placeholder="teacher contact" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" name="phone" className="form-control" placeholder="number" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
            </div>
        </div>
    )

}
export default Users;
