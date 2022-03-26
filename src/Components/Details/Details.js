import React from 'react';
import List from '../List/List';
import './Details.css'

const Details = (props) => {


    return (
        <div className='details-div'>
            <h2>Selected Watch : </h2>
            <div className="selected-list">

            </div>
            <button class='btn btn-lg btn-outline-primary mt-5 me-5'>Choose 1</button>
            <button class='btn btn-lg btn-outline-primary mt-5'>Reset</button>
        </div>
    );
};

export default Details;