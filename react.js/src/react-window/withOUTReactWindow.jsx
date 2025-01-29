//without react-window

import { useState, useMemo } from 'react';

const WithoutReactWindow = ({ items }) => {
  const [search, setSearch] = useState('');

  // Use useMemo to cache the filtered list unless `items` or `search` changes
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (  <div>
      <h1>Without react-window</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default WithoutReactWindow;
