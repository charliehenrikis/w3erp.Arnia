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
  border-radius: 24px;
  display: flex; /* Usar flexbox para layout */
  justify-content: space-around; /* Espaço igual entre os itens */
  align-items: center; /* Alinha os itens verticalmente no centro */
  padding: 10px; /* Adiciona um pouco de padding para espaçamento interno */
`;

// Componente principal
const BlueBoxComponent: React.FC = () => {
  return (
    <BlueBox>
      <InnerBoxComponent />
      <InnerBoxComponent />
      <InnerBoxComponent />
      <InnerBoxComponent />
    </BlueBox>
  );
};

export default BlueBoxComponent;
