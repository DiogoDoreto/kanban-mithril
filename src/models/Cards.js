import createApi from './createApi';
import stream from 'mithril/stream';

const api = createApi('cards');

const Cards = {
  all: stream([]),

  byColumnId(columnId) {
    return Cards.all.map(all => all.filter(c => c.columnId === columnId));
  },

  async loadAll() {
    const response = await api.get();
    Cards.all(response.data);
  },

  async create(card) {
    const response = await api.post(card)();
    Cards.all(Cards.all().concat(response));
  },

  async delete(card) {
    await api.delete(card.id);
    Cards.all(Cards.all().filter(c => c.id !== card.id));
  },

  async moveToColumn(card, columnId) {
    if (card.columnId === columnId) return;
    const newCard = {
      ...card,
      columnId,
    };
    Cards.all(Cards.all().map(c => (c.id === newCard.id ? newCard : c)));
    await api.put(newCard)(newCard.id);
  },
};

export default Cards;
