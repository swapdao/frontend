import React from 'react';
import OverView from '../components/OverView';

function HomePage() {

    console.log("SwapDao language:", navigator.language);

    return (
        <div>
            <OverView />
        </div>
    )
}

export default HomePage