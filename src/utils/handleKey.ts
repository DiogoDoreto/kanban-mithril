type PartialKeyboardEvent = Pick<KeyboardEvent, 'key'>;

interface EventKeyMap {
  [key: string]: (event: PartialKeyboardEvent) => void;
}

const handleKey = (keyMap: EventKeyMap) => (event: PartialKeyboardEvent) => {
  const action = keyMap[event.key];
  if (action) action(event);
};

export default handleKey;
