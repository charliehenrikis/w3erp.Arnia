import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import InnerBoxComponent from './cardComponent';

// Estilização da caixa azul principal
const BlueBox = styled.div`
  width: 1582px;
  height: 292px;
  top: 162px;
  left: 306px;
  background-color: #001C98;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

// Componente principal
const BlueBoxComponent: React.FC = () => {
  const navigate = useNavigate();

  const handleBoxClick = (path: string) => {
    return () => {
      navigate(path);
    };
  };

  return (
    <BlueBox>
      <InnerBoxComponent
        text="Total produtos em alta"
        value={120}
        percentage={53}
        onClick={handleBoxClick("/detalhamento")}
      />
      <InnerBoxComponent
        text="Total Produtos em baixa"
        value={80}
        percentage={-5}
        onClick={handleBoxClick("/detalhamento")}
      />
      <InnerBoxComponent
        text="Total Clientes em alta"
        value={150}
        percentage={70}
        onClick={handleBoxClick("/detalhamento2")}
      />
      <InnerBoxComponent
        text="Total Clientes em baixa"
        value={70}
        percentage={-10}
        onClick={handleBoxClick("/detalhamento2")}
      />
    </BlueBox>
  );
};

export default BlueBoxComponent;
