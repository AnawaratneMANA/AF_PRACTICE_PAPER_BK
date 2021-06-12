import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './addUser.css'
import UserDataService from '../../Service/userDataService';
export const AddUser = () => {

    const [userData, setUserData] = useState({
       firstName: ''
    });

    function handleSubmit(e) {
        e.preventDefault();
        UserDataService.createUser(userData).then(
            response => {
                setUserData({
                    firstName: response.data.firstName,
                });
                console.log(response.data);
            }
        ).catch(e => {
                console.log(e);
                alert(e.message);
            }
        );
    }

    return (
        <div className="edit-user">

            <div className="header-section">
                <h2 className="main-head">Add Users</h2>
                <h4 className="secondary-head">Insert Operation.</h4>
            </div>

            <form onSubmit={handleSubmit}>
                <label className="label">Name:</label><br/>
                <input
                    className="input-field"
                    type="text"
                    placeholder="Enter the Name"
                    value={userData.firstName}
                    onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                /><br/>
                <button className="btn-submit" type="submit">Submit</button>
                <Link to="/" className="btn-submit btn-submit-cancel">Cancel</Link>
            </form>
        </div>
    )
}
