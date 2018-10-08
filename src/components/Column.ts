import m from 'mithril';
import Columns, { IColumn } from '../models/Columns';
import CardList from './CardList';
import Cards, { ICard } from './../models/Cards';
import ColumnTitle from './ColumnTitle';

interface Attrs {
  column: IColumn;
}

const Column: m.Component<Attrs> = {
  view({ attrs: { column } }) {
    return m(
      '.column',
      {
        ondrop(event: DragEvent) {
          event.preventDefault();
          const card: ICard = JSON.parse(
            event.dataTransfer.getData('kanban/card'),
          );
          Cards.moveToColumn(card, column.id);
        },
        ondragover(event: DragEvent) {
          event.preventDefault();
          event.dataTransfer.dropEffect = 'move';
        },
      },
      [
        m(ColumnTitle, { column }),
        m(
          'button.column__delete',
          {
            onclick() {
              Columns.delete(column);
            },
          },
          '×',
        ),
        m(CardList, { columnId: column.id }),
      ],
    );
  },
};

export default Column;
