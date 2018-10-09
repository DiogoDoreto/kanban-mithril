import handleKey from '../handleKey';

test('handleKey calls methods on proper keys', () => {
  const config = {
    Enter: jest.fn(() => {}),
    Escape: jest.fn(() => {}),
  };
  const event = { key: 'Enter' };
  handleKey(config)(event);

  expect(config.Enter.mock.calls).toHaveLength(1);
  expect(config.Escape.mock.calls).toHaveLength(0);
});
