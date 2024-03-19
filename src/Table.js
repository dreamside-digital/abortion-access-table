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
    fr: 'Limite gestationnelle fonctionnelle*'
  },
  cpc: {
    en: 'Crisis pregnancy centres*',
    fr: 'Centres de crise de grossesse*'
  },
  providerstooltip: {
    en: "Data on the points of service, which includes clinics and hospitals that provide abortion care, are gathered from Action Canada’s directory. These numbers are up to date, but the landscape of abortion providers changes quickly, and not all providers consent to being publicly listed.  As such, current data is not comprehensive and does not include all primary care providers who prescribe medication abortion.",
    fr: "Les données sur les points de service, qui comprennent les cliniques et les hôpitaux publics qui fournissent des soins d’avortement, sont tirées du répertoire d’Action Canada. Ces chiffres sont à jour, mais le paysage des prestataires de services d’avortement change rapidement et les prestataires de soins ne consentent pas tou·te·s à être répertorié·e·s publiquement. Ainsi, les données actuelles ne sont pas complètes et n’incluent pas tou·te·s les prestataires de soins primaires qui prescrivent l’avortement par médicaments."
  },
  regiontooltip: {
    en: <span>Urban refers to census metropolitan areas and agglomerations (CMAs and CAs) in Canada. Rural refers to areas outside of CMAs and CAs.</span>,
    fr: <span>Le terme « urbain » désigne les régions métropolitaines de recensement (RMR) et les agglomérations de recensement (AR) au Canada. Le terme « rural » fait référence aux régions situées en dehors des RMR et des AR.</span>
  },
  cpctooltip: {
    en: <span>Data from the <a href="https://www.arcc-cdac.ca/media/2020/06/list-anti-choice-groups-province-city.pdf">Abortion Rights Coalition of Canada</a></span>,
    fr: <span>Liste de groupes anti-choix au Canada. (18 avril 2023). <a href="https://www.arcc-cdac.ca/media/2020/06/list-anti-choice-groups-province-city.pdf">Coalition pour le droit à l’avortement au Canada</a></span>
  },
  gltooltip: {
    en: <span>Read more about <a href="/barriers-to-abortion-access#gestational-age-limits">functional gestational limits</a></span>,
    fr: <span>En savoir plus sur <a href="/fr/barriers-to-abortion-access#gestational-age-limits">les limites gestationnelles fonctionnelles</a></span>
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
      width: "66px",
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
            width: "66px",
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
