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
  datum: string | null;
  isplatiteljrkp: string;
  isplatitelj: string | null;
  kategorija: string | null;
  vrstarashoda: string | null;
  opis: string | null;
  adresa: string | null;
  primatelj: string | null;
  oib: string | null;
  mjesto: string | null;
  iznos: string | null;
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
          <td>ID</td>
          <td>{record.id}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>RKPID</td>
          <td>{record.rkpid}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Datum</td>
          <td>{record.datum}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Isplatitelj RKPID</td>
          <td>{record.isplatiteljrkp}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Isplatitelj</td>
          <td>{record.isplatitelj}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Kategorija</td>
          <td>{record.kategorija}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Vrsta Rashoda</td>
          <td>{record.vrstarashoda}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Opis</td>
          <td>{record.opis}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Adresa</td>
          <td>{record.adresa}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Primatelj</td>
          <td>{record.primatelj}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>OIB</td>
          <td>{record.oib}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Mjesto</td>
          <td>{record.mjesto}</td>
        </StyledMobileRow>
        <StyledMobileRowDividerLine />
        <StyledMobileRow>
          <td>Iznos</td>
          <td>{record.iznos}</td>
        </StyledMobileRow>
      </>
    ),
    responsive: ['xs'],
  },
  {
    title: 'RKPID',
    dataIndex: 'rkpid',
    key: 'rkpid',
    responsive: ['sm'],
  },
  {
    title: 'Datum',
    dataIndex: 'datum',
    key: 'datum',
    responsive: ['sm'],
  },
  {
    title: 'Isplatitelj RKPID',
    dataIndex: 'isplatiteljrkp',
    key: 'isplatiteljrkp',
    responsive: ['sm'],
  },
  {
    title: 'Isplatitelj',
    dataIndex: 'isplatitelj',
    key: 'isplatitelj',
    responsive: ['sm'],
  },
  {
    title: 'Kategorija',
    dataIndex: 'kategorija',
    key: 'kategorija',
    responsive: ['sm'],
  },
  {
    title: 'Vrsta Rashoda',
    dataIndex: 'vrstarashoda',
    key: 'vrstarashoda',
    responsive: ['sm'],
  },
  {
    title: 'Opis',
    dataIndex: 'opis',
    key: 'opis',
    responsive: ['sm'],
  },
  {
    title: 'Primatelj',
    dataIndex: 'primatelj',
    key: 'primatelj',
    responsive: ['sm'],
  },
  {
    title: 'OIB',
    dataIndex: 'oib',
    key: 'oib',
    responsive: ['sm'],
  },
  {
    title: 'Mjesto',
    dataIndex: 'mjesto',
    key: 'mjesto',
    responsive: ['sm'],
  },
  {
    title: 'Iznos',
    dataIndex: 'iznos',
    key: 'iznos',
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
