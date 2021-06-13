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
        <div className="edit-user" data-testid="add-user-comp">
            <div className="header-section">
                <h2 className="main-head" data-testid="header-id">Add Users</h2>
                <h4 className="secondary-head">Insert Operation.</h4>
            </div>

            <form onSubmit={handleSubmit} data-testid="form-id">
                <label className="label">Name:</label><br/>
                <input
                    data-testid="input-field"
                    className="input-field"
                    type="text"
                    placeholder="Enter the Name"
                    value={userData.firstName}
                    onChange={(e) => setUserData({...userData, firstName: e.target.value})}
                /><br/>
                <button data-testid="sub-btn" className="btn-submit" type="submit">Submit</button>
                <Link to="/" className="btn-submit btn-submit-cancel">Cancel</Link>
            </form>
        </div>
    )
}
