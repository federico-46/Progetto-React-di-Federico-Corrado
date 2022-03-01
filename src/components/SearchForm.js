import React, { useRef, useEffect } from "react";

import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  const searchValue = useRef("");

  //focus one time app render
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchRecipe = () => {
    setSearch(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            search for your favorite vegetarian recipe
          </label>
          <input
            type="text"
            name="name"
            id="name"
            ref={searchValue}
            onChange={searchRecipe}
            placeholder="ex. Vegetables"
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
