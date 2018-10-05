import 'babel-polyfill';
import m from 'mithril';
import Columns from './models/Columns';
import { ColumnsList } from './components/ColumnsList';
import Cards from './models/Cards';

const App = {
  oninit() {
    Columns.loadAll();
    Cards.loadAll();
  },
  view() {
    return m('.kanban-board', [m(ColumnsList)]);
  },
};

m.mount(document.getElementById('root'), App);
