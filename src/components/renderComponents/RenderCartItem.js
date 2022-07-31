import React, { useState } from 'react';

import { connect } from 'react-redux';
import { Button, Input } from 'reactstrap';
import { removeFromCart, adjustQty } from '../../store/ActionCreater';

const RenderCartItem = ({ itemData, removeFromCart, adjustQty }) => {
    const [input, setInput] = useState(itemData.qty)
    const onChange = (event) => {
        console.log(event.target.value)
        setInput(event.target.value);
        adjustQty(itemData.id, event.target.value);
    }
    let price = itemData.price.replace(/[^(0-9)('.')]/g, '');
    let totalPrice = price * itemData.qty;
    let getQty = itemData.quantity.replace(/[^(0-9)]/g, '');
    let getWgt = itemData.weight.replace(/[^(0-9)('.')]/g, '');
    let maxAmount = (getQty / getWgt);
    let totalWeight = getWgt * input;
    return (
        <div className="row rowCart border-top border-bottom">
            <div className="row rowCart main align-items-center">
                <div className="col-2 col-2Cart"><img className="img-fluid imgCart" src={itemData.image} alt={itemData.name} /></div>
                <div className="col colCart">
                    <div className="row rowCart text-muted">{itemData.name}</div>
                </div>
                <div className="col quantity text-center">
                    <Input type="hidden" value={itemData.name} name='foodName'/>
                    <Input type="hidden" value={totalWeight} name='totalWeight'/>
                    <Input className="input-number text-center" type="number" id='inputQty' value={input} min='1' max={maxAmount} onChange={onChange} />
                </div>
                <div className="col colCart text-center">{totalWeight} Kg</div>
                <div className="col colCart priceItem text-center">$ {totalPrice.toFixed(2)}</div>
                <div className='col colCart text-center'>
                    <button onClick={() => removeFromCart(itemData.id)}>
                        <span className="close">&#128465;</span>
                    </button>
                </div>
            </div>
        </div>
    );

}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value)),
    }
}

export default connect(null, mapDispatchToProps)(RenderCartItem);