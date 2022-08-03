import React from 'react';
import { connect } from 'react-redux';
import RenderFood from '../renderComponents/RenderFood';
import { handleInputChange, clearSearch } from '../../store/ActionCreater'
import { Form } from 'reactstrap';

function MenuFood(props) {
    const filter = props.filter;
    const search = props.search;

    const handleInput = (event) => {
        console.log(event.target.value);
        const target = event.target;
        const value = target.value;
        const name = target.name;
        props.handleInputChange(value, name);
    }
    const handleClick = () => {
        props.clearSearch();
    }

    if (filter !== undefined) {
        return (
            <div class="_service_grover_grocery_content_wrap">
                <div className="_nav_search_form1">
                    <button className="_search_ic" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewbox="0 0 16 16">
                            <path fill="#8B8B8B" d="M15.212 14.573l-3.808-3.96A6.44 6.44 0 0012.92 6.46 6.467 6.467 0 006.46 0 6.467 6.467 0 000 6.46a6.467 6.467 0 006.46 6.46 6.39 6.39 0 003.701-1.169l3.837 3.99a.838.838 0 001.191.023.844.844 0 00.023-1.19zM6.46 1.685a4.78 4.78 0 014.775 4.775 4.78 4.78 0 01-4.775 4.775A4.78 4.78 0 011.685 6.46 4.78 4.78 0 016.46 1.685z" />
                        </svg>
                    </button>
                    <Form>
                        <input className="_nav_search_input" type="text" placeholder="Search" name='search' onChange={handleInput} />
                        <button type="reset" class='_search_ic1' onClick={handleClick} ><img src='/assets/images/refresh.png' className='refresh_img' /></button>
                    </Form>
                </div>
                <div class="row">
                    <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 mx-auto">
                        <div class="row">
                            {props.food?.filter((product) => ((product.category === filter) && (product.name?.toLowerCase().includes(search.toLowerCase())))).map((item) => {
                                return (
                                    <RenderFood foodData={item} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div class="_service_grover_grocery_content_wrap">
                <div className="_nav_search_form1">
                    <button className="_search_ic" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewbox="0 0 16 16">
                            <path fill="#8B8B8B" d="M15.212 14.573l-3.808-3.96A6.44 6.44 0 0012.92 6.46 6.467 6.467 0 006.46 0 6.467 6.467 0 000 6.46a6.467 6.467 0 006.46 6.46 6.39 6.39 0 003.701-1.169l3.837 3.99a.838.838 0 001.191.023.844.844 0 00.023-1.19zM6.46 1.685a4.78 4.78 0 014.775 4.775 4.78 4.78 0 01-4.775 4.775A4.78 4.78 0 011.685 6.46 4.78 4.78 0 016.46 1.685z" />
                        </svg>
                    </button>
                    <Form>
                        <input className="_nav_search_input" type="text" placeholder="Search" name='search' onChange={handleInput} />
                        <button type="reset" class='_search_ic1' onClick={handleClick} ><img src='/assets/images/refresh.png' className='refresh_img' /></button>
                    </Form>
                </div>
                <div class="row">
                    <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 mx-auto">
                        <div class="row">
                            {props.food?.filter((product) => (product.name?.toLowerCase().includes(search.toLowerCase()))).map((item) => {
                                return (
                                    <RenderFood foodData={item} />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state => {
    return {
        search: state.search,
    }
})
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange: (value, name) => dispatch(handleInputChange(value, name)),
        clearSearch: () => dispatch(clearSearch()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuFood);