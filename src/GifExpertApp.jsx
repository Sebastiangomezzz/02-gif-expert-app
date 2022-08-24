import { useState } from "react";
import { AddCategoryInput, GifGrid} from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);
  const onAddCategory = (value) => {
    if (!categories.includes(value)) {
      setCategories([...categories, value]);
    } else return;
  };
  return (
    <>
      <h1>Gif Expert App</h1>
      <AddCategoryInput
        onNewCategory={(value) => {
          onAddCategory(value);
        }}
      />
      {categories.map((cat) => {
        return <GifGrid key={cat} category={cat} />;
      })}
    </>
  );
};
