import React, {useState, useEffect} from 'react';
import './MultiSelectPage.css'
import {EditUser} from "../../EditUser/editUser";
import {List} from "../../List/list";
import UserDataService from '../../../Service/vehicleDataService';

export const MultiSelectPage = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);

    useEffect(()=> {
        retrieveValues();
    },[]);


    const retrieveValues = () => {
        UserDataService.displayAllVehicles()
            .then(response => {
                setUsers(response.data.user);
            }).catch(e => {
            console.log(e);
        });
    }

    const sendSelectedUser = (object) => {
        setSelectedUser(object);
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

    const updateUser = (updatedUser) => {
        console.log(updatedUser);
        UserDataService.updateUser(updatedUser)
            .then(response => {
                console.log(response)
                retrieveValues();
            }).catch(e => {
            console.log(e);
        });
    }

    const clear = () => {
        let object =  {
            _id: '',
            firstName: ''
        }
        setSelectedUser(object);
    }

    return (
        <div className="container">
            <EditUser selectedUser={selectedUser} updateUser={updateUser} setSelectedUser={setSelectedUser}  clear={clear}/>
            {/*<List users={users} sendSelectedUser={sendSelectedUser} deleteUser={deleteUser}/>*/}
        </div>
    )
}
