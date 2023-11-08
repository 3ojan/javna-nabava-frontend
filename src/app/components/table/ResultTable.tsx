import Table, { ColumnsType, TableProps } from 'antd/es/table';
import {
  StyledCellHeightSpan,
  StyledFiltersCheckboxGroup,
  StyledMobileFiltersContainer,
  StyledMobileRow,
  // StyledMobileRowDividerLine,
  StyledMobileTdDividerLine,
  StyledResultsTableDiv,
  StyledTableDivWrapper,
} from './styled';
import { ColumnFilterItem } from 'antd/es/table/interface';
import { useEffect, useRef, useState } from 'react';
import React from 'react';
import {
  Button,
  Checkbox,
  Col,
  Dropdown,
  Input,
  Menu,
  MenuProps,
  Modal,
  Row,
  Space,
} from 'antd';

interface TableData {
  data: DataType[];
  isplatiteljsFilter: ColumnFilterItem[];
  monthFilter: ColumnFilterItem[];
  rowAmount: number;
  // dateFilterDropDownVisible: () => boolean;
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
  const [filteredData, setFilteredData] = useState<DataType[]>(props.data);
  const [selectedDateFilterValues, setSelectedDateFilterValues] = useState<
    string[]
  >([]);
  const [selectedIsplatiteljFilterValues, setSelectedIsplatiteljFilterValues] =
    useState<string[]>([]);
  const [selectedRow, setSelectedRow] = useState<DataType | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const tableRef = useRef(null);

  const columns: ColumnsType<DataType> = [
    {
      title: 'mobile',
      render: (record) => (
        <>
          <StyledMobileRow>
            <td>Mjesec</td>
            <td>{record.foramtedDate}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Isplatitelj</td>
            <td>{record.isplatitelj}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Vr. Rashoda</td>
            <td>{record.vrstarashoda}</td>
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
            <td>Opis</td>
            <td>{record.opis}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Iznos €</td>
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
      onFilter: (value, record) =>
        record.foramtedDate!.includes(value.toString()),
      filterDropdownVisible: false,
      // filterDropdown: (
      //   <div style={{ padding: 8 }}>
      //     <Checkbox.Group
      //       style={{ width: '100%' }}
      //       // value={selectedKeys}
      //       // onChange={(values) => setSelectedKeys(values)}
      //     >
      //       {props.monthFilter?.map((filter) => (
      //         <Checkbox key={filter.value as string} value={filter.value}>
      //           {filter.text}
      //         </Checkbox>
      //       ))}
      //     </Checkbox.Group>
      //     <Space>
      //       <Button
      //         type="primary"
      //         onClick={() => {
      //           confirm();
      //           // Handle filtering logic here
      //         }}
      //       >
      //         OK
      //       </Button>
      //       <Button>Reset</Button>
      //     </Space>
      //   </div>
      // ),
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
      title: 'Iznos €',
      dataIndex: 'iznos',
      key: 'iznos',
      align: 'right',
      responsive: ['sm'],
      width: '7%',
      render: (value) =>
        new Intl.NumberFormat('hr-HR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value),
    },
  ];

  const onSelectRow = (record: DataType, event: any) => {
    setSelectedRow(record);
    setIsModalVisible(true);

    // Calculate the position of the modal relative to the clicked row
    const rowBoundingRect = event.currentTarget.getBoundingClientRect();
    setModalPosition({
      top: rowBoundingRect.bottom,
      left: rowBoundingRect.left,
    });
  };

  const checkIfTextOverflowing = (record: DataType, rowIndex: any) => {
    const trElement: HTMLElement | null | undefined = (
      tableRef.current as HTMLElement | null
    )?.querySelector(`tr[data-row-key="${record.id as string}"]`);

    if (trElement) {
      const spanEl = trElement.querySelector('td span') as HTMLElement;
      if (
        spanEl &&
        (spanEl.clientWidth < spanEl.scrollWidth ||
          spanEl.clientHeight < spanEl.scrollHeight)
      ) {
        setSelectedRow(record);
        setIsModalVisible(true);
        // Calculate the position of the modal relative to the clicked row
        const rowBoundingRect = spanEl.getBoundingClientRect();
        setModalPosition({
          top: rowBoundingRect.bottom,
          left: rowBoundingRect.left,
        });
      }
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleCheckboxChangeDate = (values: any) => {
    setSelectedDateFilterValues(values);
  };

  const handleCheckboxChangeIsplatitelj = (values: any) => {
    setSelectedIsplatiteljFilterValues(values);
  };

  const filterDataByIsplatiteljs = () => {
    if (
      selectedIsplatiteljFilterValues &&
      selectedIsplatiteljFilterValues.length > 0
    ) {
      const filteredDataSource = filteredData.filter((record: DataType) =>
        selectedIsplatiteljFilterValues.includes(record.isplatitelj as string)
      );
      setFilteredData(filteredDataSource);
    } else {
      setFilteredData(props.data);
    }
  };

  const filterDataByDate = () => {
    if (selectedDateFilterValues && selectedDateFilterValues.length > 0) {
      const filteredDataSource = filteredData.filter((record: DataType) =>
        selectedDateFilterValues.includes(record.foramtedDate as string)
      );
      setFilteredData(filteredDataSource);
    } else {
      setFilteredData(props.data);
    }
  };

  const filtersMenuIsplatitelj = () => (
    <Menu>
      <StyledFiltersCheckboxGroup
        style={{ display: 'block' }}
        value={selectedIsplatiteljFilterValues}
        onChange={handleCheckboxChangeIsplatitelj}
      >
        {props.isplatiteljsFilter.map((filter) => (
          <Menu.Item key={filter.value as string}>
            <Checkbox onClick={(e) => e.stopPropagation()} value={filter.value}>
              {filter.text}
            </Checkbox>
          </Menu.Item>
        ))}
      </StyledFiltersCheckboxGroup>
      <Space>
        <Button onClick={() => setSelectedIsplatiteljFilterValues([])}>
          Resetiraj
        </Button>
      </Space>
    </Menu>
  );
  const filtersMenuDate = () => (
    <Menu>
      <StyledFiltersCheckboxGroup
        style={{ display: 'block' }}
        value={selectedDateFilterValues}
        onChange={handleCheckboxChangeDate}
      >
        {props.monthFilter.map((filter) => (
          <Menu.Item key={filter.value as string}>
            <Checkbox onClick={(e) => e.stopPropagation()} value={filter.value}>
              {filter.text}
            </Checkbox>
          </Menu.Item>
        ))}
      </StyledFiltersCheckboxGroup>
      <Space>
        <Button onClick={() => setSelectedDateFilterValues([])}>
          Resetiraj
        </Button>
      </Space>
    </Menu>
  );

  useEffect(() => {
    filterDataByIsplatiteljs();
  }, [selectedIsplatiteljFilterValues]);

  useEffect(() => {
    filterDataByDate();
  }, [selectedDateFilterValues]);

  useEffect(() => {
    setFilteredData(props.data);
  }, [props.data]);

  return (
    <StyledResultsTableDiv>
      {true && (
        <>
          <StyledMobileFiltersContainer>
            <Dropdown
              dropdownRender={filtersMenuDate}
              placement="bottom"
              // trigger={['click']}
            >
              <Button>Filter mjeseca</Button>
            </Dropdown>

            <Dropdown
              dropdownRender={filtersMenuIsplatitelj}
              placement="bottom"
            >
              <Button>Filter Isplatitelja</Button>
            </Dropdown>
          </StyledMobileFiltersContainer>
        </>
      )}
      <StyledTableDivWrapper>
        <Table
          ref={tableRef}
          className="table-wrapper"
          columns={columns} //columnType
          dataSource={filteredData}
          onChange={onChange}
          size="middle"
          rowKey="id"
          pagination={{ defaultPageSize: props.rowAmount }}
          onRow={(record, rowIndex) => ({
            onMouseEnter: (event) => checkIfTextOverflowing(record, rowIndex),
            // onMouseLeave: (event) => closeModal(),
          })}
        />
        {isModalVisible && (
          <Modal
            title="Detaljno"
            open={isModalVisible}
            onCancel={closeModal}
            mask={false}
            footer={null}
            style={{
              position: 'absolute',
              ...modalPosition,
            }}
          >
            {selectedRow && (
              <div>
                {/* Display selected row details inside the modal */}
                {/* need to test and see what to show, how  */}
                <p>Vrsta rashoda: {selectedRow.vrstarashoda}</p>
              </div>
            )}
          </Modal>
        )}
      </StyledTableDivWrapper>
    </StyledResultsTableDiv>
  );
}
