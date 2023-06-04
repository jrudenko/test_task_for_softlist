// // import TablePlans from "../components/Table";

// import { AppstoreOutlined } from "@ant-design/icons";
// import { Breadcrumb, Layout, Menu, theme, Input } from "antd";
// import logoSvg from "../logo.svg";
// import { useState } from "react";
// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }

// const items = [
//   // getItem("Лого", "0", <HomeOutlined />),
//   getItem("Головна", "1", <AppstoreOutlined />),
//   getItem("Категорії", "2", <AppstoreOutlined />),
//   getItem("Плани закупівель", "3", <AppstoreOutlined />),
//   getItem("Закупівлі", "4", <AppstoreOutlined />),
// ];

// const LayoutPage = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <Layout
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//       >
//         <div className="logo">
//           <img src={logoSvg} alt="Логотип" width={87} />
//         </div>
//         <Menu
//           theme="dark"
//           defaultSelectedKeys={["1"]}
//           mode="inline"
//           items={items}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           <Input.Search
//             size="large"
//             placeholder="Пошук..."
//             style={{
//               width: 250,
//               margin: 15,
//             }}
//           />
//         </Header>

//         <Content
//           style={{
//             margin: "0 16px",
//           }}
//         >
//           <Breadcrumb
//             style={{
//               margin: "16px 0",
//             }}
//           ></Breadcrumb>
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//             Таблиця
//           </div>
//           {/* <Row>
//             <Col>
//               <TablePlans />
//             </Col>
//          </Row> */}
//         </Content>
//         <Footer
//           style={{
//             textAlign: "center",
//           }}
//         >
//           Футер
//         </Footer>
//       </Layout>
//     </Layout>
//   );
// };
// export default LayoutPage;
