import { LoadingOutlined } from '@ant-design/icons';
import { Col, Collapse, CollapseProps, Spin } from 'antd';
import { ColumnFilterItem } from 'antd/es/table/interface';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledExportButtonsDiv } from 'src/app/components/buttons/styled.ts';
import { getPlaceName } from 'src/helper/domainHelper.ts';
import { AppDispatch } from 'src/redux/store';
import {
  TransparencyState,
  changeSearchBarValue,
  changeSelectedYearValue,
  getAvailableYearsData,
  getData,
  getOpcineData,
} from 'src/redux/transparency/transparency';
import ExportButtons from '../components/buttons/ExportButtons';
import {
  StyledAppHeaderBgDiv,
  StyledAppHeaderDiv,
  StyledAppTitleH1,
  StyledFullWidthDiv,
  StyledMainTitleDiv,
  StyledPlaceInfoDiv,
  StyledPlaceInfoH3,
} from '../components/general/styled.ts';
import TransparentnostSearch from '../components/search/TransparentnostSearch';
import ResultTable, { DataType } from '../components/table/ResultTable';
import { largeScreenHeight, mobileScreenWidth } from '../global/constants.ts';
import {
  StyledAppDescDiv,
  StyledFooter,
  StyledFooterBgImg,
  StyledFooterBgImgContainerDiv,
  StyledFooterContainerDiv,
  StyledFooterLogoImg,
  StyledMainPageContainerDiv,
  StyledResultsInfoDiv,
  StyledRow,
} from './styled.ts';

export interface StringFilters {
  text: string;
  value: string;
}

//TEST comment

function TransparencyHome() {
  const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

  const dispatch: AppDispatch = useDispatch();

  const [loadedValuesCount, setLoadedValuesCount] = useState<string>('0');
  const [sumIznosValues, setSumIznosValues] = useState<string>('0');
  const [latestCreatedDate, setLatestCreatedDate] = useState<Date>();
  const [tempData, setTempData] = useState<DataType[]>([]);
  const [isMobileScreenWidth, setIsMobileScreenWidth] = useState(false);
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
    availableYears,
    isDataLoaded,
    isOpcinaDataLoaded,
  } = transparencyState as TransparencyState;

  const ResultsInfo = () => (
    <StyledResultsInfoDiv>
      <p>
        Ukupno isplata u <b>{selectedYear}.</b> godini: <b>{sumIznosValues}</b>{' '}
        €<br />
        Ukupno stavaka: <b>{loadedValuesCount}</b>
        <br />
        Podaci ažurirani:{' '}
        <b>{latestCreatedDate?.toLocaleDateString('hr-HR')}</b>
      </p>
    </StyledResultsInfoDiv>
  );

  const AboutAppText = () => (
    <p>
      Objava informacija o trošenju sredstava iz proračuna temeljem članka 144.
      Zakona o proračunu ("Narodne novine", broj 144/21) i
      <br />
      Naputka o okvirnom sadržaju, minimalnom skupu podataka te načinu javne
      objave informacija o trošenju sredstava ("Narodne novine", broj 59/23).
    </p>
  );

  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: 'O aplikaciji',
      children: <AboutAppText />,
    },
  ];

  const resultInfoCollapseProps: CollapseProps['items'] = [
    {
      key: '1',
      label: 'informacije o sveukupnim rezultatima',
      children: <ResultsInfo />,
    },
  ];

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
    return 10;
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

  const getLatestCreatedDate = () => {
    let latest_created_date: Date | null = null;

    data.forEach((item: DataType) => {
      const createdDate = item.created_at
        ? new Date(item.created_at)
        : new Date();
      if (!latest_created_date || createdDate > latest_created_date) {
        latest_created_date = createdDate;
      }
    });
    if (latest_created_date) {
      setLatestCreatedDate(latest_created_date);
    }
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

  // useEffect(() => {
  //   // This effect runs after the initial render
  //   if (
  //     searchValue === '' ||
  //     searchValue === undefined ||
  //     searchValue === null
  //   ) {
  //     //gets default data
  //     // dispatch(getData(opcinaData.url, selectedYear) as any);
  //   }
  // }, [selectedYear]);

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
      getLatestCreatedDate();
      // getAvailableYears();
    }
  }, [isDataLoaded]);

  useEffect(() => {
    if (isOpcinaDataLoaded) {
      setGrbUrl(`${import.meta.env.VITE_API_IMG_URL}/${opcinaData.grb}`);
      setFavicon(`${import.meta.env.VITE_API_IMG_URL}/${opcinaData.favico}`);
      document.title = `Proracun ${opcinaData.naziv}`;
      //gets default data
      dispatch(getData(opcinaData.url, selectedYear) as any);
      dispatch(getAvailableYearsData(opcinaData.url) as any);
    }
  }, [opcinaData]);

  useEffect(() => {
    //Good to add is OpcineData fetched flag for check
    document.title = `Proracun`;
    setIsMobileScreenWidth(window.screen.width <= mobileScreenWidth);
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
      <StyledAppHeaderDiv>
        <StyledAppHeaderBgDiv>
          <StyledMainTitleDiv>
            <StyledPlaceInfoDiv>
              <img src={grbUrl} alt="Grb opcine" />
              <div>
                <StyledAppTitleH1>
                  Isplata proračunskih sredstava
                </StyledAppTitleH1>
                <StyledPlaceInfoH3>
                  {opcinaData.naziv}, {opcinaData.zupanija}
                </StyledPlaceInfoH3>
              </div>
            </StyledPlaceInfoDiv>
          </StyledMainTitleDiv>
          <StyledAppDescDiv>
            {isMobileScreenWidth ? (
              <Collapse items={items}></Collapse>
            ) : (
              <>
                <AboutAppText />
              </>
            )}
          </StyledAppDescDiv>
        </StyledAppHeaderBgDiv>
      </StyledAppHeaderDiv>
      <StyledFullWidthDiv $padding $background>
        <Col>
          <StyledRow>
            <Col xs={isMobileScreenWidth ? 18 : 8}>
              <TransparentnostSearch
                onSelectYear={onSelectYear}
                currentYear={currentYear}
                onChangeInput={onChange}
                onYearSelect={onYearChange}
                availableYears={availableYears}
              />
            </Col>
            <Col xs={isMobileScreenWidth ? 6 : 16}>
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
          {isDataLoaded ? (
            <>
              <ResultTable
                isplatiteljsFilter={isplatiteljColumnFilterItems}
                monthFilter={monthColumnFilterItems}
                data={tempData}
                // rowAmount={rowAmountDependOnSize()}
                rowAmount={50}
                isMobileWidth={isMobileScreenWidth}
              />
            </>
          ) : (
            <StyledFullWidthDiv $center>
              <Spin size="large" indicator={antIcon} />
            </StyledFullWidthDiv>
          )}
        </Col>
        <ResultsInfo />
      </StyledFullWidthDiv>
      <StyledFooterContainerDiv>
        <StyledFooter>
          <p>Plavi link d.o.o., za usluge informacijskog društva</p>
          <StyledFooterLogoImg
            src={`${import.meta.env.VITE_API_IMG_URL}/logoVector.svg`}
          />
        </StyledFooter>
      </StyledFooterContainerDiv>
      <StyledFooterBgImgContainerDiv>
        <StyledFooterBgImg
          src={`${import.meta.env.VITE_API_IMG_URL}/footerSvg.svg`}
          alt="footer image"
        />
      </StyledFooterBgImgContainerDiv>
    </StyledMainPageContainerDiv>
  );
}

export default TransparencyHome;
