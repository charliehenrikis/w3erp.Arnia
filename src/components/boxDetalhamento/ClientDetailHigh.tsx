import React from 'react';
import PeopleImg from '../../assets/pracima.png';
import DataSection from '../table/tableCode';

const ClientDetailHigh: React.FC = () => (
  <DataSection
    iconSrc={PeopleImg}
    title="Clientes em alta"
    fetchUrl="http://localhost:3000/customers"
    columnTitles={{ id: 'ID', name: 'Clientes', percentage: 'Percentual', amount: 'QTD' }}
    percentageField="percentage"
    amountField="amount" // Adiciona o campo de quantidade para ordenação
    sortOrder="desc" // Define a ordem de ordenação para decrescente
    showToggle={false}
    filterPercentage={50} // Define que todos os itens serão exibidos sem filtro adicional
  />
);

export default ClientDetailHigh;
