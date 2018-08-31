import React, { Component } from 'react';
import { Row,Col,Layout } from 'antd'
import '../styles/index.scss'

const { Header, Footer, Content } = Layout;

class Index extends Component {
  render() {
    return (
      <div className="container">
        <Layout className="layout">
          <Header className="header">
            <Row type="flex" justify="end">
              <Col>Header</Col>
            </Row>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Index;
