jest.setMock('../AddForm', 'AddForm');

import AddButton from '../AddButton';
import shallow from '../../../lib/mithril-shallow';

test('it renders a button when it is not adding', () => {
  const attrs = { onsubmit() {}, itemType: 'card' };
  const state = { isAdding: false };
  const vnode = shallow(AddButton, attrs, state);

  expect(vnode).toMatchInlineSnapshot(`
<button
  className="add-button add-button_card"
  onclick={[Function]}
>
  <#>+ Add new </#>
  <#>card</#>
</button>
`);
});

test('it renders proper class and content according to itemType', () => {
  const attrs = { onsubmit() {}, itemType: 'column' };
  const state = { isAdding: false };
  const vnode = shallow(AddButton, attrs, state);

  expect(vnode).toMatchInlineSnapshot(`
<button
  className="add-button add-button_column"
  onclick={[Function]}
>
  <#>+ Add new </#>
  <#>column</#>
</button>
`);
});

test('it renders AddForm when it is adding', () => {
  const attrs = { onsubmit() {}, itemType: 'card' };
  const state = { isAdding: true };
  const vnode = shallow(AddButton, attrs, state);

  expect(vnode).toMatchInlineSnapshot(`
<AddForm
  oncancel={[Function]}
  onsubmit={[Function]}
/>
`);
});
