import createApi from './createApi';

const api = createApi('columns');

const Columns = {
  all: [],

  async loadAll() {
    const response = await api.get();
    Columns.all = response.data;
  },

  async create(column) {
    const response = await api.post(column)();
    Columns.all.push(response);
  },

  async delete(column) {
    await api.delete(column.id);
    Columns.all = Columns.all.filter(c => c.id !== column.id);
  },
};

export default Columns;
