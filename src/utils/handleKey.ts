interface EventKeyMap {
  [key: string]: (event: KeyboardEvent) => void;
}

const handleKey = (keyMap: EventKeyMap) => (event: KeyboardEvent) => {
  const action = keyMap[event.key];
  if (action) action(event);
};

export default handleKey;
