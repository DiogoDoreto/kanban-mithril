import { Component, Vnode } from 'mithril';

function shallow<Attrs, State>(
  Component: Component<Attrs, State>,
  attrs?: Attrs,
  state?: State,
): Vnode {
  return Component.view.call(state, { attrs, state });
}

export default shallow;
