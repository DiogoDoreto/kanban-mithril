import m from 'mithril';

const AddForm = {
  value: '',
  view({ attrs: { onsubmit, oncancel } }) {
    return m(
      'form',
      {
        onsubmit: event => {
          event.preventDefault();
          onsubmit(this.value);
        },
        onkeydown: event => {
          if (event.key === 'Escape') {
            oncancel();
          }
        },
      },
      [
        m('input', {
          autofocus: true,
          oninput: m.withAttr('value', v => (this.value = v)),
          value: this.value,
        }),
        m('button', 'Add'),
      ],
    );
  },
};

export const AddButton = {
  isAdding: false,
  view({ attrs: { itemType, onsubmit } }) {
    if (this.isAdding) {
      return m(AddForm, {
        onsubmit: title => {
          this.isAdding = false;
          onsubmit(title);
        },
        oncancel: () => (this.isAdding = false),
      });
    }
    return m(
      'button.add-button',
      {
        class: 'add-button_' + itemType,
        onclick: () => (this.isAdding = true),
      },
      '+ Add new ',
      itemType,
    );
  },
};
