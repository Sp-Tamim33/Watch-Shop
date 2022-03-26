import React from 'react';
import './Details.css';
import List from '../List/List'

const Details = (props) => {

    // console.log(props.item.name)
    const { item } = props;

    // if (item.length > 4) {
    //     return (
    //         alert("you can't add anymone!")
    //     );
    // }


    return (
        <div className='details-div'>
            <h2>Selected Watch : </h2>
            <div className="selected-list">
                {
                    item.map(one => <List name={one.name} img={one.img} key={one.id} />)
                }
            </div>
            <button class='btn btn-lg btn-outline-primary mt-5 me-5'>Choose 1</button>
            <button class='btn btn-lg btn-outline-primary mt-5'>Reset</button>
        </div>
    );
};

export default Details;