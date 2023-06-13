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
        const response = await fetch(`https://public.api.openprocurement.org/api/2.5/tenders/${id}`);
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

  const { tender, budget, classification, items } = tenderData.data;

  return (
<div >
 
  <Title level={1}>ID: {id}</Title>
  
  <Paragraph>Найменування замовника: {procurementEntityName}</Paragraph>
  {tender && tender.tenderPeriod && (
    <div key="tender-period">
      <Paragraph>Дата оголошення процедури: {tender.tenderPeriod.startDate}</Paragraph>
    </div>
  )}
  {budget && (
    <div key="budget">
      <Paragraph>Очікувана вартість закупівлі: {budget.amount}</Paragraph>
    </div>
  )}
  {classification && (
    <div key="classification">
      <Paragraph>Опис: {classification.description}</Paragraph>
    </div>
  )}
  {/* Відображення додаткових деталей тендера, наприклад, items */}
  <Title level={2}>Вид предмету закупівлі:</Title>
  {items && items.length > 0 ? (
    items.map((item, index) => (
          <div key={index}>
        <Paragraph strong>Опис: {item.description}</Paragraph>
        {/*Відображення інших деталей*/}
        {item.unit && <Paragraph>Одиниця виміру: {item.unit.name}</Paragraph>}
        <Paragraph>Кількість: {item.quantity}</Paragraph>
        {item.classification && (
          <Paragraph>Класифікація: {item.classification.description}</Paragraph>
        )}
        {item.additionalClassifications && item.additionalClassifications.length > 0 && (
          <Paragraph>
            Додаткова класифікація: {item.additionalClassifications[0].description}
          </Paragraph>
        )}
      </div>
    ))
  ) : (
    <Paragraph>Товар не знайдено.</Paragraph>
  )}
</div>
  );
};

export default TenderDetails;


