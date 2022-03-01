import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleRecipe = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getSingleRecipe() {
      await axios({
        method: "GET",
        url: `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false`,
      })
        .then((res) => {
          if (res.data) {
            const {
              image,
              title: name,
              readyInMinutes: time,
              servings,
              summary,
              instructions,
              extendedIngredients: ingredients,
            } = res.data;

            const newRecipe = {
              image,
              name,
              time,
              servings,
              summary,
              instructions,
              ingredients,
            };

            setRecipe(newRecipe);
          } else {
            setRecipe(null);
          }
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
    getSingleRecipe();
  }, [id]);

  if (loading) {
    return <Loading />;
  }
  if (!recipe) {
    return <h2 className="section-title">No recipes to display</h2>;
  }
  const { image, name, time, servings, instructions, ingredients } = recipe;

  return (
    <section className="section sing-recipe-section">
      <h2 className="section-title">{name}</h2>
      <div className="sing-recipe">
        <img src={image} alt={name} />
        <div className="sing-recipe-info">
          {name ? (
            <p>
              <span className="sing-recipe-data">name :</span>
              {name}
            </p>
          ) : null}
          {servings ? (
            <p>
              <span className="sing-recipe-data">servings :</span>
              {servings}
            </p>
          ) : null}
          {time ? (
            <p>
              <span className="sing-recipe-data">minutes to ready :</span>
              {time}
            </p>
          ) : null}
          <p>
            <span className="sing-recipe-data">ingredients :</span>
            {ingredients.map((item, index) => {
              const { original } = item;
              return item ? (
                <span key={index}>- {original}</span>
              ) : (
                "no ingredients"
              );
            })}
          </p>
          {instructions ? (
            <p>
              <span className="sing-recipe-data">instructions :</span>
              {instructions}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default SingleRecipe;
