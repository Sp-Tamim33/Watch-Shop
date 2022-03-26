import React, { useEffect, useState } from 'react';
import './Shop.css'
import Watch from '../Watch/Watch';
import Details from '../Details/Details';

const Shop = () => {

    const [watchs, setWatch] = useState([]);
    let [click, setClick] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatch(data))
    }, [])

    const addToList = (item) => {
        // console.log(item.name, item.id)
        const newItem = [...click, item];
        setClick(newItem)

    }

    // console.log(click)

    // limit item 4
    if (click.length > 4) {
        click.splice(-1, 1);
        alert("you can add only 4 item ! try again !")
    }



    return (
        <div className='main-div'>
            <div className="watch-cart">
                {
                    watchs.map(watch => <Watch key={watch.id} item={watch} addToList={addToList}></Watch>)
                }
            </div>
            <div className="watch-selected">
                <Details item={click}></Details>
            </div>
        </div>
    );
};

export default Shop;