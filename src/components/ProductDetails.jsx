import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div className="product-details">
      <Link to="/">← Back to Products</Link>

      <div className="details-card">
        <img src={product.image} alt={product.title} />

        <div className="details-content">
          <h1>{product.title}</h1>

          <p className="price">${product.price}</p>

          <p>
            <strong>Category:</strong> {product.category}
          </p>

          <p>
            <strong>Rating:</strong> ⭐ {product.rating.rate}
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;