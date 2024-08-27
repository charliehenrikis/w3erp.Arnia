import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LampadaImg from '../../assets/facial-cleanser.png';
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

interface Product {
  id: string;
  name: string;
  percentage: number;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showHigh, setShowHigh] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://localhost:3000/products');
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Erro ao buscar os produtos. Tente novamente mais tarde.');
        console.error('Erro ao buscar os produtos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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

  const filteredProducts = products.filter(product =>
    showHigh ? product.percentage >= 0.5 : product.percentage < 0.5
  );

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const formatPercentage = (percentage: number) => `${percentage.toFixed(0)}%`;

  return (
    <Container>
      <HeaderSection
        iconSrc={LampadaImg}
        title="Produtos"
        showHigh={showHigh}
        onToggle={handleToggle}
      />
      {loading && <Loader>Carregando...</Loader>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && (
        <>
          <DataTable
            columns={['id', 'name', 'percentage']}
            data={paginatedProducts.map(product => ({
              ...product,
              percentage: formatPercentage(product.percentage),
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

export default Products;
