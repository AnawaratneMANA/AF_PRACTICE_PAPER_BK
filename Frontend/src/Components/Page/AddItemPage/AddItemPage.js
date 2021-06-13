import React, {useState, useEffect} from 'react';
import './AddItemsPage.css'
import {AddVehicle} from "../../AddVehicle/addVehicle";
import {UserList} from "../../UserList/userList";

export const AddItemPage = () => {

    return (
        <div className="container bg-transparent">
            <AddVehicle/>
        </div>

    )
}
