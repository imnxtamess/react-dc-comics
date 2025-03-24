import ComicsCard from "./ComicsCard";
import comics from "../data/comics";
import React, { useState } from "react";
export default function ComicsList() {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  // Filter comics based on the search query
  const filteredComics = comics.filter((comic) => {
    return comic.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  console.log(filteredComics);

  return (
    <div className="comicsContainer">
      <div className="badge">CURRENT SERIES</div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery} // Bind input value to state
          onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
        />
      </div>
      <div className="row">
        {filteredComics.map((comic) => (
          <ComicsCard key={comic.id} img={comic.thumb} title={comic.title} />
        ))}
      </div>
      <div className="moreBtn">load more</div>
    </div>
  );
}
