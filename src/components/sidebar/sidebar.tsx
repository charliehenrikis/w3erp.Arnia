import styled from 'styled-components';
import logo from '../../assets/logo.png';
import GenericButton from '../button/button'

const SidebarContainer = styled.div`
    display: flex;
`;

const Sidebar = styled.div`
    width: 274px; 
    height: 1208px;
    background-color: #001C98;
    padding: 20px;
    color: white;
    opacity: 0.8;
`;

const Logo = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0px;
`;

const SidebarComponent = () => {
    return (
        <SidebarContainer>
            <Sidebar>
                <Logo src={logo} alt="Logo" />
                <ButtonContainer>
                    <GenericButton label="Dashboard" path="/dashboard" />
                    <GenericButton label="Predições" path="/predicoes" />
                    <GenericButton label="Produtos" path="/produtos" />
                </ButtonContainer>
            </Sidebar>
        </SidebarContainer>
    );
}

export default SidebarComponent;
