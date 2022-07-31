import React from 'react';
import { Link } from 'react-router-dom';
import RenderCategory from '../renderComponents/RenderCategory';

function MenuHeader(props) {
    const category = props.category;
    return (
        <section class="_service_grover_grocery_wrapper">
            <div class="_service_grover_grocery_wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div class="_service_grover_grocery_heading1">
                                <h5 class="_service_grover_grocery_heading_title">What we Have</h5>
                                <Link to="/menu"><h2 class="_service_grover_grocery_heading_title2">Food's Category</h2></Link>
                            </div>
                        </div>
                    </div>
                    <div class="_service_grover_grocery_content_wrap">
                        <div class="row">
                            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mx-auto">
                                <div class="row">
                                    <RenderCategory category={category} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MenuHeader;