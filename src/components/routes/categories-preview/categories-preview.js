import { useContext } from "react";
import CategoryPreview from "../../category-preview/category-preview";
import { CategoriesContext } from "../../context/categories";
import "./categories-preview.styles.scss";

export default function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <div className="categories-preview-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
}
