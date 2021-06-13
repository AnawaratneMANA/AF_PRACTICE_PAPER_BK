import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './addVehicle.css'
import VehicleDataService from '../../Service/vehicleDataService';
export const AddVehicle = () => {

    const [vehicleData, setVehicleData] = useState({
       name: '',
       description: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        VehicleDataService.createVehicle(vehicleData).then(
            response => {console.log(response.data);
            }
        ).catch(e => {
                console.log(e);
                alert(e.message);
            }
        );
    }

    return (
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
                    value={vehicleData.name}
                    onChange={(e) => setVehicleData({...vehicleData, name: e.target.value})}
                /><br/>
                <label className="label">Description:</label><br/>
                <input
                    data-testid="input-field-2"
                    className="input-field"
                    type="text"
                    placeholder="Enter the Description"
                    value={vehicleData.description}
                    onChange={(e) => setVehicleData({...vehicleData, description: e.target.value})}
                /><br/>


                <button data-testid="sub-btn" className="btn-submit" type="submit">Add</button>
                <Link to="/" className="btn-submit btn-submit-cancel">Cancel</Link>
            </form>
        </div>
    )
}
