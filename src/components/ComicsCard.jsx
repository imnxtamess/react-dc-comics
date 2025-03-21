export default function ComicsCard({ img, title }) {
  // Logic here

  return (
    <div className="card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}
