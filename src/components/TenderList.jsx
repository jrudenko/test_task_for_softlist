import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';

const TenderList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  const isLoading = useSelector((state) => state.isLoading);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (

    <table>
      <thead>
        <tr>
          <th>Column 1</th>
          <th>Column 2</th>
          {/* Добавити треба заголовки стовбчиків таблиці */}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.column1}</td>
            <td>{item.column2}</td>
            
          </tr>)
        )}
      </tbody>
    </table>);
}

export default TenderList;