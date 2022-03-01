import React from "react";
import Loading from "./Loading";
import RecipeCard from "./RecipeCard";
import { useGlobalContext } from "../context";
const RecipeList = () => {
  const { loading, recipes } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (recipes.length < 1) {
    return (
      <h2 className="section-title">No recipes mathed your search creteria</h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">recipes</h2>
      <div className="recipes-center">
        {recipes.map((item) => {
          return <RecipeCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default RecipeList;
