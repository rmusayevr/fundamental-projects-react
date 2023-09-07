import { useEffect, useState } from "react";
import Title from "./Title";
import data from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

// const categories = data.map((item) => item.category);
// const uniqueCategories = new Set(categories);
// const arrayCategories = ["all", { ...uniqueCategories }];

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  console.log(menuItems);

  const handleCategories = (selectedCategory) => {
    if (selectedCategory === 'all') {
      setMenuItems(data);
      return;
    }
    const newMenu = data.filter((item) => item.category === selectedCategory);
    setMenuItems(newMenu);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories
          categories={categories}
          handleCategories={handleCategories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
