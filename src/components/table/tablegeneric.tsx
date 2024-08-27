/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

const TableHead = styled.thead`
  background-color: #001c98;
  color: white;
  font-weight: bold;
`;

const TableCell = styled.th`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const TableData = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
`;

const Arrow = styled.span`
  font-size: 16px;
  margin-left: 10px;
  color: #333;
`;

interface DataTableProps {
  columns: string[];
  data: { [key: string]: any }[];
  showArrow?: boolean;
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, showArrow = false }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          {columns.map((column) => (
            <TableCell key={column}>{column}</TableCell>
          ))}
        </tr>
      </TableHead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <TableData colSpan={columns.length}>Nenhum dado disponível.</TableData>
          </tr>
        ) : (
          data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <TableData key={column}>
                  {row[column]}
                  {showArrow && column === 'percentage' && <Arrow></Arrow>}
                </TableData>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </Table>
  );
};

export default DataTable;
