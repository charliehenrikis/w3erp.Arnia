import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

// Estilização dos componentes
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 347px;
  height: 266px;
  position: relative;
`;


const PredicoesBox: React.FC = () => {
  const [data, setData] = useState<{ produto: string; proxCompra: string }[]>([]);
  const [status, setStatus] = useState<string>('Carregando...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');
        const result = await response.json();
        setData(result);
        setStatus('Dados carregados com sucesso');
      } catch (error) {
        setStatus('Erro ao carregar dados');
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
    </Container>
  );
};

export default PredicoesBox;
