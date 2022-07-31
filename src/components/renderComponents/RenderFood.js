import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addToCart } from '../../store/ActionCreater'
import { Link } from 'react-router-dom';

const RenderFood = ({ foodData, addToCart }) => {
    const [quantity, setQuantity] = useState(1);
    const onChangeHandler = (event) => {
        setQuantity(event.target.value);
    };
    let getQty = foodData.quantity.replace(/[^(0-9)]/g, '');
    let getWgt = foodData.weight.replace(/[^(0-9)('.')]/g, '');
    let maxAmount = (getQty / getWgt);
    return (
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
            <div className="_service_grover_grocery_content_inner">
                <div className="_service_grover_grocery_content1">
                    <div className="_service_grover_grocery_content_ic">
                        <Link to={`/menu/${foodData.category}/${foodData.id}`} >
                            <img src={foodData.image} alt="Image" width="100%" height="200px" />
                            <div className='topright'>{foodData.label}</div>
                        </Link>
                    </div>
                    <div className="_service_grover_grocery_content_txt1">
                        <h3 className="_service_grover_grocery_content_title1">{foodData.name}</h3>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                                {foodData.price}/{foodData.weight}
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 quantity'>
                                <button className="input-number-decrement" onClick={() => quantity === 0 ? setQuantity(quantity) : setQuantity(quantity - 1)}>–</button>
                                <input className="input-number" type="text" id='inputQty' value={quantity} onChange={onChangeHandler} />
                                <button className="input-number-increment" onClick={() => quantity <= maxAmount ? setQuantity(quantity + 1) : setQuantity(quantity)}>+</button>
                            </div>
                        </div>
                        <Button onClick={() => { addToCart(foodData.id, quantity) }} className='btn btn-danger mt-3 '>Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, qty) => dispatch(addToCart(id, qty))
    }
}
export default connect(null, mapDispatchToProps)(RenderFood);