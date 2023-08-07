import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { ColumnsType, TableProps } from 'antd/es/table';
import ExportButtons from '../buttons/ExportButtons';
import { FullWidthDiv } from '../general/styled';
import { ResultsTableDiv, StyledTable } from './styled';

interface TableData {
  data: [];
}

/** Mora biti isto kao i json atributi */
interface DataType {
  id: string;
  oib: string;
  name: string;
  postcode: string;
  city: string | null;
  date: string;
  amount: string;
  description: string;
  level_1: string[];
  level_2: string[];
  level_3: string[];
  level_4: string[];
  function_level_1: string[];
  function_level_2: string[];
  function_level_3: string[];
  function_level_4: string[];
  comment: string | null;
  update_date: string | null;
}
interface MobileDataType {
  titles: string;
  data: DataType;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Oznaka',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'OIB',
    dataIndex: 'oib',
    key: 'oib',
  },
  {
    title: 'Ime / Naziv',
    dataIndex: 'name',
    key: 'name',
    // filters: [
    //   {
    //     text: "Joe",
    //     value: "Joe",
    //   },
    //   {
    //     text: "Jim",
    //     value: "Jim",
    //   },
    //   {
    //     text: "Submenu",
    //     value: "Submenu",
    //     children: [
    //       {
    //         text: "Green",
    //         value: "Green",
    //       },
    //       {
    //         text: "Black",
    //         value: "Black",
    //       },
    //     ],
    //   },
    // ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value: string, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    key: 'city',
    title: 'Grad / Opcina',
    dataIndex: 'city',
    responsive: ['md'],
  },
  {
    key: 'postcode',
    title: 'Postanski broj',
    dataIndex: 'postcode',
    defaultSortOrder: 'descend',
    className: 'custom-column-background',
    sorter: (a, b) => {
      const firstPostcode = parseInt(a.postcode);
      const secondPostcode = parseInt(b.postcode);

      return firstPostcode - secondPostcode;
    },
  },
  {
    key: 'date',
    title: 'Datum isplate',
    dataIndex: 'date',
  },
  {
    key: 'amount',
    title: 'Iznos isplate',
    dataIndex: 'amount',
  },
  {
    key: 'description',
    title: 'Opis isplate',
    dataIndex: 'description',
    // responsive: ['md'],
  },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     filters: [
  //       {
  //         text: "London",
  //         value: "London",
  //       },
  //       {
  //         text: "New York",
  //         value: "New York",
  //       },
  //     ],
  //     onFilter: (value: string, record) => record.oib.indexOf(value) === 0,
  //   },
];

const mobileColumns: ColumnsType<MobileDataType> = [
  {
    title: 'titles',
    dataIndex: 'titles',
    key: 'titles',
  },
  {
    title: 'data',
    dataIndex: 'data',
    key: 'data',
  },
];

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default function ResultTable(props: TableData) {
  const [columnType, setColumnType] = useState(
    window.innerWidth <= 768 ? mobileColumns : columns
  );
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    console.log(window.innerWidth);
    setColumnType(window.innerWidth <= 768 ? mobileColumns : columns);
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // setDataSource(windowWidth <= 768 ? mobileColumns : columns);
  return (
    <ResultsTableDiv>
      <StyledTable
        className="resutlsTable"
        columns={columnType}
        dataSource={props.data}
        onChange={onChange}
      />
    </ResultsTableDiv>
  );
}
