import React, { useEffect, useState } from 'react';
import { ColumnsType, TableProps } from 'antd/es/table';
import { StyledResultsTableDiv, StyledTable } from './styled';
import { mobileWidth } from 'src/app/global/constants';

interface TableData {
  data: DataType[];
}

/** MobileTableData is an 2D array of an array of MobileTableData and DataType*/
interface MobileTableData {
  titles: MobileTitles[];
  data: DataType[];
}

interface MobileTitles {
  oznaka: string;
  oib: string;
  naziv: string;
  mjesto: string;
}

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
interface MobileDataType {
  data: MobileTableData[];
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
  },
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
  const [isMobileDataSet, setIsMobileDataSet] = useState(false);
  const [columnType, setColumnType] = useState(
    window.innerWidth <= mobileWidth ? mobileColumns : columns
  );

  const handleResize = () => {
    console.log(mobileColumns);
    console.log(props);

    setColumnType(window.innerWidth <= 768 ? mobileColumns : columns);
    if (window.innerWidth <= 768 && !isMobileDataSet) {
      console.log('mobile');
      debugger;
      const mobileProps: MobileDataType = {
        data: [],
      };
      // need to map current data to mobile data!!!
    }
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
    <StyledResultsTableDiv>
      <StyledTable
        className="resutlsTable"
        columns={columnType}
        dataSource={props.data}
        onChange={onChange}
      />
    </StyledResultsTableDiv>
  );
}
