import React from 'react';
import '../Greendzine/Home.css'
import Icon from './Asserts/Group 46.png';
import Logo from './Asserts/moptro logo.png';
import Footer from './footer';
const Home = () => {
    return (
        <>
            <div className='progressPage'>
                <div className='icon'>
                    <img src={Icon} alt='' />
                </div>
                <div className='logo'>
                    <img src={Logo} alt='' />
                    <div className='badge'>4</div>
                </div>

                <div className='prog'>
                    <div className='emp'>
                        <h5>Employee Productivity Dashboard</h5>
                    </div>
                    <div className='label d-flex'>
                        <p>productivity on Monday</p>
                        <p className='ml-auto mr-3' style={{color: '#36A546'}}>4%</p>
                    </div>
                    <div className='d-flex align-items-center progressBarBox'>
                        <div class="progress" style={{ width: '3%', height: '11px' }}>
                        </div>
                    </div>
                    <div className='label d-flex'>
                        <p>productivity on Tuesday</p>
                        <p className='ml-auto mr-3' style={{color: '#36A546'}}>92%</p>
                    </div>
                    <div className='d-flex align-items-center progressBarBox'>
                        <div class="progress" style={{ width: '50%', height: '11px' }}>
                        </div>
                    </div>
                    <div className='label d-flex'>
                        <p>productivity on Wednesday</p>
                        <p className='ml-auto mr-3' style={{color: '#36A546'}}>122%</p>
                    </div>
                    <div className='d-flex align-items-center progressBarBox'>
                        <div class="progress" style={{ width: '65%', height: '11px' }}>
                        </div>
                    </div>
                    <div className='label d-flex'>
                        <p>productivity on Thursday</p>
                        <p className='ml-auto mr-3' style={{color: '#36A546'}}>93%</p>
                    </div>
                    <div className='d-flex align-items-center progressBarBox'>
                        <div class="progress" style={{ width: '45%', height: '11px' }}>
                        </div>
                    </div>
                    <div className='label d-flex'>
                        <p>productivity on Friday</p>
                        <p className='ml-auto mr-3' style={{color: '#36A546'}}>89%</p>
                    </div>
                    <div className='d-flex align-items-center progressBarBox'>
                        <div class="progress" style={{ width: '45%', height: '11px' }}>
                        </div>
                    </div>
                    <div className='label d-flex'>
                        <p>productivity on Saturday</p>
                        <p className='ml-auto ' style={{color: '#36A546'}}>98%</p>
                    </div>
                    <div className='d-flex align-items-center progressBarBox'>
                        <div class="progress" style={{ width: '50%', height: '11px' }}>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home