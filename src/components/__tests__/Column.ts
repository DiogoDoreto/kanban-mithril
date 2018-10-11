jest.setMock('../CardList', 'CardList');
jest.setMock('../ColumnTitle', 'ColumnTitle');

import shallow from '../../../lib/mithril-shallow';
import Column from '../Column';
import { IColumn } from '../../models/Columns';

test('it renders a column item', () => {
  const column: IColumn = {
    id: 1,
    title: 'In progress',
  };
  const attrs = { column };
  const state = { dragover: false };
  const vnode = shallow(Column, attrs, state);

  expect(vnode).toMatchInlineSnapshot(`
<div
  className="column "
  ondragexit={[Function]}
  ondragover={[Function]}
  ondrop={[Function]}
>
  <ColumnTitle
    column={
      Object {
        "id": 1,
        "title": "In progress",
      }
    }
  />
  <button
    className="column__delete"
    onclick={[Function]}
  >
    ×
  </button>
  <CardList
    columnId={1}
  />
</div>
`);
});
