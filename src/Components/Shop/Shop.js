import React, { useEffect, useState } from 'react';
import './Shop.css'
import Watch from '../Watch/Watch';

const Shop = () => {

    const [watchs, setWatch] = useState([]);

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
            <div className="watch-select"></div>
        </div>
    );
};

export default Shop;