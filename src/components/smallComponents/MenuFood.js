import React from 'react';
import RenderFood from '../renderComponents/RenderFood';

function MenuFood(props) {
    const filter = props.filter;
    if (filter !== undefined) {
        return (
            <div>
                <div class="_service_grover_grocery_content_wrap">
                    <div class="row">
                        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 mx-auto">
                            <div class="row">
                                {props.food?.filter((cate) => (cate.category === filter)).map((item) => {
                                    return (
                                        <RenderFood foodData={item} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <div class="_service_grover_grocery_content_wrap">
                    <div class="row">
                        <div class="col-xl-10 col-lg-12 col-md-12 col-sm-12 mx-auto">
                            <div class="row">
                                {props.food?.map((item) => {
                                    return (
                                        <RenderFood foodData={item} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenuFood;