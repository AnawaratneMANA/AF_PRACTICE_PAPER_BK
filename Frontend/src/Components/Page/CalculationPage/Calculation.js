import React, {useState, useEffect} from 'react';
import './Calculation.css'
import {Link} from "react-router-dom";
import LoadDataService from "../../../Service/loadDataService";

export const CalculationPage = () => {

    const [calData, setCalData] = useState({
        kilometers: '5',
        costPerKm: '200',
        noOfvehicles: '2'
    });


    const json = {
        kilometers: '5',
        costPerKm: '200',
        noOfvehicles: '2'
    }

    function handleSubmit(e) {
        e.preventDefault();
        LoadDataService.Calculation({
            "kilometers": 6,
            "costPerKm": 200,
            "noOfvehicles": 2
        }).then(
            response => {
                console.log(response.data);
                alert(response.data);
            }
        ).catch(e => {
                console.log(e);
                alert(e.message);
            }
        );
    }


    return (
        <div className="container">
            <div className="edit-user" data-testid="add-user-comp">
                <div className="header-section">
                    <h2 className="main-head" data-testid="header-id">Add Vehicle</h2>
                    <h4 className="secondary-head">Insert Operation.</h4>
                </div>

                <form onSubmit={handleSubmit} data-testid="form-id">
                    <label className="label">Name:</label><br/>
                    <input
                        data-testid="input-field"
                        className="input-field"
                        type="text"
                        placeholder="Enter the Name"
                        value={calData.kilometers}
                        onChange={(e) => setCalData({...calData, kilometers: e.target.value})}
                    /><br/>
                    <label className="label">Description:</label><br/>
                    <input
                        data-testid="input-field-2"
                        className="input-field"
                        type="text"
                        placeholder="Enter the Description"
                        value={calData.costPerKm}
                        onChange={(e) => setCalData({...calData, costPerKm: e.target.value})}
                    /><br/>
                    <label className="label">Name:</label><br/>
                    <input
                        data-testid="input-field-2"
                        className="input-field"
                        type="text"
                        placeholder="Enter the Description"
                        value={calData.noOfVehicles}
                        onChange={(e) => setCalData({...calData, noOfVehicles: e.target.value})}
                    /><br/>


                    <button data-testid="sub-btn" className="btn-submit" type="submit">Add</button>
                    <Link to="/" className="btn-submit btn-submit-cancel">Cancel</Link>
                </form>


            </div>
        </div>
    )
}
