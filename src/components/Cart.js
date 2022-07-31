import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormFeedback, Input } from 'reactstrap';
import RenderCartItem from './renderComponents/RenderCartItem';
import emailjs from 'emailjs-com';
import { handleBlur, handleInputChange } from '../store/ActionCreater';

function Cart(props) {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;
        props.cart.forEach(item => {
            let regexPrice = item.price.replace(/[^(0-9)('.')]/g, '');
            items += item.qty;
            price += (item.qty * regexPrice);
        })
        setTotalPrice(price);
        setTotalItems(items);
    }, [props.cart, totalPrice, totalItems, setTotalItems, setTotalPrice])

    const validate = (name, email, telnum, address) => {
        const errors = {
            name: '',
            telnum: '',
            email: '',
            address: '',
        };
        if (props.touched.name && name.length < 3)
            errors.name = 'Name should be at least 3 characters';
        const regTelnum = /((09|03|07|08|05)+([0-9]{8})\b)$/;
        if (props.touched.telnum && !regTelnum.test(telnum))
            errors.telnum = 'Invalid Tel.Number';
        const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (props.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';
        else if (props.touched.email && !regEmail.test(email))
            errors.email = 'Invalid Email Address';
        if (props.touched.address && address.length < 1)
            errors.address = 'You must input a address';
        return errors;
    }

    const handleInputChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        props.handleInputChange(value, name);
    }
    const handleSubmit = (event) => {
        const target = event.target;
        alert(target);
        console.log(target)
        emailjs.sendForm('gmail', 'template_food', target, 'tTZgK80dCV-FMhGZA')
    }
    const handleBlur = (event) => {
        props.handleBlur(event.target.name);
    }
    const errors = validate(props.name, props.email, props.telnum, props.address);
    return (
        <div className="card">
            <Form onSubmit={handleSubmit}>
                <div className="row rowCart">
                    <div className="col-md-8 cart">
                        <div className="titleCart">
                            <div className="row">
                                <div className="col"><h4><b>Cart</b></h4></div>
                            </div>
                        </div>
                        {props.cart.map((item) => {
                            return (
                                <RenderCartItem itemData={item} />
                            )
                        })}
                        <Link to="/menu">
                            <div className="back-to-shop">
                                <span to="/menu" className="aCart">&#x2190;</span>
                                <span className="text-muted">Back to shop</span>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-4 summary">
                        <div><h5 className="hCart"><b>Summary</b></h5></div>
                        <hr className='hrCart' />
                        <div className="row rowCart">
                            <div className="col colCart">THERE ARE <b>{totalItems} ITEMS </b> IN YOUR CART</div>
                        </div>
                        <div className="row rowCart checkout">
                            <Input type='hidden' name="totalPrice" value={totalPrice.toFixed(2)} />
                            <div className="col colCart">TOTAL PRICE</div>
                            <div className="col colCart text-right"><b>$ {totalPrice.toFixed(2)}</b></div>
                        </div>
                        <Input
                            type="text"
                            name="name"
                            value={props.name}
                            valid={props.name === '' ? false : errors.name === ''}
                            invalid={errors.name !== ''}
                            onBlur={handleBlur}
                            onChange={handleInputChange}
                            placeholder='Full Name'
                        />
                        <FormFeedback>{errors.name}</FormFeedback>
                        <Input
                            type="text"
                            name="telnum"
                            value={props.telnum}
                            valid={props.telnum === '' ? false : errors.telnum === ''}
                            invalid={errors.telnum !== ''}
                            onBlur={handleBlur}
                            onChange={handleInputChange}
                            placeholder='Phone Number'
                        />
                        <FormFeedback>{errors.telnum}</FormFeedback>
                        <Input
                            type="email"
                            name="email"
                            value={props.email}
                            valid={props.email === '' ? false : errors.email === ''}
                            invalid={errors.email !== ''}
                            onBlur={handleBlur}
                            onChange={handleInputChange}
                            placeholder='Email Address'
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                        <Input
                            type="textarea"
                            name="address"
                            id="address"
                            valid={props.address === '' ? false : errors.address === ''}
                            invalid={errors.address !== ''}
                            value={props.address}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            placeholder='Address'
                        />
                        <FormFeedback>{errors.address}</FormFeedback>
                        <Button className="btn btnCart" type="submit">CHECKOUT</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        name: state.name,
        telnum: state.telnum,
        email: state.email,
        address: state.address,
        touched: {
            name: state.touched?.name,
            telnum: state.touched?.telnum,
            email: state.touched?.email,
            address: state.touched?.email,
        }
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleBlur: (name) => dispatch(handleBlur(name)),
        handleInputChange: (value, name) => dispatch(handleInputChange(value, name)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);