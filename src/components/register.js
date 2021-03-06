import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from 'react-router-dom';
import  DataContext from './DataContext';

import validateInput from './validation-rule';
const options = [
    'Residencial', 'Commercial'
];

export default function Register() {
    const history = useHistory();
    const [accType, setAccType] = useState("");
    const [error, setError] = useState({
        name: null,
        username: null,
        email: null,
        contact: null,
        address: null,
    });

    function handleChange(event) {
        let err = validateInput(event.target);
        let clonedErr = { ...error };
        clonedErr[event.target.name] = err;
        setError(clonedErr);
    }

    function handleSelect(event) {
        setAccType(event.target.value);
    }

    function handleSubmit(event) {
        if (isValidForm()) {
            const accountNumber = getAutoGenAccNumber();
            const customerId = getAutoGenCustomerId();
            const data = new FormData(event.target);
            data.append("accountnumber", accountNumber);
            data.append("customerid", customerId);
            DataContext.saveFormData(data);
            alert("Registration Sucess")
            history.push("/login");
        }
        event.preventDefault();

    }

    function getAutoGenAccNumber(){
        let randomNumber = Math.floor(Math.random()  * 900 + 100);
        return `R-${randomNumber}`;
    }

    function getAutoGenCustomerId(){       
        let randomNumber =  Math.floor(Math.random() * 10000000000000000)
        return randomNumber;
    }

    function isValidForm() {
        let isValid = true;
        for (const key in error) {
            if (isValid) {
                const element = error[key];
                if(element && element.state){
                    isValid = element.state;
                }
            }
        }
        return isValid;
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" onBlur={handleChange} className="form-control" id="name" required></input>
                    {(error.name && !error.name.state) ?
                        <small id="error-name" className="text-danger">
                            {error.name.message}
                        </small> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" onBlur={handleChange} className="form-control" id="username" required></input>
                    {(error.username && !error.username.state) ?
                        <small id="error-name" className="text-danger">
                            {error.username.message}
                        </small> : null}

                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" className="form-control" id="password" required></input>
                    <small id="pwdHelp" className="form-text text-muted">Use alphanumberic, no special characters.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <input type="password" className="form-control" onBlur={handleChange} id="cpassword" required></input>
                    <small id="cpwdHelp" className="form-text text-muted">Confirm the password.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" className="form-control" onBlur={handleChange} id="email" required></input>
                    {(error.email && !error.email.state) ?
                        <small id="error-name" className="text-danger">
                            {error.email.message}
                        </small> : null}
                </div>

                <div className="form-group">
                    <label htmlFor="contact">Contact</label>
                    <input type="number" name="contact" className="form-control" onBlur={handleChange} id="email" required></input>
                    {(error.contact && !error.contact.state) ?
                        <small id="error-name" className="text-danger">
                            {error.contact.message}
                        </small> : null}
                </div>

                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" className="form-control" onBlur={handleChange} id="address" required></input>
                </div>

                <div className="form-group">
                    <label htmlFor="account">Account</label>
                    <select className="form-control" onChange={handleSelect} value={accType} name="accType" required>
                        <option value="" disabled hidden>Select an account</option>
                        <option value="residencial">Residencial</option>
                        <option value="commercial">Commercial</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button><br/>
            </form>
        </div>
    );
}