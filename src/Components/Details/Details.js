import React from 'react';
import './Details.css';
import List from '../List/List'

const Details = (props) => {

    // console.log(props.item.name)
    let { item } = props;


    // reset lists 
    const reset = () => {
        document.getElementById('lists').textContent = '';
    }

    return (
        <div className='details-div'>
            <h2>Selected Watch : </h2>
            <div className="selected-list" id='lists'>
                {
                    item.map(one => <List name={one.name} img={one.img} key={one.id} />)
                }
            </div>
            <button class='btn btn-lg btn-outline-primary mt-5 me-5'>Choose 1</button>
            <button onClick={reset} class='btn btn-lg btn-outline-primary mt-5' id='reset'>Reset</button>
        </div>
    );
};

export default Details;