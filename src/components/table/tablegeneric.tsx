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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TableData = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

interface DataTableProps {
  columns: string[];
  data: { [key: string]: any }[];
  columnTitles: { [key: string]: string }; // Map from data key to column title
}

const DataTable: React.FC<DataTableProps> = ({ columns, data, columnTitles }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          {columns.map((column) => (
            <TableCell key={column}>{columnTitles[column]}</TableCell>
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
