import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

interface GenericButtonProps {
  label: string;
  path: string;
  onClick?: () => void;
}

const Button = styled.button`
  background-color: #fff;
  color: #001C98;
  border: none;
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  animation-duration: 0ms;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const GenericButton: React.FC<GenericButtonProps> = ({ label, path, onClick }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(path);
  };

  return <Button onClick={handleClick}>{label}</Button>;
};

export default GenericButton;
