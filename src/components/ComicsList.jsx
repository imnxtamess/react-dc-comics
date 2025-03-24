import ComicsCard from "./ComicsCard";
import comics from "../data/comics";
import { useState } from "react";
export default function ComicsList() {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the Search query
  const [typeQuery, setTypeQuery] = useState(""); // State to store the Type query
  const [seriesQuery, setSeriesQuery] = useState(""); // State to store the Series query
  const [artistsQuery, setArtistsQuery] = useState(""); // State to store the Artists query
  const [writersQuery, setWritersQuery] = useState(""); // State to store the Writers query

  // Filter comics based on the queries
  const filteredComics = comics.filter((comic) => {
    return (
      comic.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      comic.type.toLowerCase().includes(typeQuery.toLowerCase()) &&
      comic.series.toLowerCase().includes(seriesQuery.toLowerCase()) &&
      (comic.artists.some((artist) =>
        artist.toLowerCase().includes(artistsQuery.toLowerCase())
      ) ||
        artistsQuery === "") &&
      (comic.writers.some((writer) =>
        writer.toLowerCase().includes(writersQuery.toLowerCase())
      ) ||
        writersQuery === "")
    );
  });

  return (
    <div className="comicsContainer">
      <div className="badge">CURRENT SERIES</div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="Filter by Title...🔍"
          value={searchQuery} // Bind input value to state
          onChange={(e) => setSearchQuery(e.target.value)} // Update state on input change
        />
      </div>
      <div className="filtersContainer">
        <div className="typeFilter">
          <span>TYPE</span>
          <select
            name="filterType"
            value={typeQuery} // Bind input value to state
            onChange={(e) => setTypeQuery(e.target.value)} // Update sate on input change
          >
            <option value="">Select a Type</option>
            <option value="comic book">COMIC BOOK</option>
            <option value="graphic novel">GRAPHIC NOVEL</option>
          </select>
        </div>
        <div className="seriesFilter">
          <span>SERIES</span>
          <select
            name="filterSeries"
            onChange={(e) => setSeriesQuery(e.target.value)}
            value={seriesQuery}
          >
            <option value="">Select a Series</option>
            {comics.map((comic) => (
              <option value={comic.series}>{comic.series}</option>
            ))}
          </select>
        </div>
        <div className="artistsFilter">
          <span>ARTISTS</span>
          <select
            name="filterArtists"
            onChange={(e) => setArtistsQuery(e.target.value)}
            value={artistsQuery}
          >
            <option value="">Select an Artist</option>
            {[...new Set(comics.flatMap((comic) => comic.artists))].map(
              (artist) => {
                return <option value={artist}>{artist}</option>;
              }
            )}
          </select>
        </div>
        <div className="writersFilter">
          <span>WRITERS</span>
          <select
            name="filterWriters"
            onChange={(e) => setWritersQuery(e.target.value)}
            value={writersQuery}
          >
            <option value="">Select a Writer</option>
            {[...new Set(comics.flatMap((comic) => comic.writers))].map(
              (writer) => {
                return <option value={writer}>{writer}</option>;
              }
            )}
          </select>
        </div>
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
