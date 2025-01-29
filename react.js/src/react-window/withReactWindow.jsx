//with react-window

import  { useState, useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';

const WithReactWindow = ({ items }) => {
  const [search, setSearch] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (<div>
      <h1>With react-window</h1>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <List
        height={560} // Height of the list container
        itemCount={filteredItems.length} // Total number of items
        itemSize={20}// Height of each item
        width="100%" // Width of the list container
      >
        {({ index, style }) => <div style={style}>{filteredItems[index]}</div>}
      </List>
    </div>
  );
};

export default WithReactWindow;

