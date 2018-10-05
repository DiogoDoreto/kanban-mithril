import m from 'mithril';
import Columns from '../models/Columns';
import { CardList } from './CardList';
import Cards from './../models/Cards';

export const Column = {
  view({ attrs: { column } }) {
    return m(
      '.column',
      {
        ondrop: event => {
          event.preventDefault();
          const card = JSON.parse(event.dataTransfer.getData('kanban/card'));
          Cards.moveToColumn(card, column.id);
        },
        ondragover: event => {
          event.preventDefault();
          event.dataTransfer.dropEffect = 'move';
        },
      },
      [
        m('.column__title', column.title),
        m(
          'button.column__delete',
          { onclick: () => Columns.delete(column) },
          '×',
        ),
        m(CardList, { columnId: column.id }),
      ],
    );
  },
};
