import { useMemo, useState } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { MRT_Localization_FR } from 'material-react-table/locales/fr';
import { MRT_Localization_EN } from 'material-react-table/locales/en';


function Table({ locale, initData }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'province',
        header: 'Province/Territory',
      },
      {
        accessorKey: 'totalProviders',
        header: 'Total providers',
      },
      {
        accessorKey: 'hospitals',
        header: 'Hospitals providing abortion care',
      },
      {
        accessorKey: 'clinics',
        header: 'Clinics providing abortion care',
      },
      {
        accessorKey: 'surgical',
        header: 'Surgical providers',
      },
      {
        accessorKey: 'medical',
        header: 'Medical providers',
      },
      {
        accessorKey: 'urban',
        header: 'Urban providers',
      },
      {
        accessorKey: 'rural',
        header: 'Rural providers',
      },
      {
        accessorKey: 'gestationalLimit',
        header: 'Gestational limit (weeks)',
      },
      {
        accessorKey: 'cpc',
        header: 'Crisis pregnancy centres',
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
