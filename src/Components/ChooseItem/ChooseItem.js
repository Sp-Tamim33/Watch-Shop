import React from 'react';
import './ChooseItem.css'

const ChooseItem = (props) => {
    console.log(props.item);
    return (
        <div className='mt-2'>
            <div className='choose-div'>
                <img src={props.item.img} alt="" />
                <p>{props.item.name}</p>

            </div>
        </div>
    );
};

export default ChooseItem;