import React from 'react';
import { Link } from 'react-router-dom';

function FeatureTwo(props) {
    return (
        <section class="_feature_2_grover_grocery_wrapper">
            <div class="_feature_2_grover_grocery_wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 order-last order-lg-first">
                            <div class="_feature_2_grover_grocery_content">
                                <div class="_feature_2_grover_grocery_content_txt">
                                    <h5 class="_feature_2_grover_grocery_content_title">HOME DELIVERY</h5>
                                    <h2 class="_feature_2_grover_grocery_content_title2">Sit at Home We Will Take Care Your Order</h2>
                                    <p class="_feature_2_grover_grocery_content_para">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos </p>
                                </div>
                                <div class="_feature_2_grover_grocery_content_btn">
                                    <Link to="/menu" class="_feature_2_content_btn">Explore Now</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="_feature_2_grover_grocery_content_img">
                                <img src="assets/images/feat2.png" alt="Image" class="_feature_2_grover_img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureTwo;