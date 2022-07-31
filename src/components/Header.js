import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header class="_header_grover_grocery_wrapper">          
            <div class="_header_grover_grocery_wrap">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="_header_grover_grocery_content">
                                <div class="_header_grover_grocery_content_top_txt">
                                    <h3 class="_header_grover_grocery_content_top_title">More than Faster</h3>
                                    <span class="_header_top_txt_img">
                                        <img src="assets/images/strawberry.svg" alt="Image" class="_strawberry_img" />
                                    </span>
                                </div>
                                <div class="_header_grover_grocery_content_txt">
                                    <h1 class="_header_grover_grocery_content_title">Groceries delivered in as little as <span class="_header_red_clr"> 2 hours</span></h1>
                                    <p class="_header_grover_grocery_content_para">Grocen atssures fresh grocery every morning to your family without getting out in this pandemic.</p>
                                </div>
                                <div class="_header_grover_grocery_btn_wrap">
                                    <div class="row">
                                        <div class="col-xl-4 col-lg-5 col-md-3 col-sm-4 col-4 ms-auto ms-md-0">
                                            <div class="_header_grover_grocery_btn">
                                                <Link to="/menu" class="_header_now_btn">Order Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div class="_header_grover_grocery_content_img">
                                <img src="assets/images/header-img.png" alt="Header Image" class="_header_grover_grocery_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

