import { Button, Col, Row, Space, Spin, TableProps } from 'antd';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable, { DataType } from '../components/table/ResultTable';
import {
  TransparencyState,
  changeSearchBarValue,
  changeSelectedYearValue,
  getData,
  getOpcineData,
} from 'src/redux/transparency/transparency';
import { LoadingOutlined } from '@ant-design/icons';
import { useEffect, useMemo, useState } from 'react';
import {
  StyledAppTitleHeader,
  StyledFullWidthDiv,
  StyledHeaderDiv,
  StyledHeaderLine,
  StyledMainTitlRow,
  StyledMainTitleDiv,
  StyledAppHeaderDiv,
  StyledPlaceInfoH1,
  StyledPlaceInfoH2,
  StyledPlaceInfoDiv,
} from '../components/general/styled.ts';
import ExportButtons from '../components/buttons/ExportButtons';
import { AppDispatch } from 'src/redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { StyledExportButtonsDiv } from 'src/app/components/buttons/styled.ts';
import { ColumnFilterItem } from 'antd/es/table/interface';
import { getPlaceName } from 'src/helper/domainHelper.ts';
import {
  StyledAppDescDiv,
  StyledFooter,
  StyledMainPageContainerDiv,
  StyledResultsInfoDiv,
  StyledRow,
} from './styled.ts';
import {
  largeScreenHeight,
  largeScreenWidth,
  mobileWidth,
} from '../global/constants.ts';
import { debug } from 'console';
import { Footer } from 'antd/es/layout/layout';

export interface StringFilters {
  text: string;
  value: string;
}
function TransparencyHome() {
  const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

  const dispatch: AppDispatch = useDispatch();

  const [loadedValuesCount, setLoadedValuesCount] = useState<string>('0');
  const [sumIznosValues, setSumIznosValues] = useState<string>('0');
  const [latestCreatedDate, setLatestCreatedDate] = useState<Date>();
  const [tempData, setTempData] = useState<DataType[]>([]);
  const [isMobileWidth, setIsMobileWidth] = useState(false);
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [grbUrl, setGrbUrl] = useState('');
  const [isplatiteljColumnFilterItems, setIsplatiteljColumnFilterItems] =
    useState<ColumnFilterItem[]>([]);
  const [monthColumnFilterItems, setMonthColumnFilterItems] = useState<
    ColumnFilterItem[]
  >([]);

  const transparencyState = useSelector((state: any) => {
    return state.transparency as TransparencyState;
  });

  const {
    data,
    opcinaData,
    searchValue,
    selectedYear,
    isDataLoaded,
    isOpcinaDataLoaded,
  } = transparencyState as TransparencyState;

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

  //TODO: TEST THIS WITH DIFFERENT SCREEN SIZES
  const rowAmountDependOnSize = () => {
    if (window.innerHeight <= largeScreenHeight) {
      return 7;
    }
    return 13;
  };

  const getFilters = (data: any, variable: string) => {
    let uniqueFilters: ColumnFilterItem[] = [];

    data.forEach((item: any) => {
      if (
        !uniqueFilters.some((itemFromSet) => {
          return (
            itemFromSet.text === item[variable] &&
            itemFromSet.value === item[variable]
          );
        })
      ) {
        uniqueFilters.push({
          text: item[variable],
          value: item[variable],
        });
        //SORTING of array, potential bug for date, reason: date is string not number
        uniqueFilters = uniqueFilters.sort(
          (a: ColumnFilterItem, b: ColumnFilterItem) =>
            a.value < b.value ? -1 : a.value > b.value ? 1 : 0
        );
      }
    });
    const columnFilterItems: ColumnFilterItem[] = Array.from(uniqueFilters);
    return columnFilterItems;
  };

  const onYearChange = (e: any) => {
    dispatch(changeSelectedYearValue(e) as any);
  };
  const onSelectYear = (e: any) => {
    //gets default data
    dispatch(getData(opcinaData.url, selectedYear) as any);
    setTempData(data);
  };

  const setFavicon = (faviconUrl: string) => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel~='icon']") ||
      document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = faviconUrl;
    document.getElementsByTagName('head')[0].appendChild(link);
  };

  const getAvailableYears = () => {
    const yearFromData: string[] = [];

    let latest_created_date: Date | null = null;

    data.forEach((item: DataType) => {
      const year = item.datum?.split('-')[0];
      if (year && !yearFromData.includes(year)) {
        yearFromData.push(year);
      }

      const createdDate = new Date(item.created_at);
      if (!latest_created_date || createdDate > latest_created_date) {
        latest_created_date = createdDate;
      }
    });
    if (latest_created_date) {
      setLatestCreatedDate(latest_created_date);
    }
    setAvailableYears(yearFromData);
  };

  const currentYear = useMemo(() => {
    return parseInt(selectedYear);
  }, []);

  const sumArrayValues = (arr: DataType[]): number => {
    return arr.reduce(
      (total, currentValue) => total + parseFloat(currentValue.iznos as string),
      0
    );
  };

  useEffect(() => {
    // This effect runs after the initial render
    if (
      searchValue === '' ||
      searchValue === undefined ||
      searchValue === null
    ) {
      //gets default data
      // dispatch(getData(opcinaData.url, selectedYear) as any);
    }
  }, [selectedYear]);

  useEffect(() => {
    if (data) {
      setTempData(data);
      setSumIznosValues(
        new Intl.NumberFormat('hr-HR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(sumArrayValues(data))
        // parseFloat(sumArrayValues(data).toFixed(2))
      );
      setLoadedValuesCount(new Intl.NumberFormat('hr-HR').format(data.length));
      setIsplatiteljColumnFilterItems(getFilters(data, 'isplatitelj'));
      setMonthColumnFilterItems(getFilters(data, 'foramtedDate'));
      getAvailableYears();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (isOpcinaDataLoaded) {
      setGrbUrl(`${import.meta.env.VITE_API_IMG_URL}/${opcinaData.grb}`);
      setFavicon(`${import.meta.env.VITE_API_IMG_URL}/${opcinaData.favico}`);
      document.title = `Proracun ${opcinaData.naziv}`;
      //gets default data
      dispatch(getData(opcinaData.url, selectedYear) as any);
    }
  }, [opcinaData]);

  useEffect(() => {
    //Good to add is OpcineData fetched flag for check
    document.title = `Proracun`;
    setIsMobileWidth(window.screen.width <= mobileWidth);
    dispatch(getOpcineData() as any);
  }, []);

  // if (process.env.NODE_ENV === 'development') {
  //   useEffect(() => {
  //     console.log('component is mounted in development');
  //     // dispatch(getOpcineData() as any);
  //   });
  // }

  return (
    <StyledMainPageContainerDiv>
      <StyledFullWidthDiv $padding $background>
        {/* <main> */}
        <Col>
          <StyledHeaderDiv>
            <Row>
              <StyledAppHeaderDiv>
                <StyledMainTitleDiv>
                  <StyledPlaceInfoDiv>
                    <img src={grbUrl} alt="Grb opcine" />
                    <div>
                      <StyledPlaceInfoH1>{opcinaData.naziv}</StyledPlaceInfoH1>
                      <StyledPlaceInfoH2>
                        {opcinaData.zupanija}
                      </StyledPlaceInfoH2>
                    </div>
                  </StyledPlaceInfoDiv>
                  <StyledAppTitleHeader>
                    Isplata proračunskih sredstava
                  </StyledAppTitleHeader>
                </StyledMainTitleDiv>
                <StyledHeaderLine />
                <StyledAppDescDiv>
                  <p>
                    Objava informacija o trošenju sredstava iz proračuna
                    temeljem članka 144. Zakona o proračunu ("Narodne novine",
                    broj 144/21) i
                    <br />
                    {/* maknut br na mobilnoh */}
                    Naputka o okvirnom sadržaju, minimalnom skupu podataka te
                    načinu javne objave informacija o trošenju sredstava
                    ("Narodne novine", broj 59/23).
                  </p>
                </StyledAppDescDiv>
              </StyledAppHeaderDiv>
            </Row>
            <StyledRow>
              <Col xs={isMobileWidth ? 24 : 8}>
                <TransparentnostSearch
                  onSelectYear={onSelectYear}
                  currentYear={currentYear}
                  onChangeInput={onChange}
                  onYearSelect={onYearChange}
                  availableYears={availableYears}
                />
              </Col>
              <Col xs={isMobileWidth ? 24 : 16}>
                <StyledExportButtonsDiv>
                  <ExportButtons
                    csvVisible={false}
                    xmlVisible={false}
                    placeName={getPlaceName()}
                    selectedYear={selectedYear}
                    dataForExport={data}
                  />
                </StyledExportButtonsDiv>
              </Col>
            </StyledRow>
          </StyledHeaderDiv>
          {isDataLoaded ? (
            <>
              <Row>
                <ResultTable
                  isplatiteljsFilter={isplatiteljColumnFilterItems}
                  monthFilter={monthColumnFilterItems}
                  data={tempData}
                  rowAmount={rowAmountDependOnSize()}
                  isMobileWidth={isMobileWidth}
                />
              </Row>
            </>
          ) : (
            <StyledFullWidthDiv $center>
              <Spin size="large" indicator={antIcon} />
            </StyledFullWidthDiv>
          )}
        </Col>
        <StyledResultsInfoDiv>
          <p>
            Ukupno isplata u <b>{selectedYear}.</b> godini ={' '}
            <b>{sumIznosValues}</b> €
          </p>
          <hr />
          <p>
            Ukupno stavaka <b>{loadedValuesCount}</b>
          </p>
          <hr />

          <p>
            Podaci ažurirani{' '}
            <b>{latestCreatedDate?.toLocaleDateString('hr-HR')}</b>
          </p>
        </StyledResultsInfoDiv>
        {/* </main> */}
      </StyledFullWidthDiv>
      <StyledFooter>
        <p>Plavi link - {new Date().getFullYear().toString()}</p>
      </StyledFooter>
    </StyledMainPageContainerDiv>
  );
}

export default TransparencyHome;
