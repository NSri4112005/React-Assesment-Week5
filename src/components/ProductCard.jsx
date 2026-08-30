import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-link"
    >
      <div className="product-card">
        <img src={product.image} alt={product.title} />

        <h2>{product.title}</h2>

        <p>Price: ${product.price}</p>

        <p>Category: {product.category}</p>

        <p>Rating: ⭐ {product.rating.rate}</p>
      </div>
    </Link>
  );
}

export default ProductCard;