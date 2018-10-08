import m from 'mithril';
import Cards from './../models/Cards';
import AddButton from './AddButton';
import Card from './Card';

interface Attrs {
  columnId: number;
}

interface State {
  cards: typeof Cards.all;
}

const CardList: m.Component<Attrs, State> = {
  oninit({ attrs, state }) {
    state.cards = Cards.byColumnId(attrs.columnId);
  },

  view({ attrs, state }) {
    const hasCards = state.cards().length > 0;
    const cardList = hasCards
      ? state.cards().map(card => m(Card, { key: card.id, card }))
      : m('.no-cards', 'No cards');

    return m('.cards-list', [
      cardList,
      m(AddButton, {
        itemType: 'card',
        onsubmit(title: string) {
          Cards.create({ title, columnId: attrs.columnId });
        },
      }),
    ]);
  },
};

export default CardList;
