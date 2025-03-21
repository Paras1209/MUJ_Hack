import React from 'react';
import navbarImage from '../assets/Navbar.png'; // Import the image from assets folder
const Navbar = () => {
    return (
        <div className="w-full">
            <img src={navbarImage} alt="Navbar Banner"     style={{ height: '150px', objectFit: 'contain', width: '100%' }} 
 />
        </div>
    );
};

export default Navbar;
