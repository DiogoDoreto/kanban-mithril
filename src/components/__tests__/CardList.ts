jest.setMock('../AddButton', 'AddButton');
jest.setMock('../Card', 'Card');
jest.mock('../../models/Cards');

import stream from 'mithril/stream';
import shallow from '../../../lib/mithril-shallow';
import CardList from '../CardList';
import Cards from '../../models/Cards';

test('it renders "No cards" text', () => {
  const attrs = { columnId: 1 };
  const state = { cards: stream([]) };
  const vnode = shallow(CardList, attrs, state);

  expect(vnode).toMatchInlineSnapshot(`
<div
  className="cards-list"
>
  <div
    className="no-cards"
  >
    No cards
  </div>
  <AddButton
    itemType="card"
    onsubmit={[Function]}
  />
</div>
`);
});

test('it renders a list of cards', () => {
  const attrs = { columnId: 1 };
  const state = {
    cards: stream([
      { id: 1, title: 'Foo', columnId: 1 },
      { id: 2, title: 'Bar', columnId: 1 },
    ]),
  };
  const vnode = shallow(CardList, attrs, state);

  expect(vnode).toMatchInlineSnapshot(`
<div
  className="cards-list"
>
  <[>
    <Card
      card={
        Object {
          "columnId": 1,
          "id": 1,
          "title": "Foo",
        }
      }
      key={1}
    />
    <Card
      card={
        Object {
          "columnId": 1,
          "id": 2,
          "title": "Bar",
        }
      }
      key={2}
    />
  </[>
  <AddButton
    itemType="card"
    onsubmit={[Function]}
  />
</div>
`);
});
