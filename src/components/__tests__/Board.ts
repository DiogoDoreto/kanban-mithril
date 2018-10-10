jest.setMock('../ColumnsList', 'ColumnsList');
jest.mock('../../models/Columns');
jest.mock('../../models/Cards');

import m from 'mithril';
import Board from '../Board';
import shallow from '../../../lib/mithril-shallow';
import Cards from '../../models/Cards';
import Columns from '../../models/Columns';

test('it renders a board with ColumnsList', () => {
  const vnode = shallow(Board);

  expect(vnode).toMatchInlineSnapshot(`
<div
  className="kanban-board"
>
  <ColumnsList />
</div>
`);
});

test('it loads all columns and cards on init', () => {
  Board.oninit && Board.oninit(m(Board));
  expect((Columns.loadAll as jest.Mock).mock.calls).toHaveLength(1);
  expect((Cards.loadAll as jest.Mock).mock.calls).toHaveLength(1);
});
