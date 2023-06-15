import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import logoSvg from "../assets/logo.svg";
import PhotoMain from "../assets/assets.jpg";
import './LayoutPage.css';
import TenderList from "../components/TenderList";
import Footer from "../components/Footer/Footer";
import PlansList from "../components/PlansList";
import InputSearch from "../components/InputSearch";

const { Header, Content, Sider } = Layout;

const LayoutPage = () => {
  const [selectedMenuKey, setSelectedMenuKey] = useState(false);
  const [showOutlet, setShowOutlet] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleMenuClick = ({ key }) => {
    setSelectedMenuKey(key);
    setShowOutlet(false);
  };

  const handleContentEvent = () => {
    setShowOutlet(true);
  };

  const renderContent = () => {
    if (selectedMenuKey === "1") {
      return (
        <div>
          <h1>Головна</h1>
          <img src={PhotoMain} alt="Фото заставка на головній сторінці" width={500}/>
        </div>
      );
    } else if (selectedMenuKey === "2") {
      return (
        <div>
          <h1>Категорії</h1>
          
        </div>
      );
    } else if (selectedMenuKey === "3") {
      return (
        <div>
          <h1>Плани закупівел</h1>
          <PlansList />
        </div>
      );
    } else if (selectedMenuKey === "4") {
      return (
        <div>
          <h1>Закупівлі</h1>
          <TenderList />
        </div>
      );
    }
  };

  return (
    <Layout>
      <Sider
        collapsible
        collapsedWidth={100}
        collapsed={selectedMenuKey}
        onCollapse={(value) => setSelectedMenuKey(value)}
        className="layout-sider"
      >
        <div className="logo">
          <img src={logoSvg} alt="Логотип" width={87} />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          onSelect={handleMenuClick}
        >
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
          <InputSearch />
        </Header>
        <Content
          style={{
            padding: 24,
            minHeight: 500,
            background: colorBgContainer,
          }}
        >
          {showOutlet ? (
            <Outlet />
          ) : (
            <div onClick={handleContentEvent}>{renderContent()}</div>
          )}
        </Content>
        <Breadcrumb style={{ margin: "16px 0" }} />
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutPage;