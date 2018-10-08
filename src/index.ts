import 'babel-polyfill';
import m from 'mithril';
import Board from './components/Board';

const root = document.getElementById('root');
if (root) {
  m.mount(root, Board);
}
