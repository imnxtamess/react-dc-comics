import ComicsCard from "./ComicsCard";
import comics from "../data/comics";
export default function ComicsList() {
  //Logic here
  console.log(comics);
  return (
    <div className="comicsContainer">
      <div className="badge">CURRENT SERIES</div>
      <div className="row">
        {comics.map((comic) => (
          <ComicsCard key={comic.id} img={comic.thumb} title={comic.title} />
        ))}
      </div>
      <div className="moreBtn">load more</div>
    </div>
  );
}
