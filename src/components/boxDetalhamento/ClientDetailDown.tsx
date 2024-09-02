import React from 'react';
import PeopleImg from '../../assets/prabaixo.png';
import DataSection from '../table/tableCode';

const ClientDetailDown: React.FC = () => (
  <DataSection
    iconSrc={PeopleImg}
    title="Clientes em baixa"
    fetchUrl="http://localhost:3000/customers"
    columnTitles={{ id: 'ID', name: 'Clientes', percentage: 'Percentual', amount: 'QTD' }}
    percentageField="percentage"
    amountField="amount" // Adiciona o campo de quantidade para ordenação
    sortOrder="asc" // Define a ordem de ordenação para decrescente
    showToggle={false}
    filterPercentage={-10} 
  />
);

export default ClientDetailDown;
