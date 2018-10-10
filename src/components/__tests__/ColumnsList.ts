jest.setMock('../AddButton', 'AddButton');
jest.setMock('../Column', 'Column');

import shallow from '../../../lib/mithril-shallow';
import ColumnsList from '../ColumnsList';
import Columns from '../../models/Columns';

afterEach(() => {
  Columns.all([]);
});

test('it renders a list of columns', () => {
  Columns.all([
    { id: 1, title: 'To Do' },
    { id: 2, title: 'In progress' },
    { id: 3, title: 'Done' },
  ]);
  const vnode = shallow(ColumnsList);

  expect(vnode).toMatchInlineSnapshot(`
<div
  className="columns-list"
>
  <[>
    <Column
      column={
        Object {
          "id": 1,
          "title": "To Do",
        }
      }
      key={1}
    />
    <Column
      column={
        Object {
          "id": 2,
          "title": "In progress",
        }
      }
      key={2}
    />
    <Column
      column={
        Object {
          "id": 3,
          "title": "Done",
        }
      }
      key={3}
    />
  </[>
  <AddButton
    itemType="column"
    onsubmit={[Function]}
  />
</div>
`);
});

test('it renders an empty list of columns', () => {
  const vnode = shallow(ColumnsList);

  expect(vnode).toMatchInlineSnapshot(`
<div
  className="columns-list"
>
  <[ />
  <AddButton
    itemType="column"
    onsubmit={[Function]}
  />
</div>
`);
});
