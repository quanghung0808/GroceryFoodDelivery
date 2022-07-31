import React from 'react';
import MenuFood from './smallComponents/MenuFood';
import MenuHeader from './smallComponents/MenuHeader';
import { connect } from 'react-redux';

function Menu(props) {

    return (
        <div>
            <MenuHeader category={props.category} />
            <MenuFood food={props.food} category={props.category} filter={props.match.params.category} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        food: state.food,
        category: state.category
    }
}
export default connect(mapStateToProps)(Menu);