import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import HeaderSection from './headersection';
import DataTable from './tablegeneric';
import PaginationTable from './paginationTable';

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
  filterPercentage: number;
}

const DataSection: React.FC<DataSectionProps> = ({ iconSrc, title, fetchUrl, filterPercentage }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [showHigh, setShowHigh] = useState(true);
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
        setData(result);
      } catch (error) {
        setError(`Erro ao buscar os dados de ${title}. Tente novamente mais tarde.`);
        console.error(`Erro ao buscar os dados de ${title}:`, error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchUrl, title]);

  const handleToggle = (showHigh: boolean) => {
    setShowHigh(showHigh);
    setCurrentPage(1);
    setShowAllPages(false);
  };

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleShowAll = () => {
    setShowAllPages(true);
    setCurrentPage(1);
  };

  const filteredData = data
    .filter(item =>
      showHigh ? item.percentage >= filterPercentage : item.percentage < filterPercentage
    )
    .sort((a, b) =>
      showHigh ? b.percentage - a.percentage : a.percentage - b.percentage
    );

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const formatPercentage = (percentage: number) => `${percentage.toFixed(0)}%`;

  return (
    <Container>
      <HeaderSection
        iconSrc={iconSrc}
        title={title}
        showHigh={showHigh}
        onToggle={handleToggle}
      />
      {loading && <Loader>Carregando...</Loader>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && (
        <>
          <DataTable
            columns={['id', 'name', 'percentage']}
            data={paginatedData.map(item => ({
              ...item,
              percentage: formatPercentage(item.percentage),
            }))}
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
