import React, { useState } from 'react';
import './Details.css';
import List from '../List/List'
import ChooseItem from '../ChooseItem/ChooseItem';

const Details = (props) => {

    // console.log(props.item.name)
    const { item } = props;


    // reset lists 
    const reset = () => {
        document.getElementById('lists').textContent = '';
        document.getElementById('choosen-item').textContent = '';
    }



    // choose button 

    const [randomItem, setRandomItem] = useState([]);
    const chooseButton = (item) => {
        var randomItem = item[Math.floor(Math.random() * item.length)];
        // console.log(randomItem.name);
        setRandomItem(randomItem);
    }


    return (
        <div className='details-div'>
            <h2>Selected Watch : </h2>
            <div className="selected-list" id='lists'>
                {
                    item.map(one => <List name={one.name} img={one.img} key={one.id} />)
                }
            </div>
            <button onClick={() => chooseButton(item)} className='btn btn-lg btn-outline-primary mt-5 me-5'>Choose 1</button>
            <button onClick={reset} className='btn btn-lg btn-outline-primary mt-5' id='reset'>Reset</button>

            <div className="choosen-item">
                <h2 className='mb-3 mt-5'>Choosen Item : </h2>
                <div id='choosen-item'>
                    <ChooseItem item={randomItem} />
                </div>
            </div>
        </div>
    );
};

export default Details;