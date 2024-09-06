import React from 'react';
import PeopleImg from '../../assets/every-user.png';
import DataSection from './tableCode';

const CustomersTable: React.FC = () => (
  <DataSection
    iconSrc={PeopleImg}
    title="Clientes"
    fetchUrl="http://localhost:3000/customers"
    filterPercentage={30}
    columnTitles={{ id: 'ID', name: 'Cliente', percentage: 'Porcentagem' }}
    percentageField="percentage"
  />
);

export default CustomersTable;
