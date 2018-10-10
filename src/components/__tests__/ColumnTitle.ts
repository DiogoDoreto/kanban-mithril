jest.setMock('../CardList', 'CardList');

import shallow from '../../../lib/mithril-shallow';
import ColumnTitle from '../ColumnTitle';
import { IColumn } from '../../models/Columns';

test('it renders a column title', () => {
  const column: IColumn = {
    id: 1,
    title: 'In progress',
  };
  const attrs = { column };
  const state = { isEditing: false, value: '' };
  const vnode = shallow(ColumnTitle, attrs, state);

  expect(vnode).toMatchInlineSnapshot(`
<div
  className="column__title "
  ondblclick={[Function]}
>
  In progress
</div>
`);
});

test('it renders an input to change title', () => {
  const column: IColumn = {
    id: 1,
    title: 'In progress',
  };
  const attrs = { column };
  const state = { isEditing: true, value: 'New name' };
  const vnode = shallow(ColumnTitle, attrs, state);

  expect(vnode).toMatchInlineSnapshot(`
<div
  className="column__title column__title_editing"
  ondblclick={[Function]}
>
  <input
    className="column__title-input"
    onblur={[Function]}
    oncreate={[Function]}
    oninput={[Function]}
    onkeypress={[Function]}
    value="New name"
  />
</div>
`);
});
