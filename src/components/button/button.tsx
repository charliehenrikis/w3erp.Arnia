import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface GenericButtonProps {
  label: string;
  path: string;
  onClick?: () => void;
  icon?: React.ReactNode;
}

const Button = styled.button`
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
  gap: 10px; // Adiciona espaçamento entre ícone e texto

  &:hover {
    background-color: #7682C1;
  }
`;


const GenericButton: React.FC<GenericButtonProps> = ({ label, path, onClick, icon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(path);
  };

  return (
    <Button onClick={handleClick}>
      {icon && <span>{icon}</span>} {/* Renderiza o ícone se disponível */}
      {label}
    </Button>
  );
};

export default GenericButton;
