import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const PlansDetails = () => {
  const { id } = useParams();
  const [tenderData, setTenderData] = useState(null);

  useEffect(() => {
    const fetchTenderData = async () => {
      try {
        const response = await fetch(`https://public.api.openprocurement.org/api/2.5/plans/${id}`);
        const data = await response.json();
        setTenderData(data);
      } catch (error) {
        console.error('Error fetching tender data:', error);
      }
    };

    fetchTenderData();
  }, [id]);

  if (!tenderData) {
    return <Spin />;
  }

  // Перевірка наявності даних про procuringEntity
  const procurementEntity = tenderData.data.procuringEntity;
  const procurementEntityName = procurementEntity ? procurementEntity.name : 'Unknown';

  // Доступ до інших даних тендеру
  const { tender, budget, classification, items } = tenderData.data;

  return (
    <div>
      <Title level={1}>ID: {id}</Title>      
      <Paragraph>Найменування замовника: {procurementEntityName}</Paragraph>
      <Paragraph>Дата оголошення процедури: {tender.tenderPeriod.startDate}</Paragraph>
      <Paragraph>Очікувана вартість закупівлі: {budget.amount}</Paragraph>
      <Paragraph>Опис: {classification.description}</Paragraph>      
      <Title level={2}>Вид предмету закупівлі:</Title>
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <Paragraph strong>Опис: {item.description}</Paragraph>
           </div>
        ))
      ) : (
        <Paragraph>Товар не знайдено.</Paragraph>
      )}
    </div>
  );
};

export default PlansDetails;


