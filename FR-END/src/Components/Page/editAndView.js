import React, {useState, useEffect} from 'react';
import './editAndView.css'
import {EditUser} from "../EditUser/editUser";
import {UserList} from "../UserList/userList";
import UserDataService from '../../Service/userDataService';

export const EditAndView = () => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState([]);

    useEffect(()=> {
        retrieveValues();
    },[]);


    const retrieveValues = () => {
        UserDataService.displayAllUsers()
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
        UserDataService.deleteUsers(object._id).then(
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
            <UserList users={users} sendSelectedUser={sendSelectedUser} deleteUser={deleteUser}/>
        </div>
    )
}
