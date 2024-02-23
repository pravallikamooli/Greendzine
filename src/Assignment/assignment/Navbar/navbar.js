import React from 'react'
import { Link } from 'react-router-dom'
const navbar = () => {
    return (
        <div className="nav d-flex align-items-center" >
            <div className="container-fluid">
                <div className="row position-relative">
                    <ul className="list list-inline mb-0">

                        <li className="list-inline-item">
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/people">People</Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="/planet">Planet</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default navbar