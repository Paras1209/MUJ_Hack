import React from 'react';
// import navbarImage from '../assets/Navbar.png'; // Import the image from assets folder
import navbarImage2 from '../assets/Navbar2.png'; // Import the image from assets folder
const Navbar = () => {
    return (
        <div className="w-full">
            <img src={navbarImage2} alt="Navbar Banner"     style={{ height: 'auto', objectFit: 'contain', width: '100%' }} 
 />
        </div>
    );
};

export default Navbar;
