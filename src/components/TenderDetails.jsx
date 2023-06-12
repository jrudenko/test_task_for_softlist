import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spin, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const TenderDetails = () => {
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

  // Проверка наличия данных о procuringEntity
  const procurementEntity = tenderData.data.procuringEntity;
  const procurementEntityName = procurementEntity ? procurementEntity.name : 'Unknown';

  // Доступ к другим данным тендера
  const { tender, budget, classification, items } = tenderData.data;

  return (
    <div>
      {/* Отображение деталей тендера */}
      <Title level={1}>ID: {id}</Title>
      {/* Отображение других деталей тендера */}
      <Paragraph>Найменування замовника: {procurementEntityName}</Paragraph>
      <Paragraph>Дата оголошення процедури: {tender.tenderPeriod.startDate}</Paragraph>
      <Paragraph>Очікувана вартість закупівлі: {budget.amount}</Paragraph>
      <Paragraph>Опис: {classification.description}</Paragraph>
      {/* Отображение дополнительных деталей тендера, например, items */}
      <Title level={2}>Вид предмету закупівлі:</Title>
      {items && items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <Paragraph strong>Опис: {item.description}</Paragraph>
            {/* Отображение других деталей элемента */}
          </div>
        ))
      ) : (
        <Paragraph>Товар не знайдено.</Paragraph>
      )}
    </div>
  );
};

export default TenderDetails;


