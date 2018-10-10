import Card from '../Card';
import shallow from '../../../lib/mithril-shallow';
import { ICard } from '../../models/Cards';

test('it renders a card item', () => {
  const cardItem: ICard = {
    id: 1,
    title: 'Test',
    columnId: 3,
  };
  const vnode = shallow(Card, { card: cardItem });
  expect(vnode).toMatchInlineSnapshot(`
<div
  className="card"
  draggable={true}
  key={1}
  ondragend={[Function]}
  ondragstart={[Function]}
>
  Test
</div>
`);
});
