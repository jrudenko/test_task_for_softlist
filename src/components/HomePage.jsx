import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const HomePage = () => {
//   const breadcrumbItems = [
//     { text: "Головна", href: "/" },
//     // Дополнительные элементы хлебных крошек
//   ];

  return (
    <div>
      {/* <Breadcrumb items={breadcrumbItems} /> */}
      <Title level={1}></Title>
      {/* Текст или информация "Главная" */}
    </div>
  );
};

export default HomePage;
