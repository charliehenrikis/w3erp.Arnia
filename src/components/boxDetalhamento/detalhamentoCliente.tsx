import styled from "styled-components";
import HeaderUserComponent from "../boxHeaders/headerUser";
import SidebarComponent from "../sidebar/sidebar";
import SalesChart from "./boxDetalhamento";
import ClientDetailDown from "./ClientDetailDown";
import ClientDetailHigh from "./ClientDetailHigh";


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

const DetalhamentoPage2: React.FC = () => {
  return (
    <PageContainer>
      <MainContent>
        <SidebarComponent />
        <ContentArea>
          <HeaderUserComponent />
          <SalesChart />
          <TablesWrapper>
            <TableColumn>
              <ClientDetailDown />
            </TableColumn>
            <TableColumn>
              <ClientDetailHigh />
            </TableColumn>
          </TablesWrapper>
        </ContentArea>
      </MainContent>
    </PageContainer>
  );
};

export default DetalhamentoPage2;
