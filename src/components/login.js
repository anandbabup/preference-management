import React, { useState } from 'react';
import DataContext from './DataContext';
import { useHistory } from 'react-router-dom';
export default function Login(props) {
    const history = useHistory();
    const [errorMsg, setErrorMsg] = useState();
    function handleSubmit(event) {
        const data = new FormData(event.target);
        const user = DataContext.login(data);
        if (user.isAuthenticated) {
            props.setUser(user);
            history.push("/dashboard");
        }
        setErrorMsg("Enter valid username/password");
        event.preventDefault();
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="name" name="username" className="form-control" id="username" aria-describedby="emailHelp" required></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" aria-describedby="emailHelp" required></input>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button><br />
                {errorMsg ?
                    <small id="error-name" className="text-danger">
                        {errorMsg}
                    </small> : null}
            </form>
        </div>
    );
}