import React from 'react';
import PeopleImg from '../../assets/react.svg';
import DataSection from '../table/tableCode';
import { TableContainer as MuiTableContainer } from '@mui/material';
import styled from 'styled-components';

// Estilização personalizada para o TableContainer
const TableContainer = styled(MuiTableContainer)`
  width: 100vw;  // Ocupa toda a largura da tela
  height: 100vh; // Ocupa toda a altura da tela
  display: flex;
  flex-direction: column;
  padding: 20px; // Adiciona um espaçamento interno
  box-sizing: border-box; // Inclui o padding no cálculo da largura/altura
`;

// Estilização para o DataSection para garantir que ocupe todo o espaço do container
const FullHeightSection = styled.div`
  flex: 1;  // Faz o DataSection ocupar todo o espaço disponível
  overflow: auto;  // Adiciona rolagem se necessário
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
        filterPercentage={-10}
      />
    </FullHeightSection>
  </TableContainer>
);

export default EndpointProduct;
