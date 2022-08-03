import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Navbar({ cart}) {
    const [activeMenu, setActiveMenu] = useState('home');
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let count = 0;
        cart?.forEach(item => {
            count += item.qty;
        });
        setCartCount(count);
    }, [cart, cartCount])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light _grover_grocery_navbar fixed-top ">
            <div className="container">
                <div className="_logo_wrap">
                    <Link className="_logo_link" to="/home">
                        <img src="assets/images/logo.svg" alt="Logo" class="_grover_grocery_logo" />
                    </Link>
                </div>
                <button className="navbar-toggler _toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 _grover_grocery_list">
                        <li className="nav-item _grover_grocery_list_item">
                            <Link
                                aria-current="page"
                                to="/home"
                                className={activeMenu === 'home' ? 'nav-link _active _grover_grocery_list_link' : 'nav-link _grover_grocery_list_link'}
                                onClick={() => setActiveMenu("home")} >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item _grover_grocery_list_item">
                            <Link aria-current="page"
                                to="/menu"
                                className={activeMenu === 'menu' ? 'nav-link _active _grover_grocery_list_link' : 'nav-link _grover_grocery_list_link'}
                                onClick={() => { setActiveMenu('menu') }}
                            >Menu
                            </Link>
                        </li>
                        <li className="nav-item _grover_grocery_list_item">
                            <Link
                                aria-current="page"
                                to="/service"
                                className={activeMenu === 'service' ? 'nav-link _active _grover_grocery_list_link' : 'nav-link _grover_grocery_list_link'}
                                onClick={() => setActiveMenu("service")} >
                                Service
                            </Link>
                        </li>
                    </ul>
                    <ul className="_search_btn_list">
                        <li className="_search_btn_list_item">
                            <div className="_nav_search_form">
                                <Link to="/cart">
                                    <span className="_cart_ic">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewbox="0 0 24 24">
                                            <path fill="#3C3737" fill-rule="evenodd" d="M1.014 10.084a.464.464 0 01.45-.576h21.072c.302 0 .523.283.45.576L20.059 21.79a.927.927 0 01-.9.703H4.84a.927.927 0 01-.9-.703L1.015 10.084zm11.736 3.541a.75.75 0 00-1.5 0v4.75a.75.75 0 001.5 0v-4.75zm4.319-.561a.75.75 0 01.448.961l-1.624 4.464a.75.75 0 11-1.41-.513l1.625-4.464a.75.75 0 01.96-.448zm-9.177.448a.75.75 0 10-1.41.513l1.625 4.464a.75.75 0 101.41-.513l-1.625-4.464z" clip-rule="evenodd" />
                                            <path stroke="#3C3737" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 10.5l-4.911-6.422a2 2 0 00-3.178 0L5.5 10.5" />
                                        </svg>
                                    </span>
                                    <span className='cartAmount'>{cartCount}</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    };
}

export default connect(mapStateToProps)(Navbar);