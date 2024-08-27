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

  const startPage = Math.max(1, Math.min(currentPage - Math.floor(5 / 2), totalPages - 5 + 1));
  const endPage = Math.min(startPage + 5 - 1, totalPages);

  return (
    <PaginationTableContainer>
      {!showAllPages && totalPages > 5 && (
        <>
          {showPagesInBlocks(startPage, endPage)}
          {totalPages > endPage && onShowAll && (
            <ShowAllButton onClick={onShowAll}>Mostrar Todos</ShowAllButton>
          )}
        </>
      )}
      {showAllPages && showPagesInBlocks(1, totalPages)}
    </PaginationTableContainer>
  );
};

export default PaginationTable;