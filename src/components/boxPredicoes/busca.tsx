import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 300px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: left;
  width: 100%;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 5px;
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: none;
  padding: 0 8px;
  font-size: 16px;
  outline: none;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 20px;
  color: #666;
  margin-right: 5px;
`;

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <Container>
      <Title>Predições</Title>
      <SearchBarContainer>
        <SearchIcon />
        <Input
          type="text"
          placeholder="Pesquise um produto"
          onChange={(e) => onSearch(e.target.value)}
        />
      </SearchBarContainer>
    </Container>
  );
};

export default SearchBar;
