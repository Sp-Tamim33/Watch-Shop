import React, { useEffect, useState } from 'react';
import './Shop.css'
import Watch from '../Watch/Watch';
import Details from '../Details/Details';

const Shop = () => {

    const [watchs, setWatch] = useState([]);
    const [click, setClick] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setWatch(data))
    }, [])




    return (
        <div className='main-div'>
            <div className="watch-cart">
                {
                    watchs.map(watch => <Watch key={watch.id} item={watch}></Watch>)
                }
            </div>
            <div className="watch-selected">
                <Details></Details>
            </div>
        </div>
    );
};

export default Shop;