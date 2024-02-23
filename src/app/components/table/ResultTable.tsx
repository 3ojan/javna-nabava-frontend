import { Button, Checkbox, Dropdown, Menu, Modal, Space } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import Table, { ColumnsType, TableProps } from 'antd/es/table';
import { ColumnFilterItem, FilterDropdownProps } from 'antd/es/table/interface';
import { useEffect, useRef, useState } from 'react';
import {
  StyledCellHeightSpan,
  StyledFiltersCheckboxGroup,
  StyledMobileFiltersContainerDiv,
  StyledMobileRow,
  StyledMobileTdDividerLine,
  StyledResultsTableDiv,
  StyledTableDivWrapper,
} from './styled';

interface TableData {
  data: DataType[];
  defaultFilteredValue: string | undefined;
  isplatiteljsFilters: ColumnFilterItem[];
  monthFilter: ColumnFilterItem[];
  rowAmount: number;
  isMobileWidth: boolean;
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
export interface DataType {
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
  created_at: Date;
}

type OnChange = NonNullable<TableProps<DataType>['onChange']>;
type Filters = Parameters<OnChange>[1];

const handleClearFilters = (clearFilters?: () => void) => {
  // Add your custom logic here before clearing filters
  console.log('Custom logic before clearing filters');

  // Call the original clearFilters function to reset the filters
  if (clearFilters) clearFilters();

  // Additional logic after clearing filters, if needed
  console.log('Custom logic after clearing filters');
};

export default function ResultTable(props: TableData) {
  const [filteredData, setFilteredData] = useState<DataType[]>(props.data);
  const [selectedCellElement, setSelectedCellElement] = useState<HTMLElement>();
  const [selectedDateFilterValues, setSelectedDateFilterValues] = useState<
    string[]
  >([]);
  const [checkedIsplatiteljFilterList, setCheckedIsplatiteljFilterList] = //selectedIsplatiteljFilterValues
    useState<CheckboxValueType[]>([]);
  const [selectedRow, setSelectedRow] = useState<DataType | null>(null);
  const [selectedCellValue, setSelectedCellValue] = useState<string>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const tableRef = useRef(null);

  const handleCheckboxChangeDate = (values: any) => {
    setSelectedDateFilterValues(values);
  };

  const handleCheckboxChangeIsplatitelj = (values: any) => {
    // setCheckedIsplatiteljFilterList(values);
  };
  const onChangeCheckbox = (list: CheckboxValueType[]) => {
    setCheckedIsplatiteljFilterList(list);
    // console.log('checked = ', checkedValues.target);
    // if (checkedValues.target.checked) {
    //   const newSelectedFilters = [
    //     ...selectedFilters,
    //     checkedValues.target.value,
    //   ]  ;
    //   setSelectedFilters(newSelectedFilters);
  };

  const filtersMenuIsplatitelj = () => (
    <Menu>
      <StyledFiltersCheckboxGroup
        value={checkedIsplatiteljFilterList} //checkedIsplatiteljFilterList
        onChange={onChangeCheckbox}
        // defaultValue={
        //   props.defaultFilteredValue
        //     ? [parseInt(props.defaultFilteredValue)]
        //     : []
        // }
      >
        {props.isplatiteljsFilters.map((filter) => (
          <Menu.Item key={filter.value as string}>
            <Checkbox onClick={(e) => e.stopPropagation()} value={filter.value}>
              {filter.text}
            </Checkbox>
          </Menu.Item>
        ))}
      </StyledFiltersCheckboxGroup>
      <Space>
        <Button onClick={() => setCheckedIsplatiteljFilterList([])}>
          Resetiraj
        </Button>
      </Space>
    </Menu>
  );

  const filtersMenuDate = () => (
    <Menu>
      <StyledFiltersCheckboxGroup
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

  const CustomFilterDropdown: React.FC<FilterDropdownProps> = ({
    setSelectedKeys,
    selectedKeys,
    confirm,
    clearFilters,
  }) => {
    return (
      <div style={{ padding: 8 }}>
        {/* <Input
          placeholder="Search text"
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          style={{ marginBottom: 8, display: 'block' }}
        /> */}
        {/* <Checkbox.Group options={props.isplatiteljsFilters} /> */}
        <Button
          type="primary"
          onClick={() => confirm()}
          size="small"
          style={{ width: 90, marginRight: 8 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleClearFilters(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </div>
    );
  };

  //NOTE: Elipsis might cause problems with height or anything else really, dunno
  const columns: ColumnsType<DataType> = [
    {
      title: 'mobile',
      render: (record) => (
        <>
          <StyledMobileRow>
            <td>Mjesec:</td>
            <td>{record.foramtedDate}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Isplatitelj:</td>
            <td>{record.isplatitelj}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Rashod:</td>
            <td>{record.vrstarashoda}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Primatelj:</td>
            <td>{record.primatelj}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>OIB:</td>
            <td>{record.oib}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Mjesto:</td>
            <td>{record.mjesto}</td>
          </StyledMobileRow>
          <StyledMobileTdDividerLine />
          <StyledMobileRow>
            <td>Iznos €:</td>
            <td>
              {new Intl.NumberFormat('hr-HR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              }).format(record.iznos)}
            </td>
          </StyledMobileRow>
        </>
      ),
      responsive: ['xs'],
    },
    {
      title: 'Mjesec',
      dataIndex: 'foramtedDate',
      key: 'foramtedDate',
      responsive: ['sm'],
      ellipsis: {
        showTitle: true,
      },
      width: '9%',
      filters: props.monthFilter,
      filterDropdown: filtersMenuDate(),

      // onFilter: (value, record) =>
      // record.foramtedDate!.includes(value.toString()),
    },
    {
      title: 'Isplatitelj',
      dataIndex: 'isplatitelj',
      key: 'isplatitelj',
      responsive: ['sm'],
      ellipsis: {
        showTitle: true,
      },
      filters: props.isplatiteljsFilters,
      // defaultFilteredValue: ['RAZVOJNA AGENCIJA DARUVAR'],
      // filteredValue: props.defaultFilteredValue
      //   ? ([props.defaultFilteredValue] as string[])
      //   : [],
      // filteredValue: selectedFilters.isplatitelj,
      filterDropdown: filtersMenuIsplatitelj(),
      // onFilter: (value, record) =>
      // record.isplatitelj!.includes(value.toString()),
      //  record.isplatiteljrkp === value,
    },
    {
      title: 'Vrsta Rashoda',
      dataIndex: 'vrstarashoda',
      key: 'vrstarashoda',
      responsive: ['sm'],
      render: (text, record) => renderLimitedCellHeight('vrstarashoda', record),
    },
    {
      title: 'Primatelj',
      dataIndex: 'primatelj',
      key: 'primatelj',
      responsive: ['sm'],
      render: (text, record) => renderLimitedCellHeight('primatelj', record),
    },
    {
      title: 'OIB',
      dataIndex: 'oib',
      key: 'oib',
      responsive: ['sm'],
      width: '10%',
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'Mjesto',
      dataIndex: 'mjesto',
      key: 'mjesto',
      responsive: ['sm'],
      ellipsis: {
        showTitle: true,
      },
    },
    {
      title: 'Iznos €',
      dataIndex: 'iznos',
      key: 'iznos',
      align: 'right',
      responsive: ['sm'],
      ellipsis: {
        showTitle: true,
      },
      width: '8%',
      render: (value) =>
        new Intl.NumberFormat('hr-HR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value),
    },
  ];

  // const onChange: OnChange = (pagination, filters, sorter, extra) => {
  //   // console.log('onChangeFilter', filters);
  //   // console.log('check for property ', 'isplatitelj' in filters);
  //   if ('isplatitelj' in filters && filters['isplatitelj']!.length > 0) {
  //     console.log('isplatitelj filter', filters['isplatitelj']);
  //     setSelectedFilters(filters);
  //   }
  // };

  const renderLimitedCellHeight = (key: string, record: DataType) => (
    <StyledCellHeightSpan
      onMouseEnter={(event: any) => checkIfTextOverflowing(record, key)}
      id={key}
    >
      <div>{(record as any)[key]}</div>
    </StyledCellHeightSpan>
  );

  const handleCloseModal = (event: any) => {
    const rectBounds = selectedCellElement?.getBoundingClientRect();
    if (rectBounds && checkCursorIsInModalOrSpan(event, rectBounds)) {
      closeModal();
    }
  };

  const checkCursorIsInModalOrSpan = (
    event: any,
    rectBounds: DOMRect
  ): boolean => {
    const { clientX, clientY } = event;

    const isOutsideTop = clientY < rectBounds.top;
    const isOutsideRight =
      clientX > rectBounds.right && clientY < rectBounds.y + rectBounds.height;
    const isOutsideLeft = clientX < rectBounds.left;

    return isOutsideTop || isOutsideRight || isOutsideLeft;
  };

  //TODO: test with antd elipsis feature
  const checkIfTextOverflowing = (record: DataType, key: string) => {
    // console.log(record);
    const trElement: HTMLElement | null | undefined = (
      tableRef.current as HTMLElement | null
    )?.querySelector(`table tr[data-row-key="${record.id as string}"]`);

    if (trElement) {
      const spanEl = trElement.querySelector(
        `td span#${key} div`
      ) as HTMLElement;
      if (
        spanEl &&
        (spanEl.clientWidth < spanEl.scrollWidth ||
          spanEl.clientHeight < spanEl.scrollHeight)
      ) {
        setSelectedRow(record);
        setSelectedCellValue((record as any)[key]);
        setSelectedCellElement(spanEl);
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
    if (isModalVisible) {
      setIsModalVisible(false);
    }
  };

  const filterDataByIsplatiteljs = () => {
    if (
      checkedIsplatiteljFilterList &&
      checkedIsplatiteljFilterList.length > 0
    ) {
      const filteredDataSource = props.data.filter((record: DataType) =>
        checkedIsplatiteljFilterList.includes(record.isplatiteljrkp)
      );
      setFilteredData(filteredDataSource);
    } else {
      setFilteredData(props.data);
    }
  };

  const filterDataByDate = () => {
    if (selectedDateFilterValues && selectedDateFilterValues.length > 0) {
      const filteredDataSource = props.data.filter((record: DataType) =>
        selectedDateFilterValues.includes(record.foramtedDate as string)
      );
      setFilteredData(filteredDataSource);
    } else {
      setFilteredData(props.data);
    }
  };

  useEffect(() => {
    filterDataByIsplatiteljs();
  }, [checkedIsplatiteljFilterList]);

  useEffect(() => {
    filterDataByDate();
  }, [selectedDateFilterValues]);

  useEffect(() => {
    setFilteredData(props.data);
    if (props.defaultFilteredValue) {
      const defaultFitlerNumber = parseInt(props.defaultFilteredValue);
      onChangeCheckbox([defaultFitlerNumber] as CheckboxValueType[]);
    }
  }, [props.data]);

  useEffect(() => {
    //adds event for closing modal on mouseleave of the modal and span elements
    const modalElem = document.querySelector('.ant-modal-content');
    modalElem?.addEventListener('mouseleave', closeModal);
    const modalWrap = document.querySelector('.ant-modal-wrap');

    modalWrap?.addEventListener('mousemove', handleCloseModal);
  }, [isModalVisible]);

  return (
    <StyledResultsTableDiv>
      {props.isMobileWidth && (
        <StyledMobileFiltersContainerDiv>
          <Dropdown
            dropdownRender={filtersMenuDate}
            placement="bottom"
            // trigger={['click']}
          >
            <Button>Filter mjeseca</Button>
          </Dropdown>

          <Dropdown dropdownRender={filtersMenuIsplatitelj} placement="bottom">
            <Button>Filter Isplatitelja</Button>
          </Dropdown>
        </StyledMobileFiltersContainerDiv>
      )}
      <StyledTableDivWrapper>
        <div ref={tableRef}>
          <Table
            // ref={tableRef}
            className="table-wrapper"
            columns={columns} //columnType
            dataSource={filteredData}
            // onChange={onChange}
            rowKey="id"
            pagination={{
              defaultPageSize: props.rowAmount,
              pageSizeOptions: [/* 7, 10, */ 15, 20, 50, 100],
              showSizeChanger: true,
            }}
          />
        </div>
        {isModalVisible && (
          <Modal
            title="Opširnije"
            open={isModalVisible}
            onCancel={closeModal}
            mask={false}
            footer={null}
            width={'auto'}
            style={{
              position: 'absolute',
              ...modalPosition,
            }}
          >
            {selectedRow && (
              <div>
                <p>{selectedCellValue}</p>
              </div>
            )}
          </Modal>
        )}
      </StyledTableDivWrapper>
    </StyledResultsTableDiv>
  );
}
