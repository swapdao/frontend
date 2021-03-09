import React from 'react';
import { Menu, Row, Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';
// import HeaderSearch from 'ant-design-pro/lib/HeaderSearch';
// import WalletStatus from '../WalletStatus';
import { FormattedMessage, useIntl } from 'react-intl'

function HeaderWrapper() {

    const history = useHistory();
    const intl = useIntl();

/*
    const renderTitle = (title: any, link: any) => {
        return (
            <span>
                {title}
                <a
                    style={{ float: 'right' }}
                    href={link}
                    rel="noopener noreferrer"
                >
                more...
                </a>
            </span>
        );
    };

    const renderItem = (title: any) => {
        return {
            value: title,
            label: (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}
                >
                    {title}
                </div>
            ),
        };
    };

    const options = [
        {
            label: renderTitle('Pairs', './pairs'),
            options: [renderItem('WBTC-ETH'), renderItem('ETH-USDC')],
        },
        {
            label: renderTitle('Tokens', './tokens'),
            options: [renderItem('Bitcoin (BTC)'), renderItem('Ethereum (ETH)'), renderItem('XRP (XRP)')],
        },
    ];
*/

    function HandleSearch(value: string) {
        console.log('search', value);
        if (value.includes('-')) {
            history.push("/pair/" + value);            
        }
    };

    return (
        <Menu style={{ fontWeight: "bolder", fontSize: "14px"}} mode='horizontal'  theme='dark'>
            <Row gutter={24}>
                <Col span={2}>
                    <Menu.Item key='1'>
                        <FormattedMessage id="deOracle" />
                    </Menu.Item>
                </Col>
                <Col span={2}>
                    <Menu.Item key='2'>
                        <Link to="/">
                            <FormattedMessage id="overView" />
                        </Link>
                    </Menu.Item>
                </Col>
                <Col span={2}>
                    <Menu.Item key='4'>
                        <Link to="/pairs">
                            <FormattedMessage id="pair" />
                        </Link>
                    </Menu.Item>
                </Col>
                <Col span={2}>
                    <Menu.Item key='5'>
                        <Link to="/miner">
                            <FormattedMessage id="miner" />
                        </Link>
                    </Menu.Item>
                </Col>
                <Col span={2}>
                    <Menu.Item key='6'>
                        <Link to="/token">
                            <FormattedMessage id="DOEToken" />
                        </Link>
                    </Menu.Item>
                </Col>
                <Col span={0}>
                    <Menu.Item key='7'>
                    </Menu.Item>
                </Col>
                <Col span={6}>
                    <Menu.Item key='8'>
                        <div
                            style={{
                                textAlign: 'right',
                                height: '64px',
                                lineHeight: '64px',
                                boxShadow: '0 1px 4px rgba(0,21,41,.12)',
                                padding: '0 20px',
                                width: '340px',
                            }}
                        >
                            {/* <HeaderSearch 
                                style={{ width: 300 }}
                                placeholder={intl.formatMessage({ id: 'placeholderSearch'})}
                                // options={options}
                                // onSelect={HandleSearch}
                                onPressEnter={HandleSearch}
                            /> */}
                        </div>
                    </Menu.Item>
                </Col>
                <Col span={8}>
                    <Menu.Item key='9'>
                        {/* <WalletStatus /> */}
                    </Menu.Item>
                </Col>
            </Row>
        </Menu>
    )
}

export default HeaderWrapper;