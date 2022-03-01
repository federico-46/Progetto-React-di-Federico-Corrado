import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ id, name, image }) => {
  return (
    <article className="recipe-card">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="recipe-card-footer">
        <h3>{name}</h3>
        <Link to={`/recipe/${id}`} className="btn btn-primary btn-details">
          details
        </Link>
      </div>
    </article>
  );
};

export default RecipeCard;
