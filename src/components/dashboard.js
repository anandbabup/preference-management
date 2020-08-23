import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import * as d3 from 'd3';


export default function Dashboard(props) {
    const history = useHistory();

    let AccountType = "Residential"
    let BillAmount = 1200;
    let BillDate = "16-AUG-2020"
    let BillIssueDate = "16-AUG-2020"
    let Billcycle = "16-JUL-2020 to 15-AUG-2020";

    const chart = () => {
        let data = [{ year: 2015, value: 200 },
        { year: 2016, value: 160 },
        { year: 2017, value: 180 }];
        var svg = d3.select("#chart"),
            margin = 200,
            width = svg.attr("width") - margin,
            height = svg.attr("height") - margin


        var xScale = d3.scaleBand().range([0, width]).padding(0.4),
            yScale = d3.scaleLinear().range([height, 0]);

        var g = svg.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

        // d3.csv("data.csv", function (error, data) {
        //     if (error) {
        //         throw error;
        //     }        


        xScale.domain(data.map(function (d) { return d.year; }));
        yScale.domain([0, d3.max(data, function (d) { return d.value; })]);

        g.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(xScale).tickFormat(function (d) {
                return d;
            }));

        g.append("g")
            .call(d3.axisLeft(yScale).tickFormat(function (d) {
                return "$" + d;
            }).ticks(10));


        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function (d) { return xScale(d.year); })
            .attr("y", function (d) { return yScale(d.value); })
            .attr("width", xScale.bandwidth())
            .attr("height", function (d) { return height - yScale(d.value); });

    }

    useEffect(() => {
        if (!props.user.isAuthenticated) {
            history.push("/login");
        }

        chart();
    })



    return (
        <div className="row">
            <div className="col">
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
                </div></div>
            <div className="col">
                Subscription :  Economy - 01
                <svg id="chart" width="600" height="500"></svg>
            </div>
        </div>
    );
}