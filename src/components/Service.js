import React, { useEffect } from 'react';

function Service(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <section className="_service_grover_grocery_wrapper">
            <div className="_service_grover_grocery_wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="_service_grover_grocery_heading">
                                <h5 className="_service_grover_grocery_heading_title">What we Serve</h5>
                                <h2 className="_service_grover_grocery_heading_title2">fruit and vegetable delivered to your home</h2>
                            </div>
                        </div>
                    </div>
                    <div className="_service_grover_grocery_content_wrap">
                        <div className="row">
                            <div className="col-xl-10 col-lg-12 col-md-12 col-sm-12 mx-auto">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="_service_grover_grocery_content_inner">
                                            <div className="_service_grover_grocery_content_bg"></div>
                                            <div className="_service_grover_grocery_content">
                                                <div className="_service_grover_grocery_content_ic">
                                                    <img src="assets/images/service-ic1.svg" alt="Image" class="_service_grover_grocery_content_img" />
                                                </div>
                                                <div className="_service_grover_grocery_content_txt">
                                                    <h3 className="_service_grover_grocery_content_title">Free shipping</h3>
                                                    <p className="_service_grover_grocery_content_para">Enjoy Order in a hand using the fresness of groceries</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="_service_grover_grocery_content_inner">
                                            <div className="_service_grover_grocery_content_bg"></div>
                                            <div className="_service_grover_grocery_content">
                                                <div className="_service_grover_grocery_content_ic">
                                                    <img src="assets/images/service-ic2.svg" alt="Image" className="_service_grover_grocery_content_img" />
                                                </div>
                                                <div className="_service_grover_grocery_content_txt">
                                                    <h3 className="_service_grover_grocery_content_title">15 days returns</h3>
                                                    <p className="_service_grover_grocery_content_para">Order in a handy way using the freshness of the groceries.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                        <div className="_service_grover_grocery_content_inner">
                                            <div className="_service_grover_grocery_content_bg"></div>
                                            <div className="_service_grover_grocery_content">
                                                <div className="_service_grover_grocery_content_ic">
                                                    <img src="assets/images/service-ic3.svg" alt="Image" className="_service_grover_grocery_content_img" />
                                                </div>
                                                <div className="_service_grover_grocery_content_txt">
                                                    <h3 className="_service_grover_grocery_content_title">Secure checkout</h3>
                                                    <p className="_service_grover_grocery_content_para">If you get rotten items - return immediately to us.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;