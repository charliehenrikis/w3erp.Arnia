import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface GenericButtonProps {
  label: string;
  path?: string; // Agora opcional
  onClick?: () => void;
  icon?: React.ReactNode;
}

const StyledLink = styled(Link)`
  background-color: #001C98;
  width: 271px;
  height: 52px;
  color: white;
  border: none;
  margin-top: 10px;
  margin-bottom: 1px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  text-decoration: none;

  &:hover {
    background-color: #7682C1;
  }
`;

const StyledButton = styled.button`
  background-color: #001C98;
  width: 271px;
  height: 52px;
  color: white;
  border: none;
  margin-top: 10px;
  margin-bottom: 1px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #7682C1;
  }
`;

const GenericButton: React.FC<GenericButtonProps> = ({ label, path, onClick, icon }) => {
  if (path) {
    return (
      <StyledLink to={path}>
        {icon && <span>{icon}</span>}
        {label}
      </StyledLink>
    );
  }

  return (
    <StyledButton onClick={onClick}>
      {icon && <span>{icon}</span>}
      {label}
    </StyledButton>
  );
};

export default GenericButton;
