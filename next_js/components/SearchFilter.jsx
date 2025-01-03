'use client';

import React, { useState, useEffect } from "react";
import { items } from "../public/data/data"; // Import static data

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchCategory, setSearchCategory] = useState("all");


  // Debouncing the search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500); // 500ms debounce delay

    return () => clearTimeout(handler); // Cleanup the timeout
  }, [searchTerm]);

  // Simulate server-side search
  useEffect(() => {
    setIsLoading(true);

    const fetchResults = async () => {
      // Simulate an API call with local data
      const results = items.filter((item) => {
        const matchesCategory =
          searchCategory === "all" || item.category === searchCategory;
        const matchesSearchTerm = item.name
          .toLowerCase()
          .includes(debouncedSearchTerm.toLowerCase());
        return matchesCategory && matchesSearchTerm;
      });

      setFilteredItems(results);
      setIsLoading(false);
    };

    fetchResults();
  }, [debouncedSearchTerm, searchCategory]);

  return (
    <div>
      <h1>Advanced Search Filter</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Category Filter */}
      <select
        value={searchCategory}
        onChange={(e) => setSearchCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
      </select>

      {/* Loading Indicator */}
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => <li key={item.id}>{item.name}</li>)
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchFilter;
