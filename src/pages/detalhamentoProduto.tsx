import React from 'react';
import styled from 'styled-components';
import SalesChart from "../components/boxDetalhamento/boxDetalhamento";
import HeaderUserComponent from "../components/boxHeaders/headerUser";
import SidebarComponent from "../components/sidebar/sidebar";
import ProductDetailDown from '../components/boxDetalhamento/ProductDetailDown';
import ProductDetailUp from '../components/boxDetalhamento/ProductDetailHigh';

// Estilização para os containers da página
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const TablesWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const TableColumn = styled.div`
  flex: 1;
`;

const DetalhamentoProduto: React.FC = () => {
  return (
    <PageContainer>
      <MainContent>
        <SidebarComponent />
        <ContentArea>
          <HeaderUserComponent />
          <SalesChart />
          <TablesWrapper>
            <TableColumn>
              <ProductDetailDown />
            </TableColumn>
            <TableColumn>
              <ProductDetailUp />
            </TableColumn>
          </TablesWrapper>
        </ContentArea>
      </MainContent>
    </PageContainer>
  );
};

export default DetalhamentoProduto;
