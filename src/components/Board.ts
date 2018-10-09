import m from 'mithril';
import Columns from '../models/Columns';
import ColumnsList from './ColumnsList';
import Cards from '../models/Cards';

const Board: m.Component = {
  oninit() {
    Columns.loadAll();
    Cards.loadAll();
  },
  view() {
    return m('.kanban-board', [m(ColumnsList)]);
  },
};

export default Board;
