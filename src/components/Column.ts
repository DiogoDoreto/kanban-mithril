import m from 'mithril';
import Columns, { IColumn } from '../models/Columns';
import CardList from './CardList';
import Cards, { ICard } from './../models/Cards';
import ColumnTitle from './ColumnTitle';

interface Attrs {
  column: IColumn;
}

interface State {
  dragover: boolean;
}

const Column: m.Component<Attrs, State> = {
  view({ attrs: { column }, state }) {
    return m(
      '.column',
      {
        class: state.dragover ? 'column_dragover' : '',
        ondrop(event: DragEvent) {
          event.preventDefault();
          const card: ICard = JSON.parse(
            event.dataTransfer.getData('kanban/card'),
          );
          Cards.moveToColumn(card, column.id);
          state.dragover = false;
        },
        ondragover(event: DragEvent) {
          event.preventDefault();
          event.dataTransfer.dropEffect = 'move';
          state.dragover = true;
        },
        ondragexit(event: DragEvent) {
          event.preventDefault();
          state.dragover = false;
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
