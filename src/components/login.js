import React from 'react';
export default function Login() {

    function handleSubmit(event) {
        const data = new FormData(event.target);
        console.log(data);
        event.preventDefault();
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="name" className="form-control" id="username" aria-describedby="emailHelp" ></input>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" aria-describedby="emailHelp" ></input>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}