import React, {useEffect, useState} from 'react';
import './editUser.css'
import Select from 'react-select';
export const EditUser = ({selectedUser, updateUser, clear, setSelectedUser}) => {

    const [selectedFiles, setSelectedFiles] = useState([]);

    useEffect(()=> {
        console.log("Print Something over change");
    }, [])

    const value = selectedUser.firstName;
    const print = () => {
        console.log(selectedFiles);
    }
    const handleUdpateSubmit = (e) => {
        e.preventDefault();
        updateUser(selectedUser);
    }

    const optionSize = [
        {value: '1', label: "Item 1"},
        {value: '2', label: "Item 2"},
        {value: '3', label: "Item 3"},
        {value: '4', label: "Item 4"},
    ]

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

                <Select
                    options={optionSize}
                    theme={customTheme}
                    className="mb-3"
                    isMulti
                    autoFocus
                    placeholder="Select Vehicle"
                    isSearchable
                    onChange={setSelectedFiles}
                />

                <button className="btn-submit" type="submit">Update</button>
                <button onClick={() => clear()} className="btn-submit btn-submit-cancel">Clear</button>
                    <button onClick={print}>Print</button>
                </form>
            </div>
    )
}
