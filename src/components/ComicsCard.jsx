export default function ComicsCard({ img, title }) {
  // Logic here

  return (
    <div className="col-2">
      <div className="card">
        <div className="card_header">
          <img src={img} alt={title} />
        </div>
        <span>{title}</span>
      </div>
    </div>
  );
}
