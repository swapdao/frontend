import React from 'react';
import { Carousel, Image } from 'antd';
import VitalikTwitter from '../../assets/VitalikTwitter.png'
import VitalikResearch from '../../assets/VitalikResearch.png'

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    background: '#364d79',
};

function OverView() {

    return (
        <div>
            <Carousel autoplay effect="fade">
                <div>
                    <div style={contentStyle}>
                        <div style={{ height: 20 }} />
                        <Image width={450} height={430} src={VitalikTwitter} />
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <div style={{ height: 20 }} />
                        <Image width={600} height={430} src={VitalikResearch} />
                    </div>
                </div>
            </Carousel>
        </div>
    )
}

export default OverView;