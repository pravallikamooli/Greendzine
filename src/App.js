
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Greendzine/Home';
import Login from './Greendzine/Login';
import Usericon from './Greendzine/Usericon';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/usericon" element={< Usericon/>} />
      </Routes>
    </Router>
  );
};

export default App;
// import React from 'react'
// // import Map from './Assignment/assignment/practice/map'
// // import Spread from './Assignment/assignment/practice/spread'
// import { Route, Router, Link } from 'react-router-dom'
// import { UserDetails } from './Assignment/assignment/practice/UserDetails'
// function App() {
//   return (
//     <div>
//       {/* <Map /> */}
//       {/* </Spread /> */}
//       <Router>
//         <Route path=':userId' element={<UserDetails/>} />
//       </Router>
//     </div>
//   )
// }

// export default App