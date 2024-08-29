import React from 'react';
import styled from 'styled-components';

interface Produto {
  nome: string;
  dataCompra: string;
}

const CardContainer = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClienteInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ClienteNome = styled.h2`
  font-size: 1.2rem;
  margin-left: 10px;
`;

const Status = styled.p`
  color: green;
  margin-left: 10px;
`;

const ProductTable = styled.table`
  width: 100%;
  margin-top: 15px;
  border-spacing: 0;
  border-collapse: collapse;
  font-size: 0.9rem;

  th {
    text-align: left;
    color: #9b59b6; /* Cor roxa */
  }

  td {
    padding: 5px 0;
  }
`;

const ProductName = styled.td`
  color: #2c3e50;
`;

const PurchaseDate = styled.td`
  text-align: right;
  font-weight: bold;
`;

const CardPredComponent: React.FC = () => {
  const clienteNome = "Hotel Ibis"; // Nome do cliente
  const status = "Ativo"; // Status do cliente
  const produtos: Produto[] = [
    { nome: 'Sabão em pó', dataCompra: '2024-09-01' },
    { nome: 'Detergente', dataCompra: '2024-10-15' },
  ]; // Dados estáticos de produtos

  return (
    <CardContainer>
      <Header>
        <ClienteInfo>
          <div>👤</div>
          <div>
            <ClienteNome>{clienteNome}</ClienteNome>
            <Status>● {status}</Status>
          </div>
        </ClienteInfo>
        <div>➡️</div>
      </Header>
      <ProductTable>
        <thead>
          <tr>
            <th>Produto</th>
            <th>Próx. compra</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto, index) => (
            <tr key={index}>
              <ProductName>{produto.nome}</ProductName>
              <PurchaseDate>{produto.dataCompra}</PurchaseDate>
            </tr>
          ))}
        </tbody>
      </ProductTable>
    </CardContainer>
  );
};

export default CardPredComponent;
