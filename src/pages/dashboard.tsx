import React from 'react';
import styled from 'styled-components';
import SidebarComponent from '../components/sidebar/sidebar';
import ProductsTable from '../components/table/productsTable';
import CustomersTable from '../components/table/customersTable';
import BlueBoxComponent from '../components/boxHeaders/boxHeaders';
import HeaderUserComponent from '../components/boxHeaders/headerUser';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Spacer = styled.div`
  height: 2px;
  background-color: #f0f0f0;
  padding: 0;
`;

const BlueBoxWrapper = styled.div`
  height: 150px;
  overflow: hidden;
`;

const TablesWrapper = styled.div`
  flex: 1;
  display: flex;
  padding: 20px;
`;

const TableColumn = styled.div`
  width: 49%;
  &:not(:last-child) {
    margin-right: 2%;
  }
`;

const DashboardPage: React.FC = () => {
    return (
        <DashboardContainer>
            <ContentWrapper>
                <SidebarComponent />
                <MainContent>
                    <HeaderUserComponent />
                    <Spacer />
                    <BlueBoxWrapper>
                        <BlueBoxComponent />
                    </BlueBoxWrapper>
                    <TablesWrapper>
                        <TableColumn>
                            <ProductsTable />
                        </TableColumn>
                        <TableColumn>
                            <CustomersTable />
                        </TableColumn>
                    </TablesWrapper>
                </MainContent>
            </ContentWrapper>
        </DashboardContainer>
    );
};

export default DashboardPage;
