import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Layout, Breadcrumb } from 'antd';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/HomePage';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Layout className="layout">
              <Header>
                {/* <HeaderWrapper /> */}
              </Header>
              <Content style={{ padding: '0 50px' }}>
                <Breadcrumb style={{ margin: '16px 0' }} />
                <div className="site-layout-content">
                  <HomePage />
                </div>
              </Content>
              <Footer>
                {/* <FooterWrapper /> */}
              </Footer>
            </Layout>
          </Route>

          <Redirect to='/' />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
