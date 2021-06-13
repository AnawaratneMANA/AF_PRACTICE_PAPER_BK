import React, {useState, useEffect} from 'react';
import './AddItemsPage.css'
import {AddVehicle} from "../../AddVehicle/addVehicle";
import {List} from "../../List/list";
import VehiclesDetailsService from "../../../Service/vehicleDataService";

export const AddItemPage = () => {

    useEffect(()=> {
        retrieveValues();
    },[]);

    const [vehicles, setVehicles] = useState([]);

    const retrieveValues = () => {
        VehiclesDetailsService.displayAllVehicles()
            .then(response => {
                setVehicles(response.data.vehicles);
            }).catch(e => {
            console.log(e);
        });
    }

    return (
        <div className="container bg-transparent">
            <AddVehicle/>
            <List array={vehicles}/>
            <br/>

        </div>

    )
}
