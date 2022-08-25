import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategoryInput = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    setInputValue("");
    onNewCategory(inputValue.trim());
  };
  return (
    <form onSubmit={onSubmit} aria-label="form">
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

AddCategoryInput.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
