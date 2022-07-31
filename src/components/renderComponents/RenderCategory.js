import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../../shared/baseUrl';

function RenderCategory(props) {
    const [activeMenu, setActiveMenu] = useState();

    return (
        props.category?.map((item) => {
            return (
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12">
                    <div className="_service_grover_grocery_content_inner">
                        <div className="_service_grover_grocery_content2">
                            <div className="_service_grover_grocery_content_ic">
                                <Link
                                    to={`/menu/${item.name}`}
                                    onClick={() => setActiveMenu(`${item.name}`)}
                                >
                                    <img src={baseUrl + item.image} alt={item.name} width="100%" height="200rem" />
                                </Link>
                            </div>
                            <div className="_service_grover_grocery_content_txt">
                                <Link
                                    to={`/menu/${item.name}`}
                                    className={activeMenu === `${item.name}` ? '_service_grover_grocery_content_title _active1 ' : '_service_grover_grocery_content_title'}
                                    onClick={() => setActiveMenu(`${item.name}`)}
                                >{item.name}</Link>
                                <p className="_service_grover_grocery_content_para"></p>
                            </div>
                        </div>
                    </div>
                </div>)
        })
    );
}

export default RenderCategory;