import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './editUser.css'
import useDeepCompareEffect from "use-deep-compare-effect";
import {Button, Input} from "@material-ui/core";
export const EditUser = ({selectedUser, updateUser, clear, setSelectedUser}) => {

    useEffect(()=> {
        console.log("Print Something over change");
    }, [])

    const value = selectedUser.firstName;

    const handleUdpateSubmit = (e) => {
        e.preventDefault();
        updateUser(selectedUser);
    }
    return (
            <div className="edit-user">
                <div className="header-section">
                    <h2 className="main-head">Edit Users</h2>
                    <h4 className="secondary-head">Insert Operation.</h4>
                </div>
                <form onSubmit={handleUdpateSubmit}>
                <label className="label">Name:</label><br/>
                <input
                       defaultValue={value}
                       type="text"
                       placeholder="Select user..."
                       onChange={(e) =>
                           setSelectedUser({...selectedUser, firstName: e.target.value})}
                /><br/>
                <button className="btn-submit" type="submit">Update</button>
                <button onClick={() => clear()} className="btn-submit btn-submit-cancel">Clear</button>
                </form>
            </div>
    )
}
