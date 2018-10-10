import AddForm from '../AddForm';
import shallow from '../../../lib/mithril-shallow';

test('it renders a form', () => {
  const attrs = { onsubmit() {}, oncancel() {} };
  const state = { value: '' };
  const vnode = shallow(AddForm, attrs, state);

  expect(vnode).toMatchInlineSnapshot(`
<form
  onkeypress={[Function]}
  onsubmit={[Function]}
>
  <input
    oncreate={[Function]}
    oninput={[Function]}
    value=""
  />
  <button>
    Add
  </button>
</form>
`);
});
