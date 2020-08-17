import React from 'react';
export default function Dashboard() {
    let AccountType = "Residential"
    let BillAmount = 1200;
    let BillDate = "16-AUG-2020"
    let BillIssueDate = "16-AUG-2020"
    let Billcycle = "16-JUL-2020 to 15-AUG-2020";

    return (
        <div className="container">
            <h2>Dashboard</h2>

            <div className="form-group">
                <label className="form-control">Account Type: {AccountType}</label>
            </div>
            <div className="form-group">
                <label className="form-control">Bill Amount: Rs.{BillAmount}</label>
            </div>
            <div className="form-group">
                <label className="form-control">Bill Date: {BillDate}</label>
            </div>
            <div className="form-group">
                <label className="form-control">Bill IssueDate: {BillIssueDate}</label>
            </div>
            <div className="form-group">
                <label className="form-control">Bill cycle: {Billcycle}</label>
            </div>
        </div>
    );
}