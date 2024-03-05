import React, { useState } from 'react';
import Icon from './Asserts/Group 46.png';
import Logo from './Asserts/moptro logo.png';
import Usericon from '../Greendzine/Usericon.css'
import SearchIcon from '@mui/icons-material/Search';
const EmployeeList = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const employees = [
        { EMPID: 1, name: 'John Doe', DOB: '22-11-2001', Role: "Software Engineer" },
        { EMPID: 2, name: 'Arjun', DOB: '12-1-2001', Role: "Software Developer" },
        { EMPID: 3, name: 'Mahesh', DOB: '9-5-2002', Role: "Fullstack Developer" },
        { EMPID: 4, name: 'Pravallika', DOB: '2-10-2006', Role: "Software Engineer" },
        { EMPID: 5, name: 'Sasi', DOB: '29-7-2001', Role: "System Engineer" },
    ];

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    return (
        <div className='userpage'>
            <div className='icon'>
                <img src={Icon} alt='' />
            </div>
            <div className='logo'>
                <img src={Logo} alt='' />
                <div className='badge'>4</div>
            </div>
            <div className='search-container'>
                <div className='search'>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search by Employee Name"
                        onChange={handleInputChange}

                    />
                    <SearchIcon className="search-icon" />
                </div>
            </div>
            <div className='cards'>
                <div id="employeeList">
                    {employees.map((employee, index) => (
                        <div
                            key={index}
                            className="Card"
                            style={{ display: employee.name.toLowerCase().includes(searchQuery) ? 'block' : 'none',}}
                        >
                            {`EMP-ID: ${employee.EMPID}`}<br />
                            {`Name: ${employee.name}`}<br />
                            {`DOB: ${employee.DOB}`}<br />
                            {`Role: ${employee.Role}`}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EmployeeList;
