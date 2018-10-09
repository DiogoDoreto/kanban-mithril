interface InputVNode {
  dom: any;
}

function focusAndSelect(vnode: InputVNode) {
  const node = vnode.dom as HTMLInputElement;
  node.focus();
  node.select();
}

export default focusAndSelect;
