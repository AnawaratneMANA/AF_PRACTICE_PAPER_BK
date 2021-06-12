import React from 'react';
import {Link} from 'react-router-dom'
import './heading.css'
export const Heading = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to ="/" className ="home-icon">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link" to ="/add">Add User</Link>
                            <Link className="nav-link" to ="/edit/id">Edit User & Show</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
