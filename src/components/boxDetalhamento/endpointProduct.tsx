import React from 'react';
import PeopleImg from '../../assets/react.svg';
import DataSection from '../table/tableCode';
import styled from 'styled-components';

// Definição do TableContainer com styled-components
const TableContainer = styled.div`
  width: 100vw; 
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px; 
  box-sizing: border-box;
`;

const FullHeightSection = styled.div`
  flex: 1;
  overflow: auto;
`;

const EndpointProduct: React.FC = () => (
  <TableContainer>
    <FullHeightSection>
      <DataSection
        iconSrc={PeopleImg}
        title="Produtos"
        fetchUrl="http://localhost:3000/products"
        columnTitles={{ id: 'ID', name: 'Produto', percentage: 'Percentual', amount: 'QTD' }}
        percentageField="percentage"
        amountField="amount"
        sortOrder="asc"
        showToggle={true}
        filterPercentage={0} // Ajuste conforme necessário
      />
    </FullHeightSection>
  </TableContainer>
);

export default EndpointProduct;
