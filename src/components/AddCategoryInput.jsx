import React, { useState } from "react";

export const AddCategoryInput = ({ onNewCategory }) => {
  const [inputValue, setinputValue] = useState("");

  const onInputChange = ({ target }) => {
    setinputValue(target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "" && inputValue.trim().length > 2) {
      onNewCategory(inputValue.trim());
      setinputValue("");
    } else return;
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name="add_category"
        type="text"
        placeholder="Search gifs..."
        value={inputValue}
        onChange={onInputChange}
      />
      <input type="submit" />
    </form>
  );
};
