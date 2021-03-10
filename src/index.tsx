import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from './utils/getLibrary'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN';
import enUS from 'antd/es/locale/en_US';
import moment from 'moment';
import 'moment/locale/zh-cn'
import { IntlProvider } from 'react-intl';
import do_enUS from './locales/en-US.json'
import do_zhCN from "./locales/zh-CN.json"

//  语言默认是英文，除非设置了中文

//  根据浏览器的首选预言确定intl的locale
function intlLocale() {
  switch(navigator.language){
    case 'zh-CN':
      return "zh";
    case 'en-US':
    default:
      return "en";
  }
}

//  根据浏览器的首选预言确定intl的messages
function messagesByLocale() {
  switch(navigator.language){
    case 'zh-CN':
      return do_zhCN;
    case 'en-US':
    default:
      return do_enUS;
  }
}

//  根据浏览器的首选预言确定antd的语言库配置
function antdByLocale() {
  switch(navigator.language){
    case 'zh-CN':
    case 'zh_CN':
      moment.locale('zh-cn');
      return zhCN;
    case 'en-US':
    case 'en_US':
        default:
      return enUS;
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <IntlProvider locale={intlLocale()} messages={messagesByLocale()}>
        <ConfigProvider locale={antdByLocale()}>
          <App />
        </ConfigProvider>
      </IntlProvider>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
