import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import LampadaImg from '../../assets/facial-cleanser.png';
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

interface Customer {
  id: string;
  name: string;
  percentage: string;
}

const CustomersTable: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [showHigh, setShowHigh] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [showAllPages, setShowAllPages] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://localhost:3000/customers');
        const data: Customer[] = await response.json();
        setCustomers(data);
      } catch (error) {
        console.error('Erro ao buscar os clientes:', error);
      }
    };
    fetchCustomers();
  }, []);

  const handleToggle = (showHigh: boolean) => {
    setShowHigh(showHigh);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => setCurrentPage(page);

  const handleShowAllPages = () => {
    setShowAllPages(!showAllPages);
    setCurrentPage(1); // Voltar para a página 1 quando mostrar todas as páginas
  };

  const filteredCustomers = customers.filter(customer =>
    showHigh ? customer.name.toLowerCase().includes('a') : customer.name.toLowerCase().includes('b')
  );

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);


  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <Container>
      <HeaderSection
        iconSrc={LampadaImg}
        title="Clientes"
        showHigh={showHigh}
        onToggle={handleToggle}
      />
      <DataTable
        columns={['id', 'name', 'percentage']}
        data={paginatedCustomers}
      />
      <PaginationTable
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onShowAll={handleShowAllPages}
        showAllPages={showAllPages}
      />
    </Container>
  );
};

export default CustomersTable;
