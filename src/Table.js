import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_FR } from 'material-react-table/locales/fr';
import { MRT_Localization_EN } from 'material-react-table/locales/en';


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
        }
      },
      {
        accessorKey: 'totalproviders',
        header: 'Total providers*',
        size: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'hospitals',
        header: 'Hospitals providing abortion care',
        size: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'clinics',
        header: 'Clinics providing abortion care',
        size: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'surgical',
        header: 'Surgical providers',
        size: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'medical',
        header: 'Medical providers',
        size: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'urban',
        header: 'Urban providers**',
        size: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'rural',
        header: 'Rural providers**',
        size: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'gestationallimit',
        header: 'Gestational limit',
        size: 60,
        maxSize: 100,
      },
      {
        accessorKey: 'cpc',
        header: 'Crisis pregnancy centres***',
        size: 60,
        maxSize: 100,
      },
    ],
    [],
  );

  const [data, setData] = useState(() => initData);

  return (
      <MaterialReactTable
        columns={columns}
        data={data}
        enableRowSelection={false}
        enableColumnOrdering
        enableRowOrdering
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
