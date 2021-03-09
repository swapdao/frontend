import React from 'react';
import { Menu, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
// import WalletStatus from '../WalletStatus';
import { FormattedMessage } from 'react-intl'

function HeaderWrapper() {

    return (
        <Menu style={{ fontWeight: "bolder", fontSize: "14px"}} mode='horizontal'  theme='dark'>
            <Row gutter={20}>
                <Col span={2}>
                    <Menu.Item key='1'>
                        <FormattedMessage id="swapDao" />
                    </Menu.Item>
                </Col>
                <Col span={2}>
                    <Menu.Item key='2'>
                        <Link to="/">
                            <FormattedMessage id="home" />
                        </Link>
                    </Menu.Item>
                </Col>
                <Col span={2}>
                    <Menu.Item key='3'>
                        <Link to="/">
                            <FormattedMessage id="swap" />
                        </Link>
                    </Menu.Item>
                </Col>
                <Col span={2}>
                    <Menu.Item key='4'>
                        <Link to="/">
                            <FormattedMessage id="SDOToken" />
                        </Link>
                    </Menu.Item>
                </Col>
                <Col span={10}>
                    <Menu.Item key='5'>
                    </Menu.Item>
                </Col>
                <Col span={4}>
                    <Menu.Item key='6'>
                        MetaMask
                        {/* <WalletStatus /> */}
                    </Menu.Item>
                </Col>
            </Row>
        </Menu>
    )
}

export default HeaderWrapper;