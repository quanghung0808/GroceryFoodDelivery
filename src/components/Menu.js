import React, { useEffect } from 'react';
import MenuFood from './smallComponents/MenuFood';
import MenuHeader from './smallComponents/MenuHeader';
import { connect } from 'react-redux';

function Menu(props) {

    useEffect(() => {
        if (props.search === '') {
            window.scrollTo(0, 0);
        }
        else window.scrollTo(0, 650);
    }, [])

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
        category: state.category,
        search: state.search
    }
}
export default connect(mapStateToProps)(Menu);