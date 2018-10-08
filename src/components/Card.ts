import m from 'mithril';
import { ICard } from './../models/Cards';

interface Attrs {
  card: ICard;
}

const Card: m.Component<Attrs> = {
  view({ attrs: { card } }) {
    return m(
      '.card[draggable]',
      {
        key: card.id,
        ondragstart: (event: DragEvent) => {
          event.dataTransfer.setData('text/plain', card.title);
          event.dataTransfer.setData('kanban/card', JSON.stringify(card));
          event.dataTransfer.effectAllowed = 'copyMove';
        },
        ondragend: (event: DragEvent) => {
          event.dataTransfer.clearData();
        },
      },
      card.title,
    );
  },
};

export default Card;
