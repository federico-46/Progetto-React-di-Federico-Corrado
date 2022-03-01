import axios from "axios";
import React, { useState, useContext, useEffect, useCallback } from "react";

//url take recipes vegetarian
const url = `https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}&number=60&query=`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("vegetarian");
  const [recipes, setRecipes] = useState([]);

  const getRecipes = useCallback(async () => {
    setLoading(true);
    await axios({
      method: "GET",
      url: `${url}${search}`,
    })
      .then((res) => {
        console.log(res);
        const { results } = res.data;
        if (results) {
          const newRecipes = results.map((item) => {
            const { id, image, title } = item;
            return { id: id, image: image, name: title };
          });
          setRecipes(newRecipes);
        } else {
          setRecipes([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [search]);

  useEffect(() => {
    getRecipes();
  }, [search, getRecipes]);

  return (
    <AppContext.Provider value={{ loading, recipes, setSearch }}>
      {children}
    </AppContext.Provider>
  );
};
//custom global Hooks
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
