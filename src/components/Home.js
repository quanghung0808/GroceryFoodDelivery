import React from 'react';
import FeatureOne from './FeatureOne';
import FeatureTwo from './FeatureTwo';
import Header from './Header';
import Service from './Service';

function Home(props) {
    return (
        <div>
            <Header/>
            <Service/>
            <FeatureOne/>
            <FeatureTwo/>
        </div>
    );
}

export default Home;