import React from 'react';
import PeopleImg from '../../assets/facial-cleanser.png';
import DataSection from './tableCode';

const CustomersTable: React.FC = () => (
  <DataSection
    iconSrc={PeopleImg}
    title="Clientes"
    fetchUrl="http://localhost:3000/customers"
    filterPercentage={35}
  />
);

export default CustomersTable;