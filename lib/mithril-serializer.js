const {
  printChildren,
  printElement,
  printElementAsLeaf,
  printProps,
  printText,
} = require('pretty-format/build/plugins/lib/markup.js');
const m = require('mithril');

const getChildren = element => {
  const { children, text } = element;
  if (text !== undefined) return [text];
  if (!children) return [];
  return Array.isArray(children) ? children : [children];
};

const getType = element => {
  const { tag } = element;

  if (typeof tag === 'string') return tag;

  if (typeof tag === 'function') {
    return tag.displayName || tag.name || 'm(fn())';
  }

  return 'm({})';
};

const getPropKeys = element => {
  const { attrs } = element;

  if (!attrs) return [];

  return Object.keys(attrs)
    .filter(key => attrs[key] !== undefined)
    .sort();
};

const serialize = (element, config, indentation, depth, refs, printer) => {
  depth++;

  const type = getType(element);

  if (type === '#') {
    config = Object.assign({}, config, { spacingOuter: '', indent: '' });
    indentation = '';
  }

  if (depth > config.maxDepth) return printElementAsLeaf(type, config);

  return printElement(
    type,
    printProps(
      getPropKeys(element),
      element.attrs,
      config,
      indentation + config.indent,
      depth,
      refs,
      printer,
    ),
    printChildren(
      getChildren(element),
      config,
      indentation + config.indent,
      depth,
      refs,
      printer,
    ),
    config,
    indentation,
  );
};

const mithrilAttrs = Object.keys(m.vnode());
const test = val =>
  typeof val === 'object' &&
  Object.keys(val).every(key => mithrilAttrs.includes(key));

module.exports = { serialize, test };
