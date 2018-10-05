import m from 'mithril';
import Columns from '../models/Columns';
import { AddButton } from './AddForm';
import { Column } from './Column';

export const ColumnsList = {
  view() {
    return m(
      '.columns-list',
      Columns.all.map(column => m(Column, { key: column.id, column })),
      m(AddButton, {
        itemType: 'column',
        onsubmit: title => Columns.create({ title }),
      }),
    );
  },
};
