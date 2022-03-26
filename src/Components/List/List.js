import React from 'react';
import './List.css'

const List = (props) => {

    const { name, img } = props;



    return (
        <div className='list-div'>
            <img src={img} alt="" />
            <p>{name}</p>
        </div>
    );
};

export default List;