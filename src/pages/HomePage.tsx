import React from 'react';
import SwapToken from '../components/SwapToken';

function HomePage() {

    console.log("SwapDao language:", navigator.language);

    return (
        <div style={{ textAlign: 'center' }}>
            <SwapToken />
        </div>
    )
}

export default HomePage