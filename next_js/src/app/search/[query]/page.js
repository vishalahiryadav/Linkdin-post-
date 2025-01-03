import { items } from "../../../../public/data/data";

export default async function SearchQueryPage({ params }) {
  const { query } = await params;


  console.log(items); // This should log the array of items

  // Filter items by query
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <li key={item.id}>{item.name}</li>)
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  );
}
