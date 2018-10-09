import m from 'mithril';
import Columns, { IColumn } from '../models/Columns';
import handleKey from '../utils/handleKey';
import focusAndSelect from '../utils/focusAndSelect';

interface Attrs {
  column: IColumn;
}

interface State {
  isEditing: boolean;
  value: string;
}

const ColumnTitle: m.Component<Attrs, State> = {
  oninit({ attrs, state }) {
    state.value = attrs.column.title;
  },
  view({ attrs: { column }, state }) {
    const startEditing = () => (state.isEditing = true);
    const stopEditing = () => (state.isEditing = false);
    const save = () => {
      Columns.update({ ...column, title: state.value });
      stopEditing();
    };

    return m(
      '.column__title',
      {
        class: state.isEditing ? 'column__title_editing' : '',
        ondblclick: startEditing,
      },
      state.isEditing
        ? m('input.column__title-input', {
            value: state.value,
            oninput: m.withAttr('value', v => (state.value = v)),
            onkeypress: handleKey({ Escape: stopEditing, Enter: save }),
            oncreate: focusAndSelect,
            onblur: save,
          })
        : column.title,
    );
  },
};

export default ColumnTitle;
