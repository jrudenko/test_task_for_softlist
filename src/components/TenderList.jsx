import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataTenders } from '../redux/actions';
import { Spin, Table, Pagination } from 'antd';
import { Link } from 'react-router-dom';

const TenderList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchDataTenders());
  }, [dispatch]);

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
        <Link to={`/tenders/${record.id}`}>{text}</Link>
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
    </div>
  );
}

export default TenderList;
