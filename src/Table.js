import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_FR } from 'material-react-table/locales/fr';
import { MRT_Localization_EN } from 'material-react-table/locales/en';

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


function Table({ locale, initData }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'province',
        header: 'Province/ Territory',
        size: 60,
        maxSize: 100,
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
        header: 'Total providers*',
        size: 60,
        maxSize: 100,
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b8b20a43e88d5429fc_total-providers.svg')
      },
      {
        accessorKey: 'hospitals',
        header: 'Hospitals providing abortion care',
        size: 60,
        maxSize: 100,
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b4dc55d21dd872eb75_hospital.svg')
      },
      {
        accessorKey: 'clinics',
        header: 'Clinics providing abortion care',
        size: 60,
        maxSize: 100,
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b4220ac45e6f6181ae_clinics.svg')
      },
      {
        accessorKey: 'surgical',
        header: 'Surgical providers',
        size: 60,
        maxSize: 100,
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b64cd486ddc9494fdd_surgical.svg')
      },
      {
        accessorKey: 'medical',
        header: 'Medical providers',
        size: 60,
        maxSize: 100,
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b5f53a53c34de0e393_medical.svg')
      },
      {
        accessorKey: 'urban',
        header: 'Urban providers**',
        size: 60,
        maxSize: 100,
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b77562483ec3cea528_urban.svg')
      },
      {
        accessorKey: 'rural',
        header: 'Rural providers**',
        size: 60,
        maxSize: 100,
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b76bb8924b3c7bcd0d_rural.svg')
      },
      {
        accessorKey: 'gestationallimit',
        header: 'Gestational limit',
        size: 60,
        maxSize: 100,
        muiTableHeadCellProps: thStyles('https://uploads-ssl.webflow.com/64b1dfac6e37c1447451236d/652d81b4e32f25fcc3e98a88_gestational-limit.svg')
      },
      {
        accessorKey: 'cpc',
        header: 'Crisis pregnancy centres***',
        size: 60,
        maxSize: 100,
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
