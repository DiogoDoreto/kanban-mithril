import createApi from './createApi';
import stream from 'mithril/stream';

export interface IColumn {
  id: number;
  title: string;
}

interface INewColumn {
  title: string;
}

const api = createApi<IColumn>('columns');

const Columns = {
  all: stream<IColumn[]>([]),

  async loadAll() {
    const response = await api.get();
    Columns.all(response.data);
  },

  async create(column: INewColumn) {
    const response = await api.post(column)();
    Columns.all(Columns.all().concat(response));
  },

  async update(column: IColumn) {
    Columns.all(Columns.all().map(c => (c.id === column.id ? column : c)));
    await api.put(column)(column.id);
  },

  async delete(column: IColumn) {
    await api.delete(column.id);
    Columns.all(Columns.all().filter(c => c.id !== column.id));
  },
};

export default Columns;
