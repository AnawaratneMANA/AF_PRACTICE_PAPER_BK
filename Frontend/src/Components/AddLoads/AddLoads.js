import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './AddLoads.css'
import Select from "react-select";
import List from "reactstrap/es/List";
import LoadDataService from "../../Service/loadDataService";
import UserDataService from "../../Service/vehicleDataService";
export const AddLoads = () => {

    const [loadData, setLoadData] = useState({
        code: '',
        name: '',
        load: '',
        ampkm: '',
        vehicles: []
    });

    useEffect(()=> {
       retrieveValues();
    },[]);


    const retrieveValues = () => {
        LoadDataService.displayAllLoad()
            .then(response => {
                setLoadData(response.data);
            }).catch(e => {
            console.log(e);
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        LoadDataService.createLoad(loadData).then(
            response => {console.log(response.data);
            }
        ).catch(e => {
                console.log(e);
                alert(e.message);
            }
        );
    }
    const customTheme = (theme) => {
        return {
            ...theme,
            color:{
                ...theme.color,
                primary25: 'orange',
                primary: 'green'
            },
        }
    }

    const deleteUser = (object) => {
        console.log(object._id)
        UserDataService.deleteVehicle(object._id).then(
            response => {
                console.log(response);
                retrieveValues();
            }
        ).catch(e => {
            console.log(e);
        })
    }

    const optionSize = [
        {value: '1', label: "Vehicle 1"},
        {value: '2', label: "Vehicle 2"},
        {value: '3', label: "Vehicle 3"},
        {value: '4', label: "Vehicle 4"},
    ]

    return (
        <div className="edit-user" data-testid="add-user-comp">
            <div className="header-section">
                <h2 className="main-head" data-testid="header-id">Add Loads</h2>
                <h4 className="secondary-head">Insert Operation.</h4>
            </div>

            <form onSubmit={handleSubmit} data-testid="form-id">
                <label className="label">Code:</label><br/>
                <input
                    data-testid="input-field"
                    className="input-field"
                    type="text"
                    placeholder="Enter the Description"
                    value={loadData.code}
                    onChange={(e) => setLoadData({...loadData, code: e.target.value})}
                /><br/>

                <label className="label">Name:</label><br/>
                <input
                    data-testid="input-field-2"
                    className="input-field"
                    type="text"
                    placeholder="Enter"
                    value=""
                    onChange={(e) => setLoadData({...loadData, name: e.target.value})}
                /><br/>

                <label className="label">Load:</label><br/>
                <input
                    data-testid="input-field-2"
                    className="input-field"
                    type="text"
                    placeholder="Enter"
                    value=""
                    onChange={(e) => setLoadData({...loadData, load: e.target.value})}
                /><br/>

                <label className="label">Amount Per KM:</label><br/>
                <input
                    data-testid="input-field-2"
                    className="input-field"
                    type="text"
                    placeholder="Enter"
                    value=""
                    onChange={(e) => setLoadData({...loadData, ampkm: e.target.value})}
                /><br/>

                <label className="label">Select Vehicles:</label><br/>
                <Select
                    options={optionSize}
                    theme={customTheme}
                    className="mb-3"
                    isMulti
                    autoFocus
                    placeholder="Select Vehicle"
                    isSearchable
                    onChange={setLoadData}
                />
                <button data-testid="sub-btn" className="btn-submit" type="submit">Add</button>
                <Link to="/" className="btn-submit btn-submit-cancel">Cancel</Link>
            </form>

            <List array={loadData} deleteuser={deleteUser}/>


        </div>
    )
}
