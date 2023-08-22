export default function Avatar({image, isNew}) {
  return (
    <div className="avatar">
      <img src={image} alt="avatar" className="photo" />
      {isNew && <span className="new">New</span>}
    </div>
  );
}