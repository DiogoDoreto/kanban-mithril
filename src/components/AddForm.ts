import m from 'mithril';
import handleKey from '../utils/handleKey';
import focusAndSelect from '../utils/focusAndSelect';

interface Attrs {
  onsubmit: (title: string) => void;
  oncancel: () => void;
}

interface State {
  value: string;
}

const AddForm: m.Component<Attrs, State> = {
  view({ attrs, state }) {
    return m(
      'form',
      {
        onsubmit: (event: Event) => {
          event.preventDefault();
          attrs.onsubmit(state.value);
        },
        onkeypress: handleKey({ Escape: attrs.oncancel }),
      },
      [
        m('input', {
          oncreate: focusAndSelect,
          oninput: m.withAttr('value', v => (state.value = v)),
          value: state.value,
        }),
        m('button', 'Add'),
      ],
    );
  },
};

export default AddForm;
