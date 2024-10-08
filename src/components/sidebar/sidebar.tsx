import styled from 'styled-components';
import logo from '../../assets/logo.png';
import GenericButton from '../button/button';
import ImageDaMao from '../../assets/mao.png';
import { FaTachometerAlt, FaChartLine, FaBox } from 'react-icons/fa';

const SidebarContainer = styled.div`
    display: flex;
    flex-shrink: 0; 
`;

const Sidebar = styled.div`
    width: 350px; 
    background-color: #001C98;
    padding: 20px;
    color: white;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    height: 100vh; 
    box-sizing: border-box; 
`;

const Logo = styled.img`
    width: 240px;
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: 35px;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 1; 
`;

const HelpAndImageSection = styled.div`
    margin-top: 20px; 
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 20px; 
`;

const Image = styled.img`
    width: 200px;
`;

const HelpSection = styled.div`
    text-align: center;

    h2 {
        margin-bottom: 10px;
    }

    .help2 {
        background-color: #fff;
        color: #001C98;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }
`;

const SidebarComponent = () => {
    return (
        <SidebarContainer>
            <Sidebar>
                <Logo src={logo} alt="Logo" />
                <ButtonContainer>
                <GenericButton label="Dashboard" path="/dashboard" icon={<FaTachometerAlt />} />
                <GenericButton label="Predições" path="/predicoes" icon={<FaChartLine />} />
                <GenericButton label="Produtos" path="/produtos" icon={<FaBox />} />
                </ButtonContainer>
                <HelpAndImageSection>
                    <Image src={ImageDaMao} alt="Imagem PNG" />
                    <HelpSection>
                        <h2>Precisando de ajuda ou suporte em algo?</h2>
                        <button className="help2">Fale conosco</button>
                    </HelpSection>
                </HelpAndImageSection>
            </Sidebar>
        </SidebarContainer>
    );
}

export default SidebarComponent;
