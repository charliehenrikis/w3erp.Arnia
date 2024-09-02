/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderSection from './headersection';
import PaginationTable from './paginationTable';
import DataTable from './tablegeneric';

const Container = styled.div`
  font-family: Poppins, sans-serif;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 1rem;
  margin-bottom: 20px;
`;

const Loader = styled.div`
  text-align: center;
  font-size: 1rem;
  color: #555;
`;

interface DataSectionProps {
  iconSrc: string;
  title: string;
  fetchUrl: string;
  columnTitles: { [key: string]: string };
  percentageField: string;
  amountField?: string;  // Adiciona o campo de quantidade
  filterPercentage?: number; // Adiciona filtro de porcentagem, se necessário
  sortOrder?: 'asc' | 'desc'; // Ordem de ordenação para amount
  showToggle?: boolean;
}

const DataSection: React.FC<DataSectionProps> = ({
  iconSrc,
  title,
  fetchUrl,
  columnTitles,
  percentageField,
  amountField,
  filterPercentage,
  sortOrder = 'asc',
  showToggle = true
}) => {
  const [data, setData] = useState<any[]>([]);
  const [showHigh, setShowHigh] = useState(true); // Define a visualização padrão como "Em Alta"
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(fetchUrl);
        const result = await response.json();

        // Adicionar valores aleatórios para o campo `amount` caso ele não exista
        const updatedData = result.map((item: any) => ({
          ...item,
          [amountField || 'amount']: item[amountField || 'amount'] ?? Math.floor(Math.random() * 100) + 1,
        }));

        setData(updatedData);
      } catch (error) {
        setError(`Erro ao buscar os dados de ${title}. Tente novamente mais tarde.`);
        console.error(`Erro ao buscar os dados de ${title}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchUrl, title, amountField]);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleShowAll = () => {
    setShowAllPages(true);
    setCurrentPage(1);
  };

  const filteredData = data
    .filter(item =>
      showHigh
        ? item[percentageField] >= (filterPercentage || 0) // Mostrar produtos "Em Alta" com porcentagem >= filterPercentage
        : item[percentageField] < (filterPercentage || 0) // Mostrar produtos "Em Baixa" com porcentagem < filterPercentage
    );

  const sortedData = amountField
    ? filteredData.sort((a, b) => {
        const aValue = a[amountField || 'amount'];
        const bValue = b[amountField || 'amount'];
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      })
    : filteredData; // Ordena apenas se o campo amountField estiver definido

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const formatPercentage = (percentage: number) => `${percentage.toFixed(0)}%`;

  return (
    <Container>
      <HeaderSection
        iconSrc={iconSrc}
        title={title}
        showToggle={showToggle}
        showHigh={showHigh}
        onToggle={setShowHigh}
      />
      {loading && <Loader>Carregando...</Loader>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && (
        <>
          <DataTable
            columns={Object.keys(columnTitles)}
            data={paginatedData.map(item => ({
              ...item,
              [percentageField]: formatPercentage(item[percentageField]),
              amount: item[amountField || 'amount']
            }))}
            columnTitles={columnTitles}
          />
          <PaginationTable
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            onShowAll={handleShowAll}
            showAllPages={showAllPages || showHigh}
          />
        </>
      )}
    </Container>
  );
};

export default DataSection;
