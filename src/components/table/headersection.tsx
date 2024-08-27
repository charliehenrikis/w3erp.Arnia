import React from 'react';
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #333;
  flex-grow: 1;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
  margin-left: auto;
`;

const Button = styled.button<{ active: boolean; type: 'high' | 'low' }>`
  background-color: ${(props) =>
    props.type === 'high'
      ? props.active
        ? '#4caf50'
        : '#f5f5f5'
      : props.active
      ? '#f44336'
      : '#f5f5f5'};
  color: ${(props) => (props.active ? 'white' : '#333')};
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

interface HeaderSectionProps {
  iconSrc: string;
  title: string;
  showHigh: boolean;
  onToggle: (showHigh: boolean) => void;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ iconSrc, title, showHigh, onToggle }) => {
  return (
    <Header>
      <Icon src={iconSrc} alt="Ícone" />
      <Title>{title}</Title>
      <Buttons>
        <Button active={showHigh} type="high" onClick={() => onToggle(true)}>
          Em alta
        </Button>
        <Button active={!showHigh} type="low" onClick={() => onToggle(false)}>
          Em baixa
        </Button>
      </Buttons>
    </Header>
  );
};

export default HeaderSection;
