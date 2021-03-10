import React from 'react';
import { Button, Space, Modal, Tooltip } from 'antd';
import { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { formatUnits } from '@ethersproject/units';
import { injected } from "../../config/wallet";
import { FormattedMessage, useIntl } from 'react-intl'

function WalletStatus() {

    const intl = useIntl();

    const context = useWeb3React();
    const { account, library, chainId, active, activate, deactivate } = context;
    console.log("SwapDao context=", context);

    const [isDisconnectWalletModal, setIsDisconnectWalletModal] = useState<boolean>(false);

    // //  一打开页面立即连接钱包
    // if (!active) {
    //     activate(injected);
    //     console.log("SwapDao default activate=", context);
    // }

    //  断开钱包连接
    const disconnectWalletOK = () => {
        if (!!active) {
            deactivate();
            setIsDisconnectWalletModal(false);
            console.log("SwapDao deactivate=", context);
        }
    }

    const disconnectWalletCancel = () => {
        setIsDisconnectWalletModal(false);
    }

    //  钱包的连接、断开
    const handelWallet = (): any => {
        if (!active) {
            activate(injected);
            console.log("SwapDao activate=", context);
        } else {
            setIsDisconnectWalletModal(true);
        }
    }

    // 按钮默认显示连接钱包，连接后，显示钱包账户地址，更换地址时自动更新
    const [accountAddress, setAccountAddress] = useState<string>();
    useEffect((): any => {
        let address = intl.formatMessage({ id: "connectWallet" });
        if (!!account) {
            address = account.substring(0, 6) + "..." + account.substring(account.length - 4);
        }
        setAccountAddress(address);
    }, [account, library, chainId, intl])

    // 获取账户的ETH余额，切换链、账号时自动更新
    const [ethBalance, setEthBalance] = useState<string>();
    useEffect((): any => {
        if (!!account && !!library) {
            library
            .getBalance(account)
            .then((balance: any) => {
                let bal = formatUnits(balance);
                console.log("SwapDao getBalance then balance=", bal);
                setEthBalance(bal.substring(0, bal.indexOf('.') + 5) + " ETH");
            })
            .catch(() => {
                console.log("SwapDao getBalance catch");
                setEthBalance("Error");
            })

            return () => {
                console.log("SwapDao getBalance return");
                setEthBalance("");
            }
        } else {
            setEthBalance("0.0 ETH");
        }
    }, [account, library, chainId])

    //  获取地址的Token的余额
    const [sdoBalance, setSdoBalance] = useState<string>();
    useEffect((): any => {
        async function getAddressBalance() {
            // if (!!account && !!library) {
            //     let contractToken = new ethers.Contract(contractConfig["sdoToken"]["address"], contractConfig["sdoToken"]["interfaces"], library);
            //     let bal = formatUnits(await contractToken.balanceOf(account));
            //     console.log("SwapDao balanceOf=", bal);
            //     setSdoBalance(bal.substring(0, bal.indexOf('.') + 5) + " SDO");
            // } else {
                setSdoBalance("0.0 SDO");
            // }
        }
        getAddressBalance();
    }, [account, library, chainId])

    //  显示Miner Balance框
    const handelMinerBalance = (): any => {
        // if (!active) {
        //     activate(injected);
        //     console.log("SwapDao activate=", context);
        // } else {
        //     setIsMinerBalance(true);
        // }
    }

    return (
        <span>
            <Space size={'middle'}>
                <Tooltip placement="bottomRight" title={intl.formatMessage({ id: "tipButtonSDO" })} >
                    <Button type='dashed' onClick={handelMinerBalance} style={{ fontWeight: "bolder", fontSize: "14px", width: '130px' }} >{sdoBalance}</Button>
                </Tooltip>
                <Button type='dashed' style={{ fontWeight: "bolder", fontSize: "14px", width: '130px' }} >{ethBalance}</Button>
                <Tooltip placement="bottomRight" title={intl.formatMessage({ id: "tipButtonWallet" })} >
                    <Button type='primary' onClick={handelWallet}>{accountAddress}</Button>
                </Tooltip>
                <Modal title={intl.formatMessage({ id: "modalTitle" })} visible={isDisconnectWalletModal} onOk={disconnectWalletOK} onCancel={disconnectWalletCancel}>
                    <p></p>
                    <p><FormattedMessage id="infoConnectWallet"/></p>
                    <p></p>
                </Modal>
            </Space>
        </span>
    )
}

export default WalletStatus
