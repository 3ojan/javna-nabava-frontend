import { Col, Row, Spin, TableProps } from 'antd';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable from '../components/table/ResultTable';
import {
  TransparencyState,
  changeSearchBarValue,
  changeSelectedYearValue,
  getSearchData,
  getData,
} from 'src/redux/transparency/transparency';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useMemo, useState } from 'react';
import { StyledFullWidthDiv } from '../components/general/styled.ts';
import ExportButtons from '../components/buttons/ExportButtons';
import { AppDispatch } from 'src/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { StyledExportButtonsDiv } from 'src/app/components/buttons/styled.ts';
import { ColumnFilterItem } from 'antd/es/table/interface';

export interface StringFilters {
  text: string;
  value: string;
}
function TransparencyHome() {
  const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

  const dispatch: AppDispatch = useDispatch();

  const [tempData, setTempData] = useState([]);
  const [isplatiteljItems, setIsplatiteljItems] = useState<ColumnFilterItem[]>(
    []
  );

  const transparencyState = useSelector((state: any) => {
    return state.transparency as TransparencyState;
  });

  const { data, searchValue, selectedYear, isDataLoaded } =
    transparencyState as TransparencyState;

  const onChange = (e: any) => {
    dispatch(changeSearchBarValue(e.target.value) as any);
    searchData(e.target.value);
  };

  const searchData = (value: string) => {
    // this uses endpoint for search
    // dispatch(getSearchData(selectedYear, searchValue) as any);

    //this searches loaded data by endpoint
    setTempData(
      data.filter(
        (item: any) =>
          item.opis.toLowerCase().includes(value) ||
          item.primatelj.toLowerCase().includes(value) ||
          item.vrstarashoda.toLowerCase().includes(value) ||
          item.oib.toLowerCase().includes(value) ||
          item.mjesto.toLowerCase().includes(value)
      )
    );
  };

  const getIsplatiteljs = (data: any) => {
    const uniqueIsplatiteljFilters = new Set<ColumnFilterItem>();

    data.forEach((item: any) => {
      if (
        !Array.from(uniqueIsplatiteljFilters).some((itemFromSet) => {
          return (
            itemFromSet.text === item.isplatitelj &&
            itemFromSet.value === item.isplatitelj
          );
        })
      ) {
        uniqueIsplatiteljFilters.add({
          text: item.isplatitelj,
          value: item.isplatitelj,
        });
      }
    });
    const isplatiteljFilters: ColumnFilterItem[] = Array.from(
      uniqueIsplatiteljFilters
    );
    debugger;
    return isplatiteljFilters;
  };

  const onYearChange = (e: any) => {
    dispatch(changeSelectedYearValue(e) as any);
  };
  const onSelectYear = (e: any) => {
    //gets default data
    dispatch(getData(selectedYear) as any);
    setTempData(data);
  };

  const currentYear = useMemo(() => {
    return parseInt(selectedYear);
  }, []);

  useEffect(() => {
    // This effect runs after the initial render
    if (
      searchValue === '' ||
      searchValue === undefined ||
      searchValue === null
    ) {
      //gets default data
      dispatch(getData(selectedYear) as any);
    }
  }, [selectedYear]);

  useEffect(() => {
    if (data) {
      setTempData(data);
      setIsplatiteljItems(getIsplatiteljs(data));
    }
    debugger;
  }, [isDataLoaded]);

  useEffect(() => {
    dispatch(getData(selectedYear) as any);
  }, []);

  return (
    <>
      <StyledFullWidthDiv $padding $background>
        <Col>
          <Row>
            <TransparentnostSearch
              // onLoseFocus={onLoseFocus}
              onSelectYear={onSelectYear}
              currentYear={currentYear}
              onChangeInput={onChange}
              onYearSelect={onYearChange}
              // buttonEnabled={searchValue !== '' && selectedYear !== ''}
              // onSearchClick={onSearch}
            />
          </Row>
          {isDataLoaded ? (
            <>
              <Row>
                <StyledExportButtonsDiv>
                  <ExportButtons csvVisible={false} xmlVisible={false} />
                </StyledExportButtonsDiv>
              </Row>
              <Row>
                <ResultTable
                  isplatiteljsFilter={isplatiteljItems}
                  data={tempData}
                />
              </Row>
            </>
          ) : (
            <StyledFullWidthDiv $center>
              <Spin size="large" indicator={antIcon} />
            </StyledFullWidthDiv>
          )}
        </Col>
      </StyledFullWidthDiv>
    </>
  );
}

export default TransparencyHome;
