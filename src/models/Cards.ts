import createApi from './createApi';
import stream, { Stream } from 'mithril/stream';

export interface ICard {
  id: number;
  title: string;
  columnId: number;
}

interface INewCard {
  title: string;
  columnId: number;
}

const api = createApi<ICard>('cards');

const Cards = {
  all: stream<ICard[]>([]),

  byColumnId(columnId: number): Stream<ICard[]> {
    return Cards.all.map(all => all.filter(c => c.columnId === columnId));
  },

  async loadAll() {
    const response = await api.get();
    Cards.all(response.data);
  },

  async create(card: INewCard) {
    const response = await api.post(card)();
    Cards.all(Cards.all().concat(response));
  },

  async delete(card: ICard) {
    await api.delete(card.id);
    Cards.all(Cards.all().filter(c => c.id !== card.id));
  },

  async update(card: ICard) {
    Cards.all(Cards.all().map(c => (c.id === card.id ? card : c)));
    await api.put(card)(card.id);
  },

  async moveToColumn(card: ICard, columnId: number) {
    if (card.columnId === columnId) return;
    const newCard = {
      ...card,
      columnId,
    };
    await Cards.update(newCard);
  },
};

export default Cards;
