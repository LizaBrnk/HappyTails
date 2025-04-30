import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button'; // Assuming this is the original Button

const DonateButton = (props) => {
    return (
        <Link to='/donate' className='btn-mobile'>
            <Button {...props} />
        </Link>
    );
};

export default DonateButton;