import { Link } from "react-router-dom";
import ProductCard from "../products-card/product-card";
import "./category-preview.styles.scss";

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link className="title" to={title}>
          {title}
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} title={title} product={product} />
          ))}
      </div>
    </div>
  );
}
