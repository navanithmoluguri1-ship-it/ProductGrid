function ProductCard({ title, price, image }) {

  return (
    <div className="card">

      <img src={image} />

      <h3>{title}</h3>

      <p className="price">{price}</p>

      <button>Add</button>

    </div>
  );
}

export default ProductCard;