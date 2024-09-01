import React from 'react';
import styled from 'styled-components';

const PaginationTableContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`;

const PageButton = styled.button<{ active: boolean }>`
  background-color: ${(props) => (props.active ? '#001c98' : '#f5f5f5')};
  color: ${(props) => (props.active ? 'white' : '#333')};
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
`;

const ShowAllButton = styled.button`
  background-color: #001c98;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
`;

interface PaginationTableProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onShowAll?: () => void;
  showAllPages?: boolean;
}

const PaginationTable: React.FC<PaginationTableProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  onShowAll,
  showAllPages = false,
}) => {
  const maxPagesToShow = 5;

  // Verificação de total de páginas e se é necessário limitar
  if (totalPages <= 0) return null;

  const showPagesInBlocks = (start: number, end: number) => {
    const pages = [];
    for (let i = start; i <= end; i++) {
      pages.push(
        <PageButton key={i} active={currentPage === i} onClick={() => onPageChange(i)}>
          {i}
        </PageButton>
      );
    }
    return pages;
  };

  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(maxPagesToShow / 2), totalPages - maxPagesToShow + 1)
  );
  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  return (
    <PaginationTableContainer>
      {!showAllPages && totalPages > maxPagesToShow && (
        <>
          {showPagesInBlocks(startPage, endPage)}
          {endPage < totalPages && onShowAll && (
            <ShowAllButton onClick={onShowAll}>Mostrar Todos</ShowAllButton>
          )}
        </>
      )}
      {showAllPages && showPagesInBlocks(1, totalPages)}
    </PaginationTableContainer>
  );
};

export default PaginationTable;
