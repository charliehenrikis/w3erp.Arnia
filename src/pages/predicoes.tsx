import React from 'react';
import styled from 'styled-components';
import SidebarComponent from '../components/sidebar/sidebar';
import HeaderUserComponent from '../components/boxHeaders/headerUser';
import PredicoesBox from '../components/boxPredicoes/boxInfo';

// Estilização dos componentes principais da página
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
  padding: 20px;
`;

const PredicoesPage: React.FC = () => {
    return (
        <PageContainer>
            <MainContent>
                <SidebarComponent />
                <ContentArea>
                    <HeaderUserComponent />
                    <PredicoesBox></PredicoesBox>
                </ContentArea>
            </MainContent>
        </PageContainer>
    );
};

export default PredicoesPage;
