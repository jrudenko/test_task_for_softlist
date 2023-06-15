import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataTenders } from '../redux/actions';
import { Spin, Table, Pagination } from 'antd';
import { Link, useLocation, Outlet } from 'react-router-dom';

const TenderList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const [currentPage, setCurrentPage] = useState(1);
  const [showOutlet, setShowOutlet] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchDataTenders());
  }, [dispatch]);

  useEffect(() => {
    setShowOutlet(false); // Скидаємо showOutlet при зміні даних
  }, [data]);

  useEffect(() => {
    setShowOutlet(false); // Скидаємо showOutlet при зміні маршруту
  }, [location]);

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const pageSize = 10; 
  const totalItems = data.length; 

  const handleChangePage = (page) => {
    setCurrentPage(page);
    setShowOutlet(false); // Скидаємо showOutlet при зміні сторінки
  };

  const handleTenderClick = () => {
    setShowOutlet(true); // Показуємо Outlet при натисканні на тендер
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
        <Link to={`/tenders/${record.id}`} onClick={handleTenderClick}>{text}</Link>
      ),
    },
  ];

  return (
    <div>
      <Table
        dataSource={paginatedData}
        columns={columns}
        pagination={false}
        rowKey="id" 
      />
      <Pagination
        current={currentPage}
        onChange={handleChangePage}
        total={totalItems}
        pageSize={pageSize}
      />
      {showOutlet && <Outlet />} {/* Показуємо Outlet, якщо showOutlet одно true */}
    </div>
  );
}

export default TenderList;
