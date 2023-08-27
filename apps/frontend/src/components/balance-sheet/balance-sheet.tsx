import { BalanceEntry, BalanceSheet, Months } from '@demyst/models';
import {
  DataGrid,
  DataGridHeader,
  DataGridRow,
  DataGridHeaderCell,
  DataGridBody,
  DataGridCell,
  TableColumnDefinition,
  createTableColumn,
} from '@fluentui/react-components';
import { FC } from 'react';
import { Currency } from '../currency/currency';

export interface BalanceSheetProps {
  balanceSheet: BalanceSheet;
}

const columns: TableColumnDefinition<BalanceEntry>[] = [
  createTableColumn<BalanceEntry>({
    columnId: 'year',
    renderHeaderCell: () => {
      return 'Year';
    },
    renderCell: (item) => {
      return item.year;
    },
  }),
  createTableColumn<BalanceEntry>({
    columnId: 'month',
    renderHeaderCell: () => {
      return 'Month';
    },
    renderCell: (item) => {
      return Months[item.month % 12];
    },
  }),
  createTableColumn<BalanceEntry>({
    columnId: 'assetsValue',
    renderHeaderCell: () => {
      return 'Assets Value';
    },
    renderCell: (item) => {
      return <Currency amount={item.assetsValue} />;
    },
  }),
  createTableColumn<BalanceEntry>({
    columnId: 'profitOrLoss',
    renderHeaderCell: () => {
      return 'Profit or Loss';
    },
    renderCell: (item) => {
      return <Currency amount={item.profitOrLoss} />;
    },
  }),
];

export const BalanceSheetComp: FC<BalanceSheetProps> = ({ balanceSheet }) => {
  return (
    <DataGrid items={balanceSheet} columns={columns} focusMode="cell">
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>
      <DataGridBody<BalanceEntry>>
        {({ item, rowId }) => (
          <DataGridRow<BalanceEntry> key={rowId}>
            {({ renderCell }) => (
              <DataGridCell>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
