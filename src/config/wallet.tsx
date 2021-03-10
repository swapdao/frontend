
import { InjectedConnector } from '@web3-react/injected-connector';

//  injected钱包支持的链(MetaMask)
const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42]
});

export { injected };
