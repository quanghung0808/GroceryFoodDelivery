import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../store/ActionCreater'

function FoodDetail(props) {
    const [quantity, setQuantity] = useState(1);
    const onChangeHandler = (event) => {
        setQuantity(event.target.value);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        props.food?.filter((food) => (food.id == props.match.params.foodID)).map((item) => {
            let getQty = item.quantity.replace(/[^(0-9)]/g, '');
            let getWgt = item.weight.replace(/[^(0-9)('.')]/g, '');
            let maxAmount = (getQty / getWgt);
            return (
                <div className="wrapper">
                    <Link to="/menu">
                        <div className="back-to-shop">
                            <span to="/menu" className="aCart">&#x2190;</span>
                            <span className="text-muted">Back to shop</span>
                        </div>
                    </Link>
                    <div className="product-img">
                        <img src={item.image} height="475" width="327" />
                    </div>
                    <div className="product-info">
                        <div className="product-text">
                            <h1><b>{item.name}</b></h1>
                            <h2>{item.category} <span className='label'>{item.label}</span></h2>
                            <p> - Origin: {item.origin}</p>
                            <p> - {item.description}</p>
                            <div className='detailQuantity quantity'>
                                <button className="input-number-decrement" onClick={() => quantity === 0 ? setQuantity(quantity) : setQuantity(quantity - 1)}>–</button>
                                <input className="input-number" type="text" id='inputQty' value={quantity} onChange={onChangeHandler} />
                                <button className="input-number-increment" onClick={() => quantity <= maxAmount ? setQuantity(quantity + 1) : setQuantity(quantity)}>+</button>
                                <span className="priceWeight">{item.price}/{item.weight}</span>
                            </div>
                            <div className="product-price-btn">
                                <button type="button" onClick={() => { props.addToCart(item.id, quantity) }}>Add to cart</button>
                            </div>
                        </div>

                    </div>
                </div>
            );
        })
    )
}
const mapStateToProps = (state) => {
    return {
        food: state.food,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, qty) => dispatch(addToCart(id, qty))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodDetail);
