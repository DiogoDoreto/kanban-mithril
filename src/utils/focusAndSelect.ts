import m from 'mithril';

function focusAndSelect(vnode: m.VnodeDOM) {
  const node = vnode.dom as HTMLInputElement;
  node.focus();
  node.select();
}

export default focusAndSelect;
