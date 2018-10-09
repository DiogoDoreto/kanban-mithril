import focusAndSelect from '../focusAndSelect';

test('focusAndSelect calls focus and select', () => {
  const vnode = {
    dom: {
      focus: jest.fn(() => {}),
      select: jest.fn(() => {}),
    },
  };

  focusAndSelect(vnode);

  expect(vnode.dom.focus.mock.calls).toHaveLength(1);
  expect(vnode.dom.select.mock.calls).toHaveLength(1);
});
