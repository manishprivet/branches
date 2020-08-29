/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState } from 'react';

const sampleData: Record<string, unknown> = {
  '/api': {
    '/me': 'Hi',
    '/fg': {
      '/gg': 'Gihf',
    },
  },
};

const generateList = (obj: Record<string, unknown>) => {
  return (
    <ul>
      {Object.keys(obj).map((key) => {
        const containsObject = typeof obj[key] === typeof {};
        return (
          <li key={key}>
            {containsObject ? <InputComponent value={key} /> : ''}
            {containsObject ? (
              generateList(obj[key] as Record<string, unknown>)
            ) : (
              <InputComponent value={key} />
            )}
          </li>
        );
      })}
    </ul>
  );
};

const List: React.FC<unknown> = () => {
  const [list, setList] = useState<Record<string, unknown>>(sampleData);

  return <div>{generateList(list)}</div>;
};

const InputComponent: React.FC<{ value: string }> = ({ value }) => {
  const [keyValue, setKeyValue] = useState(value);
  const [inFocus, setInFocus] = useState(false);

  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      <div
        onClick={() => setInFocus(true)}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          pointerEvents: inFocus ? 'none' : 'auto',
        }}
      />
      <input
        onBlur={() => setInFocus(false)}
        value={keyValue}
        disabled={!inFocus}
        onChange={(e) => setKeyValue(e.target.value)}
      />
    </div>
  );
};

export default List;
