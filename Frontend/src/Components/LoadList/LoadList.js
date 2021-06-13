import React, {useEffect, useState} from 'react'
import './LoadList.css'
import {Button} from "@material-ui/core";
export const LoadList = ({array, sendSelectedUser, deleteUser}) => {

    useEffect(() => {

    }, [array])

    //Testing Array with Dummy values.
    const products = [
        //Dummy values.
        { id: 1, name: "DragonFly", description: "Apple M1 Macbook Air", price: '239,000/=', image: 'https://cdn.pocket-lint.com/r/s/970x/assets/images/152137-laptops-review-apple-macbook-pro-2020-review-image1-qy49zfkn53-jpg.webp'},
        { id: 2, name: "Zenbook", description: "Apple M1 Macbook Pro", price: '345,000/=', image: 'https://i.pcmag.com/imagery/reviews/05CbcW9cP4o0rqbCnVB2OFZ-1..1584707541.jpg'},
        { id: 3, name: "Latitude", description: "HP Elitebook 840", price: '320,000/=', image: 'https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_HP_Elitebook_840_G5.jpg'}
    ]

    return (
        <div className="edit-user-table">
            <div className="header-section">
                <h2 className="main-head">Load View.</h2>
                <h4 className="secondary-head">Insert Operation.</h4>
            </div>

            <div className="tableFixHead">
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>FirstName</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {array.map((item) => (
                            <tr>
                                <td>{item._id}</td>
                                <td>{item.code}</td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

