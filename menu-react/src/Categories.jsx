const Categories = ({ categories, handleCategories }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className="btn"
            key={category}
            onClick={() => handleCategories(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
