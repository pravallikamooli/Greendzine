import React from 'react';
import './footer.css'
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid d-flex flex-column min-vh-10'>
            <div className='row flex-grow-1'>
                <div className='col-6 ficon'>
                    <Link to="/home"><HomeIcon style={{ width: '30px', height: '30px', fill: '#36A546CC' }} /></Link>
                </div>
                <div className='col-6 ficon'>
                    <Link to="/usericon"><PersonIcon style={{ width: '30px', height: '30px', fill: '#36A546CC' }} /></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;
