import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import { Table, Pagination } from 'antd';
import Loader from "./Loader";
import { Link } from 'react-router-dom';

const PlansList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Налаштування пагінації
  const pageSize = 10; // Кількість елементів на сторінці
  const totalItems = data.length; // Загальна кількість елементів
 
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const columns = [
    {
      title: 'Date Modified',
      dataIndex: 'dateModified',
      key: 'dateModified',
      render: (text, record) => (
        <Link to={`/plans/${record.id}`}>{text}</Link>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={paginatedData}
        columns={columns}
        pagination={false}
        rowKey="id" // Ключ для кожного рядка на основі властивості "id".
      />
      <Pagination
        current={currentPage}
        onChange={handleChangePage}
        total={totalItems}
        pageSize={pageSize}
      />
    </div>
  );
}

export default PlansList;

