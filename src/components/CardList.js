import m from 'mithril';
import Cards from './../models/Cards';
import { AddButton } from './AddForm';

const Card = {
  view({ attrs: { card } }) {
    return m(
      '.card[draggable]',
      {
        key: card.id,
        ondragstart: event => {
          event.dataTransfer.setData('text/plain', card.title);
          event.dataTransfer.setData('kanban/card', JSON.stringify(card));
          event.effectAllowed = 'copyMove';
        },
        ondragend: event => {
          event.dataTransfer.clearData();
        },
      },
      card.title,
    );
  },
};

export const CardList = {
  oninit({ attrs: { columnId } }) {
    this.cards = Cards.byColumnId(columnId);
  },
  view({ attrs: { columnId } }) {
    const hasCards = this.cards().length > 0;
    return m('.cards-list', [
      hasCards && this.cards().map(card => m(Card, { key: card.id, card })),
      !hasCards && m('.no-cards', 'No cards'),
      m(AddButton, {
        itemType: 'card',
        onsubmit: title => {
          Cards.create({ title, columnId });
        },
      }),
    ]);
  },
};
