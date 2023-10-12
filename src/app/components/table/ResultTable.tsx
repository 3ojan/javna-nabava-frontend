import React, { useEffect, useRef, useState } from 'react';
import Table, { ColumnsType, TableProps } from 'antd/es/table';
import {
  StyledMobileRow,
  StyledMobileRowDividerLine,
  StyledResultsTableDiv,
  StyledTableDivWrapper,
} from './styled';
import { mobileWidth } from 'src/app/global/constants';
import { ConfigProvider, Divider } from 'antd';
import ThemeProvider from './ThemeProvider';

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
  rkpid: string;
  oib: string;
  naziv: string;
  // postcode: string;
  mjesto: string | null;
  adresa: string;
  // amount: string;
  description: string;
  // level_1: string[];
  // level_2: string[];
  // level_3: string[];
  // level_4: string[];
  // function_level_1: string[];
  // function_level_2: string[];
  // function_level_3: string[];
  // function_level_4: string[];
  // comment: string | null;
  // update_date: string | null;
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
        <StyledMobileRow>
          <td>{Titles.oznaka}</td>
          <td>{record.id}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>{Titles.oib}</td>
          <td>{record.oib}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>{Titles.naziv}</td>
          <td>{record.name}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>{Titles.mjesto}</td>
          <td>{record.city}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>{Titles.postanskiBroj}</td>
          <td>{record.postcode}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>{Titles.datumIsplate}</td>
          <td>{record.date}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>{Titles.iznosIsplate}</td>
          <td>{record.amount}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>{Titles.opisIsplate}</td>
          <td>{record.description}</td>
        </StyledMobileRow>
      </>
    ),
    responsive: ['xs'],
  },
  // {
  //   title: 'mobileTitles',
  //   render: (record) => (
  //     <>
  //       {Titles.oznaka}
  //       <hr />
  //       <br />
  //       {Titles.oib}
  //       <hr />
  //       <br />
  //       {Titles.naziv}
  //       <hr />
  //       <br />
  //       {Titles.mjesto}
  //       <hr />
  //       <br />
  //       {Titles.postanskiBroj}
  //       <hr />
  //       <br />
  //       {Titles.datumIsplate}
  //       <hr />
  //       <br />
  //       {Titles.iznosIsplate}
  //       <hr />
  //       <br /> {Titles.opisIsplate}
  //     </>
  //   ),
  //   responsive: ['xs'],
  // },
  // {
  //   title: 'mobile',
  //   render: (record) => (
  //     <>
  //       {record.id}
  //       <hr />
  //       <br />
  //       {record.oib}
  //       <hr />
  //       <br />
  //       {record.name}
  //       <hr />
  //       <br />
  //       {record.city}
  //       <hr />
  //       <br />
  //       {record.postcode}
  //       <hr />
  //       <br />
  //       {record.date}
  //       <hr />
  //       <br />
  //       {record.amount}
  //       <hr />
  //       <br />
  //       {record.description}
  //     </>
  //   ),
  //   responsive: ['xs'],
  // },
  {
    title: Titles.oznaka,
    dataIndex: 'rkpid',
    key: 'rkpid',
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
    dataIndex: 'naziv',
    key: 'name',
    // sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
    responsive: ['sm'],
  },
  {
    title: Titles.mjesto,
    dataIndex: 'mjesto',
    key: 'city',
    responsive: ['sm'],
  },
  // {
  // title: Titles.postanskiBroj,
  // key: 'postcode',
  // dataIndex: 'postcode',
  // defaultSortOrder: 'descend',
  // responsive: ['sm'],
  // className: 'custom-column-background',
  // sorter: (a, b) => {
  //   const firstPostcode = parseInt(a.postcode);
  //   const secondPostcode = parseInt(b.postcode);
  //   return firstPostcode - secondPostcode;
  // },
  // },
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
      {/* <ConfigProvider
        theme={{
          token: {
            colorBgBase: 'red',
          },
        }}
      > */}
      {/* <ThemeProvider> */}
      <StyledTableDivWrapper>
        <Table
          columns={columns} //columnType
          dataSource={props.data}
          onChange={onChange}
        />
      </StyledTableDivWrapper>
      {/* </ThemeProvider> */}
      {/* </ConfigProvider> */}
    </StyledResultsTableDiv>
  );
}
