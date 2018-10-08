import m from 'mithril';
import Columns from '../models/Columns';
import AddButton from './AddButton';
import Column from './Column';

const ColumnsList = {
  view() {
    return m(
      '.columns-list',
      Columns.all().map(column => m(Column, { key: column.id, column })),
      m(AddButton, {
        itemType: 'column',
        onsubmit(title: string) {
          Columns.create({ title });
        },
      }),
    );
  },
};

export default ColumnsList;
