import m from 'mithril';

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
        onkeydown: (event: KeyboardEvent) => {
          if (event.key === 'Escape') {
            attrs.oncancel();
          }
        },
      },
      [
        m('input', {
          autofocus: true,
          oninput: m.withAttr('value', v => (state.value = v)),
          value: state.value,
        }),
        m('button', 'Add'),
      ],
    );
  },
};

export default AddForm;
