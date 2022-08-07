import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'reactstrap';
import { baseUrl } from '../shared/baseUrl';
import { addToCart, addComment } from '../store/ActionCreater'
import RenderComment from './renderComponents/RenderComment';

function FoodDetail(props) {
    const [quantity, setQuantity] = useState(1);
    const [cm, setCm] = useState("");

    const onChangeHandler = (event) => {
        setQuantity(event.target.value);
    };
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    const handleSubmit = (id) => {
        const newComment = {
            id: props.comments?.length,
            foodId: id,
            comment: cm,
        }
        addComment(newComment);
        setCm('');
        return false;
    }
    const addComment = (newComment) => {
        return fetch(baseUrl + 'comments', {
            method: 'POST',
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
            .then(response => {
                if (response.ok) {
                    props.addComment(newComment);
                }
            });
    }
    const handleInputChange = (event) => {
        const value = event.target.value;
        setCm(value);
    }

    return (
        props.food?.filter((food) => (food.id == props.match.params.foodID)).map((item) => {
            let getQty = item.quantity.replace(/[^(0-9)]/g, '');
            let getWgt = item.weight.replace(/[^(0-9)('.')]/g, '');
            let maxAmount = (getQty / getWgt);
            return (
                <div className='container'>
                    <div className="wrapper">
                        <Link to="/menu" className='autoMargin'>
                            <div className="">
                                <span to="/menu" className="aCart">&#x2190;</span>
                                <span className="text-muted">Back to shop</span>
                            </div>
                        </Link>
                        <div className='detailFood'>
                            <div className="product-img">
                                <img src={item.image} height="475" width="327" alt={item.name} />
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
                        <div className='autoMargin'>
                            <div className="row container cm">
                                <div className='col col-md-10'>
                                    <Input
                                        type="text"
                                        name="cm"
                                        value={cm}
                                        onChange={handleInputChange}
                                        placeholder='Comment'
                                    />
                                </div>
                                <div className='col col-md-2'>
                                    <Button className='addBtn' onClick={() => handleSubmit(item.id)} type='button'>Add</Button>
                                </div>
                                {props.comment?.filter(cmt => cmt.foodId === item.id).map(item => {
                                    return (
                                        <section>
                                            <div class="container">
                                                <div class="col-md-12 col-lg-10">
                                                    <div class="cardComment text-dark">
                                                        <RenderComment commentData={item} />
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    )
                                })}
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
        comment: state.comment,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id, qty) => dispatch(addToCart(id, qty)),
        addComment: (comment) => dispatch(addComment(comment))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FoodDetail);
