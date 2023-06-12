import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';
import { Table, Pagination } from 'antd';
import Loader from "./Loader";

const TenderList = () => {
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

  // Configure pagination
  const pageSize = 10; // Number of items per page
  const totalItems = data.length; // Total number of items
  // const totalPages = Math.ceil(totalItems / pageSize); // Total number of pages

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
    },
    // Add other columns as needed
  ];

  return (
    <div>
      <Table
        dataSource={paginatedData}
        columns={columns}
        pagination={false}
        rowKey="id" // Set the key for each row based on the "id" property
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

export default TenderList;
