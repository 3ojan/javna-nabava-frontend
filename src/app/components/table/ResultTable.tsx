import Table, { ColumnsType, TableProps } from 'antd/es/table';
import {
  StyledCellHeightSpan,
  StyledMobileRow,
  // StyledMobileRowDividerLine,
  StyledMobileTdDividerLine,
  StyledResultsTableDiv,
  StyledTableDivWrapper,
} from './styled';
import { ColumnFilterItem } from 'antd/es/table/interface';

interface TableData {
  data: DataType[];
  isplatiteljsFilter: ColumnFilterItem[];
  monthFilter: ColumnFilterItem[];
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

/** names need to be same as the names in json object */
interface DataType {
  id: string;
  rkpid: string;
  datum: string | null;
  foramtedDate: string | null;
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

const formatNumber = (number: string) => {
  const lastIndex = number.lastIndexOf('.');
  const modifiedString =
    lastIndex !== -1
      ? number.slice(0, lastIndex) + ',' + number.slice(lastIndex + 1)
      : number;

  return modifiedString;
};

const onChange: TableProps<DataType>['onChange'] = (
  pagination,
  filters,
  sorter,
  extra
) => {
  console.log('params', pagination, filters, sorter, extra);
};

const renderLimitedCellHeight = (text: string) => (
  <StyledCellHeightSpan>{text}</StyledCellHeightSpan>
);

export default function ResultTable(props: TableData) {
  console.log('props', props);

  const columns: ColumnsType<DataType> = [
    {
      title: 'mobile',
      render: (record) => (
        <>
          <StyledMobileRow>
            <td>ID</td>
            <td>{record.id}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>RKPID</td>
            <td>{record.rkpid}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Mjesec</td>
            <td>{record.foramtedDate}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Isplatitelj RKPID</td>
            <td>{record.isplatiteljrkp}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Isplatitelj</td>
            <td>{record.isplatitelj}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Kategorija</td>
            <td>{record.kategorija}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Vrsta Rashoda</td>
            <td>{record.vrstarashoda}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Opis</td>
            <td>{record.opis}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Adresa</td>
            <td>{record.adresa}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Primatelj</td>
            <td>{record.primatelj}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>OIB</td>
            <td>{record.oib}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Mjesto</td>
            <td>{record.mjesto}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Iznos</td>
            <td>{record.iznos}</td>
          </StyledMobileRow>
          {/* <StyledMobileRowDividerLine /> */}
        </>
      ),
      responsive: ['xs'],
    },
    {
      title: 'Mjesec',
      dataIndex: 'foramtedDate',
      key: 'foramtedDate',
      responsive: ['sm'],
      width: '7%',
      filters: props.monthFilter,
    },
    {
      title: 'Isplatitelj',
      dataIndex: 'isplatitelj',
      key: 'isplatitelj',
      responsive: ['sm'],
      // widthth: '7%',
      filters: props.isplatiteljsFilter,
      onFilter: (value, record) =>
        record.isplatitelj!.includes(value.toString()),
    },
    {
      title: 'Vrsta Rashoda',
      dataIndex: 'vrstarashoda',
      key: 'vrstarashoda',
      responsive: ['sm'],
      // widthth: '7%',
      render: renderLimitedCellHeight,
    },
    {
      title: 'Primatelj',
      dataIndex: 'primatelj',
      key: 'primatelj',
      responsive: ['sm'],
      // widthth: '7%',
      render: renderLimitedCellHeight,
    },
    {
      title: 'OIB',
      dataIndex: 'oib',
      key: 'oib',
      responsive: ['sm'],
      width: '10%',
    },
    {
      title: 'Mjesto',
      dataIndex: 'mjesto',
      key: 'mjesto',
      responsive: ['sm'],
      // widthth: '7%',
    },
    {
      title: 'Opis',
      dataIndex: 'opis',
      key: 'opis',
      responsive: ['sm'],
      // widthth: '7%',
    },
    {
      title: 'Iznos',
      dataIndex: 'iznos',
      key: 'iznos',
      align: 'right',
      responsive: ['sm'],
      // width: '30%',
      render: (number) => formatNumber(number),
    },
  ];

  return (
    <StyledResultsTableDiv>
      <StyledTableDivWrapper>
        <Table
          className="table-wrapper"
          columns={columns} //columnType
          dataSource={props.data}
          onChange={onChange}
          size="middle"
        />
      </StyledTableDivWrapper>
    </StyledResultsTableDiv>
  );
}
