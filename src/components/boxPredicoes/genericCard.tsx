import React from 'react';
import styled from 'styled-components';

interface Produto {
  nomeProduto: string;
  dataCompra: string;
}

interface Cliente {
  nomeLoja: string;
  status: string;
}

const GenericCardContainer = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px; /* Espaçamento entre cards */
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
    color: #9b59b6;
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

const GenericCard: React.FC<{ cliente: Cliente; produtos: Produto[] }> = ({ cliente, produtos }) => {
  return (
    <GenericCardContainer>
      <Header>
        <ClienteInfo>
          <div>👤</div>
          <div>
            <ClienteNome>{cliente.nomeLoja}</ClienteNome>
            <Status>● {cliente.status}</Status>
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
          {produtos.length === 0 ? (
            <tr>
              <td colSpan={2}>Nenhum dado disponível.</td>
            </tr>
          ) : (
            produtos.map((produto, index) => (
              <tr key={index}>
                <ProductName>{produto.nomeProduto}</ProductName>
                <PurchaseDate>{produto.dataCompra}</PurchaseDate>
              </tr>
            ))
          )}
        </tbody>
      </ProductTable>
    </GenericCardContainer>
  );
};

export default GenericCard;
