import { Link } from "react-router-dom";
import { getQuestionCategories } from "./data";

export function Navbar() {
  const categories = getQuestionCategories();

  return (
    <div className="home-page__nav-items">
      {categories.map((categoryName) => (
        <Link to={`/categories/${categoryName}`} key={categoryName}>
          <button className="home-page__nav_item">{categoryName}</button>
        </Link>
      ))}
    </div>
  );
}
