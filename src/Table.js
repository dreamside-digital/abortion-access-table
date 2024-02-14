import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_FR } from 'material-react-table/locales/fr';
import { MRT_Localization_EN } from 'material-react-table/locales/en';
import Box from '@mui/material/Box';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

const translations = {
  province: {
    en: 'Province/ Territory',
    fr: 'Province/ territoire'
  },
  totalproviders: {
    en: 'Total points of service*',
    fr: 'Nombre total de prestataires*'
  },
  urban: {
    en: 'Urban points of service*',
    fr: 'Prestataires en région urbaine*'
  },
  rural: {
    en: 'Rural points of service*',
    fr: 'Prestataires en région rurale*'
  },
  gestationallimit: {
    en: 'Functional gestational limit*',
    fr: 'Limite gestationnelle*'
  },
  cpc: {
    en: 'Crisis pregnancy centres*',
    fr: 'Centres de crise de grossesse*'
  },
  providerstooltip: {
    en: "Data on the points of service, which includes clinics and hospitals that provide abortion care, are gathered from Action Canada’s directory. These numbers are up to date, but the landscape of abortion providers changes quickly, and not all providers consent to being publicly listed.  As such, current data is not comprehensive and does not include all primary care providers who prescribe medication abortion.",
    fr: "Data on the points of service, which includes clinics and hospitals that provide abortion care, are gathered from Action Canada’s directory. These numbers are up to date, but the landscape of abortion providers changes quickly, and not all providers consent to being publicly listed.  As such, current data is not comprehensive and does not include all primary care providers who prescribe medication abortion."
  },
  regiontooltip: {
    en: <span>2021 Canadian census. Urban as defined by <a href="https://www150.statcan.gc.ca/n1/pub/92-195-x/2021001/geo/cma-rmr/cma-rmr-eng.htm">Statistics Canada</a>. Providers located more than a two hour drive away from an urban location are categorized as rural.</span>,
    fr: <span>2021 Canadian census. Urban as defined by <a href="https://www150.statcan.gc.ca/n1/pub/92-195-x/2021001/geo/cma-rmr/cma-rmr-eng.htm">Statistics Canada</a>. Providers located more than a two hour drive away from an urban location are categorized as rural.</span>
  },
  cpctooltip: {
    en: <span>Data from the <a href="https://www.arcc-cdac.ca/media/2020/06/list-anti-choice-groups-province-city.pdf">Abortion Rights Coalition of Canada</a></span>,
    fr: <span>Data from the <a href="https://www.arcc-cdac.ca/media/2020/06/list-anti-choice-groups-province-city.pdf">Abortion Rights Coalition of Canada</a></span>
  },
  gltooltip: {
    en: <span>Read more about <a href="/barriers-to-abortion-access#gestational-age-limits">gestational limits</a></span>,
    fr: <span>Read more about <a href="/barriers-to-abortion-access#gestational-age-limits">gestational limits</a></span>
  }
}

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fafbfe',
    color: '#112953',
    boxShadow: '1px 1px 8px 1px rgba(45, 62, 80, .12)',
    fontSize: 12.5,
    padding: 10,
    border: '1px solid #d8e3f0',
    lineHeight: 1.5,
  },
}));

const thStyles = (icon) => {
  return {
    sx: {
      width: "60px",
      maxWidth: "120px",
      fontSize: '0.8rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      color: '#0c0f0a',
      paddingTop: '0.5rem',
      borderRight: '1px solid #e0e0e0',
      lineHeight: '120%',
      position: 'relative',
      paddingBottom: '32px',
      '& .Mui-TableHeadCell-Content': {
        display: 'block',
        '& .Mui-TableHeadCell-Content-Labels': {
          display: 'inline',
          '& .Mui-TableHeadCell-Content-Wrapper': {
            textOverflow: 'unset',
            whiteSpace: 'pre-wrap'
          },
          '& .MuiBadge-root': {
            height: '28px'
          }
        },
        '& .Mui-TableHeadCell-Content-Actions': {
          display: 'inline',
          float: 'left',
          '& button:last-of-type svg': {
            transform: 'rotate(90deg)'
          }
        }
      },
      '&:before': {
        content: `url(${icon})`,
        height: '22px',
        width: '22px',
        objectFit: 'contain',
        position: 'absolute',
        left: 'auto',
        right: 0,
        bottom: 0,
        backgroundColor: '#0c0f0a',
        padding: '14px 6px 6px 14px',
        borderRadius: '42px 0 0 0',
      }
    }
  }
}


function Table({ locale="en", initData }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'province',
        header: translations['province'][locale],
        size: 100,
        maxSize: 160,
        muiTableBodyCellProps: {
          sx: {
            fontWeight: 600,
            letterSpacing: '1px',
            fontSize: '0.8rem',
            color: '#0c0f0a',
            borderRight: '1px solid #e0e0e0',
            textAlign: 'center',
          }
        },
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b7d7923f77adff241a_province.svg')
      },
      {
        accessorKey: 'totalproviders',
        header: translations['totalproviders'][locale],
        size: 100,
        maxSize: 160,
        Header: ({header, column, table}) => {
          return (
            <Box component="span">
              <LightTooltip title={translations['providerstooltip'][locale]}>
                <span>{column.columnDef.header}</span>
              </LightTooltip>
            </Box>
          )
        },
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b8b20a43e88d5429fc_total-providers.svg')
      },
      {
        accessorKey: 'urban',
        header: translations['urban'][locale],
        size: 100,
        maxSize: 160,
        Header: ({header, column, table}) => {
          return (
            <Box component="span">
              <LightTooltip title={translations['regiontooltip'][locale]}>
                <span>{column.columnDef.header}</span>
              </LightTooltip>
            </Box>
          )
        },
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b77562483ec3cea528_urban.svg')
      },
      {
        accessorKey: 'rural',
        header: translations['rural'][locale],
        size: 100,
        maxSize: 160,
        Header: ({header, column, table}) => {
          return (
            <Box component="span">
              <LightTooltip title={translations['regiontooltip'][locale]}>
                <span>{column.columnDef.header}</span>
              </LightTooltip>
            </Box>
          )
        },
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b76bb8924b3c7bcd0d_rural.svg')
      },
      {
        accessorKey: 'gestationallimit',
        header: translations['gestationallimit'][locale],
        size: 100,
        maxSize: 160,
        Header: ({header, column, table}) => {
          return (
            <Box component="span">
              <LightTooltip title={translations['gltooltip'][locale]}>
                <span>{column.columnDef.header}</span>
              </LightTooltip>
            </Box>
          )
        },
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b4e32f25fcc3e98a88_gestational-limit.svg')
      },
      {
        accessorKey: 'cpc',
        header: translations['cpc'][locale],
        size: 100,
        maxSize: 160,
        Header: ({header, column, table}) => {
          return (
            <Box component="span">
              <LightTooltip title={translations['cpctooltip'][locale]}>
                <span>{column.columnDef.header}</span>
              </LightTooltip>
            </Box>
          )
        },
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b4220ac45e6f6181a6_cpc.svg')
      },
    ],
    [],
  );

  const [data, setData] = useState(() => initData);

  return (
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnOrdering
        enableRowOrdering
        enableClickToCopy
        enableRowSelection={false}
        enableColumnFilters={false}
        enableDensityToggle={false}
        enablePagination={false}
        enableTopToolbar={false}
        enableBottomToolbar={false}
        initialState={{ density: 'compact' }}
        localization={locale === 'fr' ? MRT_Localization_FR : MRT_Localization_EN}
        muiTablePaperProps={{
          variant:"outlined",
          sx: {
            border: '1px solid #0c0f0a',
            borderRadius: '0.25rem',
            overflow: 'hidden',
          }
        }}
        muiTableHeadCellProps={{
          sx: {
            width: "60px",
            maxWidth: "120px",
            fontSize: '0.8rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            color: '#0c0f0a',
            paddingTop: '0.5rem',
            borderRight: '1px solid #e0e0e0',
            lineHeight: '120%',
            position: 'relative',
            '& .Mui-TableHeadCell-Content': {
              display: 'block',
              '& .Mui-TableHeadCell-Content-Labels': {
                display: 'inline',
                '& .Mui-TableHeadCell-Content-Wrapper': {
                  textOverflow: 'unset',
                  whiteSpace: 'pre-wrap'
                },
                '& .MuiBadge-root': {
                  height: '28px'
                }
              },
              '& .Mui-TableHeadCell-Content-Actions': {
                display: 'inline',
                float: 'left',
                '& button:last-of-type svg': {
                  transform: 'rotate(90deg)'
                }
              }
            }
          }
        }}
        muiTableBodyCellProps={{
          sx: {
            fontSize: '0.8rem',
            color: '#0c0f0a',
            borderRight: '1px solid #e0e0e0',
            textAlign: 'center',
          }
        }}
        muiTableBodyRowDragHandleProps={({ table }) => ({
          onDragEnd: () => {
            const { draggingRow, hoveredRow } = table.getState();
            if (hoveredRow && draggingRow) {
              data.splice(
                hoveredRow.index,
                0,
                data.splice(draggingRow.index, 1)[0],
              );
              setData([...data]);
            }
          },
        })}
      />
  );
}

export default Table;
