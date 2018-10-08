import m from 'mithril';
import AddForm from './AddForm';

interface Attrs {
  itemType: string;
  onsubmit: (title: string) => void;
}

interface State {
  isAdding: boolean;
}

const AddButton: m.Component<Attrs, State> = {
  view({ attrs, state }) {
    if (state.isAdding) {
      return m(AddForm, {
        onsubmit(title: string) {
          state.isAdding = false;
          attrs.onsubmit(title);
        },
        oncancel() {
          state.isAdding = false;
        },
      });
    }
    return m(
      'button.add-button',
      {
        class: 'add-button_' + attrs.itemType,
        onclick() {
          state.isAdding = true;
        },
      },
      ['+ Add new ', attrs.itemType],
    );
  },
};

export default AddButton;
