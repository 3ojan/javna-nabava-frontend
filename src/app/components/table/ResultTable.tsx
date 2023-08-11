import React, { useEffect, useRef, useState } from 'react';
import { ColumnsType, TableProps } from 'antd/es/table';
import { StyledResultsTableDiv, StyledTable } from './styled';
import { mobileWidth } from 'src/app/global/constants';

interface TableData {
  data: DataType[];
}

enum Titles {
  oznaka = 'Oznaka',
  oib = 'OIB',
  naziv = 'Ime / Naziv',
  mjesto = 'Grad / Općina',
  postanskiBroj = 'Poštanski broj',
  datumIsplate = 'Datum isplate',
  iznosIsplate = 'Iznos isplate',
  opisIsplate = 'Opis isplate',
}
/** MobileTableData is an 2D array of an array of MobileTableData and DataType*/
// interface MobileTableData {
//   titles: MobileTitles[];
//   data: DataType[];
// }

// interface MobileTitles {
//   oznaka: string;
//   oib: string;
//   naziv: string;
//   mjesto: string;
//   postanskiBroj: string;
//   datumIsplate: string;
//   iznosIsplate: string;
//   opisIsplate: string;
// }

/** names need to be same as the names in json object */
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
/** typified data array to an array of MobileTableData*/
// interface MobileDataType {
//   data: MobileTableData[];
// }

const columns: ColumnsType<DataType> = [
  {
    title: 'mobile',
    render: (record) => (
      <>
        {Titles.oznaka}
        <br />
        <br />
        {Titles.oib}
        <br />
        <br />
        {Titles.naziv}
        <br />
        <br />
        {Titles.mjesto}
        <br />
        <br />
        {Titles.postanskiBroj}
        <br />
        <br />
        {Titles.datumIsplate}
        <br />
        <br />
        {Titles.iznosIsplate}
        <br />
        <br /> {Titles.opisIsplate}
      </>
    ),
    responsive: ['xs'],
  },
  {
    title: 'mobile',
    render: (record) => (
      <>
        {record.id}
        <br />
        <br />
        {record.oib}
        <br />
        <br />
        {record.name}
        <br />
        <br />
        {record.city}
        <br />
        <br />
        {record.postcode}
        <br />
        <br />
        {record.date}
        <br />
        <br />
        {record.amount}
        <br />
        <br />
        {record.description}
      </>
    ),
    responsive: ['xs'],
  },
  {
    title: Titles.oznaka,
    dataIndex: 'id',
    key: 'id',
    responsive: ['sm'],
  },
  {
    title: Titles.oib,
    dataIndex: 'oib',
    key: 'oib',
    responsive: ['sm'],
  },
  {
    title: Titles.naziv,
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
    responsive: ['sm'],
  },
  {
    title: Titles.mjesto,
    key: 'city',
    dataIndex: 'city',
    responsive: ['sm'],
  },
  {
    title: Titles.postanskiBroj,
    key: 'postcode',
    dataIndex: 'postcode',
    defaultSortOrder: 'descend',
    responsive: ['sm'],
    className: 'custom-column-background',
    sorter: (a, b) => {
      const firstPostcode = parseInt(a.postcode);
      const secondPostcode = parseInt(b.postcode);

      return firstPostcode - secondPostcode;
    },
  },
  {
    title: Titles.datumIsplate,
    key: 'date',
    dataIndex: 'date',
    responsive: ['sm'],
  },
  {
    title: Titles.iznosIsplate,
    key: 'amount',
    dataIndex: 'amount',
    responsive: ['sm'],
  },
  {
    title: Titles.opisIsplate,
    key: 'description',
    dataIndex: 'description',
    responsive: ['sm'],
  },
];

// const mobileColumns: ColumnsType<MobileDataType> = [
//   {
//     title: 'titles',
//     dataIndex: 'titles',
//     key: 'titles',
//   },
//   {
//     title: 'data',
//     dataIndex: 'data',
//     key: 'data',
//   },
// ];

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log('params', pagination, filters, sorter, extra);
};

export default function ResultTable(props: TableData) {
  //CODE FOR MOBILE
  /*const isMobileDataSet = useRef(false);
  const [columnType, setColumnType] = useState(
    window.innerWidth <= mobileWidth ? mobileColumns : columns
  );

  const getTitlesForMobile = () => {
    return {
      oznaka: 'Oznaka',
      oib: 'OIB',
      naziv: 'Naziv',
      mjesto: 'Mjesto',
      postanskiBroj: 'Postanski broj',
      datumIsplate: 'Datum isplate',
      iznosIsplate: 'Iznos isplate',
      opisIsplate: 'Opis isplate',
    };
  };

  const handleResize = () => {
    setColumnType(window.innerWidth <= 768 ? mobileColumns : columns);

    if (window.innerWidth <= 768 && !isMobileDataSet.current) {
      console.log('setting mobile data');
      debugger;
      // const mobileProps: MobileDataType = {
      //   data: [],
      // };

      const mobileProps = props.data.map((item) => {
        ...item;
        title: 'Oznaka';
        value: item.id;
      });

      isMobileDataSet.current = true;
    }
    // need to map current data to mobile data!!!
  };

  useEffect(() => {
    // Add event listener when the component mounts
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); */

  return (
    <StyledResultsTableDiv>
      <StyledTable
        className="resutlsTable"
        columns={columns} //columnType
        dataSource={props.data}
        onChange={onChange}
      />
    </StyledResultsTableDiv>
  );
}
