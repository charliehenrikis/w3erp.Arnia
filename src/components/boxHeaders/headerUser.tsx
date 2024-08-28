import React from 'react';
import styled from 'styled-components';
import { FaBars, FaUserCircle } from 'react-icons/fa';
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    fill: #333;
  }
`;

const ProfileIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #001C98;
  border-radius: 50%;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;  
  align-items: flex-start;
  margin-left: 10px;
  font-size: 16px;
  color: #333;
  
  div {
    font-weight: bold;
  }
  
  span {
    font-weight: normal;
    color: #555;
  }
`;

const HeaderUserComponent: React.FC = () => {
  return (
    <Container>
      <MenuIcon>
        <FaBars /> 
      </MenuIcon>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <ProfileIcon>
          <FaUserCircle />
        </ProfileIcon>
        <ProfileInfo>
          <div>Rafael Pimenta</div>
          <span>rafael@gmail.com</span>
        </ProfileInfo>
      </div>
    </Container>
  );
};

export default HeaderUserComponent;
