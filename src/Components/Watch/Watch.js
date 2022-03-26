import React from 'react';
import './Watch.css'

const Watch = (props) => {
    // console.log(props.item)
    // console.log(props);

    const { item, addToList } = props;
    // console.log(item);

    const { name, img, price, rating, } = item;




    return (
        <div>
            <div className="card shadow" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top p-2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name : {name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <p className="card-text"><b>Price :</b> {price} $</p>
                    <p className="card-text"><b>Rating :</b> {rating}
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                    </p>
                    <button onClick={() => addToList(item)} className="btn btn-outline-primary w-100">Add to List <i className="fa fa-cart-plus" aria-hidden="true"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Watch;