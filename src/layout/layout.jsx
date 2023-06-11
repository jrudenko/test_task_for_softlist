import TenderList from "../components/TenderList";
import React, { useState } from "react";

import { Breadcrumb, Layout, Menu,  Input, Table, theme, Row, Col } from 'antd';
import {  AppstoreOutlined } from '@ant-design/icons';
import logoSvg from "../logo.svg";
import Footer from "../components/Footer/Footer"
import './LayoutPage.css'; 

const { Header, Content, Sider } = Layout;


const LayoutPage = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
    
  };

  const renderContent = () => {
    if (selectedMenuKey === '1') {
      return (
        <div>
          <h1>Головна</h1>
          {/* Текст або інформація "Главная" */}
        </div>
      );
    } else if (selectedMenuKey === '2') {
      return (
        <div>
          <h1>Категорії</h1>
          {/*  Текст або інформація "Категории" */}
          <Row>
            <Col>
              <Table />
            </Col>
         </Row>
        </div>
      );
    } else if (selectedMenuKey === '3') {
      return (
        <div>
          <h1>Плани закупівел</h1>
          <TenderList/>
          <Row>
            <Col>
              <Table />
            </Col>
         </Row>
        </div>
      );
    }
    else if (selectedMenuKey === '4') {
      return (
        <div>
          <h1>Закупівлі</h1>
          <TenderList/>
          {/* <Row>
            <Col>
              <Table />
            </Col>
         </Row> */}
        </div>
      );
    }
  };

  return (
    <Layout>
      <Sider
        // trigger={null}
        collapsible
        collapsedWidth={100}
        collapsed={selectedMenuKey}
        onCollapse={(value) => setSelectedMenuKey(value)}
        className="layout-sider"
      >
        <div className="logo">
          <img src={logoSvg} alt="Логотип" width={87} />
        </div>
        <Menu theme="dark" mode="inline"  defaultSelectedKeys={["1"]} onSelect={handleMenuClick}>
          <Menu.Item key="1" icon={<AppstoreOutlined />}>
            Головна
          </Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>
            Категорії
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreOutlined />}>
            Плани закупівел
          </Menu.Item>
          <Menu.Item key="4" icon={<AppstoreOutlined />}>
            Закупівлі
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="layout-container">
      <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
      <Input.Search
            size="large"
            placeholder="Пошук..."
            style={{
              width: 250,
              margin: 15,
            }}
          />
        
      </Header>
        <Content
          style={{
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
        }}
        >
        {renderContent()}
        </Content>
        <Breadcrumb
            style={{
              margin: "16px 0",
            }}
          ></Breadcrumb>
      <Footer />
    </Layout>
  </Layout>
  );
};

export default LayoutPage;