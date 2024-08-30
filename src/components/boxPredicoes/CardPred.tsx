/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GenericCard from './genericCard';
import SearchBar from './busca';

interface Produto {
  nomeProduto: string;
  dataCompra: string;
}

interface Cliente {
  nomeLoja: string;
  status: string;
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    return [];
  }
};

const CardPredComponent: React.FC = () => {
  const [cardsData, setCardsData] = useState<{ cliente: Cliente; produtos: Produto[] }[]>([]);
  const [filteredData, setFilteredData] = useState<{ cliente: Cliente; produtos: Produto[] }[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const clientesData = await fetchData('http://localhost:3000/customers');
        const produtosData = await fetchData('http://localhost:3000/products');

        if (Array.isArray(clientesData) && Array.isArray(produtosData)) {
          const formattedClientes = clientesData.map((cliente: any) => ({
            nomeLoja: cliente.name,
            status: cliente.percentage > 50 ? 'Ativo' : 'Inativo',
          }));
          const formattedProdutos = produtosData.map((produto: any) => ({
            nomeProduto: produto.name,
            dataCompra: new Date(produto.nextPurchase).toLocaleDateString(),
          }));

          const cards = formattedClientes.map((cliente, index) => ({
            cliente,
            produtos: formattedProdutos.slice(index * 3, (index + 1) * 3),
          }));

          setCardsData(cards);
          setFilteredData(cards); // Inicialmente, exibe todos os cards
        } else {
          throw new Error('Dados estão no formato inesperado.');
        }
      } catch (error) {
        setError('Erro ao carregar informações.');
        console.error(error);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (searchTerm.length >= 3) {
      const lowercasedSearchTerm = searchTerm.toLowerCase();
      const filtered = cardsData.filter(card =>
        card.cliente.nomeLoja.toLowerCase().includes(lowercasedSearchTerm) ||
        card.produtos.some(produto => 
          produto.nomeProduto.toLowerCase().includes(lowercasedSearchTerm)
        )
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(cardsData); // Exibe todos os cards se o termo de busca for menor que 3 caracteres
    }
  }, [searchTerm, cardsData]);

  if (error) {
    return <div>{error}</div>;
  }

  if (cardsData.length === 0) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <SearchBar onSearch={setSearchTerm} />
      <Container>
        {filteredData.length === 0 && searchTerm.length >= 3 ? (
          <div>Nenhum resultado encontrado.</div>
        ) : (
          filteredData.map((cardData, index) => (
            <GenericCard
              key={index}
              cliente={cardData.cliente}
              produtos={cardData.produtos}
            />
          ))
        )}
      </Container>
    </>
  );
};

export default CardPredComponent;
