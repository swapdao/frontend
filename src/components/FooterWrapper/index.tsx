import React from 'react';
import GlobalFooter from 'ant-design-pro/lib/GlobalFooter';
import { CopyrightOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
// import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl'


function FooterWrapper() {

    const copyright = (
        <div>
            Copyright <CopyrightOutlined /> 2020 SwapDao Finance
        </div>
    );

    return (
        <div style={{ background: '#FFFFFF', overflow: 'hidden' }}>
            <div style={{ height: 40 }} />
            <Row gutter={24}>
                <Col span={6}>
                    <h2><FormattedMessage id="SwapDao" /></h2>
                    <h4><FormattedMessage id="slogen" /></h4>
                    <h4><FormattedMessage id="dex" /></h4>
                </Col>
                <Col span={6}>
                    <h2><FormattedMessage id="developer" /></h2>
                    <h4><a href="https://github.com/swapdao" target="_blank" rel="noreferrer"><FormattedMessage id="whitePaper" /></a></h4>
                    <h4><a href="https://github.com/swapdao" target="_blank" rel="noreferrer">Github</a></h4>
                    <h4><a href="https://github.com/swapdao" target="_blank" rel="noreferrer"><FormattedMessage id="contract" /></a></h4>
                </Col>
                <Col span={6}>
                    <h2><FormattedMessage id="community" /></h2>
                    <h4><a href="https://twitter.com/007LongShao" target="_blank" rel="noreferrer">Twitter</a></h4>
                    <h4><a href="https://twitter.com/007LongShao" target="_blank" rel="noreferrer">Discord</a></h4>
                    <h4><a href="https://twitter.com/007LongShao" target="_blank" rel="noreferrer">Telegram</a></h4>
                </Col>
                <Col span={6}>
                    <h2><FormattedMessage id="aboutUs" /></h2>
                    <h4><a href="https://github.com/swapdao" target="_blank" rel="noreferrer"><FormattedMessage id="announcements" /></a></h4>
                    <h4><a href="https://weibo.com/007longshao" target="_blank" rel="noreferrer"><FormattedMessage id="weibo" /></a></h4>
                    <h4><a href="https://github.com/swapdao" target="_blank" rel="noreferrer"><FormattedMessage id="joinUs" /></a></h4>
                </Col>
            </Row>
            <div style={{ height: 20 }} />
            <Divider />
            <div style={{ height: 10 }} />
            <GlobalFooter copyright={copyright} />
            <div style={{ height: 30 }} />
        </div>
    )
}

export default FooterWrapper