import React from 'react';
import { Link } from 'react-router-dom';

function FeatureOne(props) {
    return (
        <section class="_feature_grover_grocery_wrapper">
            <div class="_feature_grover_grocery_wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                            <div class="_feature_grover_grocery_content_img">
                                <img src="assets/images/feat.png" alt="Image" class="_feature_grover_img"/>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div class="_feature_grover_grocery_content">
                                <div class="_feature_grover_grocery_content_txt">
                                    <h5 class="_feature_grover_grocery_content_title">WHY CHOOSE US</h5>
                                    <h2 class="_feature_grover_grocery_content_title2">Find Favorites and Discover New Ones</h2>
                                    <p class="_feature_grover_grocery_content_para">At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praesen voluptatum deleniti.</p>
                                </div>
                                <div class="_feature_grover_grocery_content_btn">
                                    <Link to="/menu" class="_feature_content_btn">Explore Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeatureOne;