export default function ComicsCard({ img, title }) {
  // Logic here

  return (
    <div className="card">
      <img src={img} alt={title} />
      <span>{title}</span>
    </div>
  );
}
