import React from 'react';
import styled from 'styled-components';
import imgPorcent from '../../assets/porcent.png';

// Estilização da nova caixa dentro do BlueBox
const InnerBox = styled.div`
  width: 275px;
  height: 100px;
  border-radius: 12px;
  margin-bottom: 160px;
  background-color: #02156A;
  display: flex;
  flex-direction: column; /* Alinha os filhos verticalmente */
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

// Estilização da imagem
const Image = styled.img`
  width: 119px;
  height: 45px;
`;

// Estilização do H2
const H2 = styled.h2`
  color: #ffffff;
  font-size: 15px;
  margin: 0;
  margin-bottom: 8px; /* Espaço abaixo do texto */
`;

// Componente da nova caixa
const InnerBoxComponent: React.FC = () => {
  return (
    <InnerBox>
      <H2>Total produtos em alta</H2>
      <Image src={imgPorcent} alt="Imagem de porcentagem" />
    </InnerBox>
  );
};

export default InnerBoxComponent;
