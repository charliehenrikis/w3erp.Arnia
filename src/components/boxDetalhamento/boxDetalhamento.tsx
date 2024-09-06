import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

// Estilização com styled-components
const SalesChartContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-right: 10px;
`;

const ProductTitle = styled.div`
  font-size: 1rem;
  color: #333;
  font-weight: bold;
`;

const TitleText = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const DataContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const DataItem = styled.div`
  flex: 1 1 150px;
  padding: 10px;
  background-color: #001C98;
  border-radius: 8px;
  text-align: center;
`;

const DataItemTitle = styled.div`
  font-size: 1rem;
  color: #fff;
  margin-bottom: 5px;
`;

const DataItemValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const DataItemChange = styled.div`
  font-size: 1rem;
  color: #d9534f; /* Cor vermelha para indicar mudança negativa */
`;

// Componente SalesChart
const SalesChart: React.FC = () => {
  // Estado para armazenar o título do produto
  const [productTitle, setProductTitle] = useState<string>('');

  // Mock dos dados numéricos
  const salesData = {
    last30Days: { value: 222, change: '-4%' },
    last60Days: { value: 350 },
    last90Days: { value: 320 },
    last120Days: { value: 280 },
    average120Days: { value: 300 },
  };

  // Função para simular a chamada de API e buscar o título do produto
  useEffect(() => {
    // Simulando uma chamada de API
    const fetchProductTitle = async () => {
      // Aqui seria a chamada real à API, mas vou mockar a resposta
      const response = await new Promise<{ title: string }>((resolve) => {
        setTimeout(() => resolve({ title: 'Papel higiênico' }), 1000); // Simulando um atraso na resposta
      });

      setProductTitle(response.title);
    };

    fetchProductTitle();
  }, []);

  return (
    <SalesChartContainer>
      <TitleContainer>
        <ProductContainer>
          <BackButton>
            <FaArrowLeft size={20} /> {}
          </BackButton>
          <ProductTitle>Detalhamento</ProductTitle>
        </ProductContainer>
        <TitleText>{productTitle || 'Carregando...'}</TitleText>
      </TitleContainer>
      <DataContainer>
        <DataItem>
          <DataItemTitle>Média 120 dias</DataItemTitle>
          <DataItemValue>{salesData.average120Days.value}</DataItemValue>
        </DataItem>
        <DataItem>
          <DataItemTitle>Últimos 30 dias</DataItemTitle>
          <DataItemValue>{salesData.last30Days.value}</DataItemValue>
          <DataItemChange>{salesData.last30Days.change}</DataItemChange>
        </DataItem>
        <DataItem>
          <DataItemTitle>Últimos 60 dias</DataItemTitle>
          <DataItemValue>{salesData.last60Days.value}</DataItemValue>
        </DataItem>
        <DataItem>
          <DataItemTitle>Últimos 90 dias</DataItemTitle>
          <DataItemValue>{salesData.last90Days.value}</DataItemValue>
        </DataItem>
        <DataItem>
          <DataItemTitle>Últimos 120 dias</DataItemTitle>
          <DataItemValue>{salesData.last120Days.value}</DataItemValue>
        </DataItem>
      </DataContainer>
    </SalesChartContainer>
  );
};

export default SalesChart;
