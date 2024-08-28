import React from 'react';
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
  return (
    <BlueBox>
      <InnerBoxComponent text="Total produtos em alta" value={120} percentage={53} />
      <InnerBoxComponent text="Total Produtos em baixa" value={80} percentage={-5} />
      <InnerBoxComponent text="Total Clientes em alta" value={150} percentage={70} />
      <InnerBoxComponent text="Total Clientes em baixa" value={70} percentage={-10} />
    </BlueBox>
  );
};

export default BlueBoxComponent;
