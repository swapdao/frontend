import React from 'react';
import { Form, Input, Select, Button, Row, Col } from 'antd';
// import { useIntl } from 'react-intl'

function SwapToken() {

    // const intl = useIntl();

    const { Option } = Select;

    const layout = {
        labelCol: { span: 10 },
        wrapperCol: { span: 14 },
    };

    const tailLayout = {
        wrapperCol: { offset: 2, span: 16 },
    };

    const tokenList = (
        <Select defaultValue="USDT" style={{ width: 100 }} >
            <Option value="USDT">USDT</Option>
            <Option value="USDC">USDC</Option>
            <Option value="DAI">DAI</Option>
        </Select>
    );

    return (
        <div style={{ background: '#FFFFFF', overflow: 'hidden' }} >
            <div style={{ height: 40 }} />
            <Row gutter={24}>
                <Col span={8}>
                </Col>
                <Col span={8}>
                    <Form {...layout} >
                        <Form.Item label="Token" style={{ width: 300 }} >
                            <Input defaultValue="0.0" addonAfter={tokenList} style={{ width: 240 }}/>
                        </Form.Item>

                        <Form.Item label="From" style={{ width: 300 }}>
                            <Select defaultValue="Ethereum" style={{ width: 240 }} >
                                <Option value="ETH">Ethereum</Option>
                                <Option value="BSC">Binance Smart Chain</Option>
                                <Option value="Matic">Matic</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="To" style={{ width: 300 }}>
                            <Select defaultValue="Matic" style={{ width: 240 }} >
                                <Option value="ETH">Ethereum</Option>
                                <Option value="BSC">Binance Smart Chain</Option>
                                <Option value="Matic">Matic</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Receiver Address" style={{ width: 300 }}>
                            <Input style={{ width: 400 }} />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                跨链转移资产
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={8}>
                </Col>
            </Row>
            <div style={{ height: 40 }} />
        </div>
    )
}

export default SwapToken;