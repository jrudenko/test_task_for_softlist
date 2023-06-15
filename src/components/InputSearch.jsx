import React from "react";
import { Input } from "antd";

const InputSearch = () => {
  const handleSearch = (value) => {
    // Оброблення пошукового запиту
    console.log("Пошук по ID:", value);
  };

  return (
    <div style={{ maxWidth: 1440, margin: "0 auto", padding: '24' }}>
      <Input.Search
        size="large"
        placeholder="Поиск по ID..."
        style={{ margin: "15px" }}
        onSearch={handleSearch}
        responsive={{
          375: {
            style: { width: "70%" },
          },
          678: {
            style: { width: "30%" },
          },
          1440: {
            style: { width: "20%" },
          },
        }}
      />
    </div>
  );
};

export default InputSearch;