import React from 'react';
import styled from 'styled-components';
import { RadialBarDasboard } from './graphic';

const InnerBox = styled.div`
  width: 275px;
  height: 100px;
  border-radius: 12px;
  margin-bottom: 160px;
  background-color: #02156A;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

const GraphContainer = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;

const H2 = styled.h2`
  color: #ffffff;
  font-size: 15px;
  margin: 0;
  margin-bottom: 8px;
`;

const ValuePercentageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Value = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Percentage = styled.span<{ percentage: number }>`
  background-color: ${({ percentage }) => (percentage < 35 ? '#FF0000' : '#00C247')};
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
`;

interface InnerBoxComponentProps {
  text: string;
  value: number;
  percentage: number;
}

const InnerBoxComponent: React.FC<InnerBoxComponentProps> = ({ text, value, percentage }) => {
  return (
    <InnerBox>
      <GraphContainer>
        <RadialBarDasboard percentageGraphic={percentage} />
      </GraphContainer>
      <TextContainer>
        <H2>{text}</H2>
        <ValuePercentageContainer>
          <Value>{value}</Value>
          <Percentage percentage={percentage}>
            {percentage > 0 ? `+${percentage}%` : `${percentage}%`}
          </Percentage>
        </ValuePercentageContainer>
      </TextContainer>
    </InnerBox>
  );
};

export default InnerBoxComponent;