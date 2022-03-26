import React from 'react';
import './Watch.css'

const Watch = (props) => {
    // console.log(props.item)
    // console.log(props);

    const { item, } = props;
    // console.log(item);

    const { name, img, price, rating } = item;



    return (
        <div>
            <div class="card shadow" style={{ width: '18rem' }}>
                <img src={img} class="card-img-top p-2" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">Name : {name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p class="card-text"><b>Price :</b> {price} $</p>
                    <p class="card-text"><b>Rating :</b> {rating}
                        <span><i class="fa fa-star" aria-hidden="true"></i></span>
                        <span><i class="fa fa-star" aria-hidden="true"></i></span>
                        <span><i class="fa fa-star" aria-hidden="true"></i></span>
                        <span><i class="fa fa-star" aria-hidden="true"></i></span>
                        <span><i class="fa fa-star" aria-hidden="true"></i></span>
                    </p>
                    <button class="btn btn-outline-primary w-100">Add to List <i class="fa fa-cart-plus" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Watch;