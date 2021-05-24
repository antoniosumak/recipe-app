import React, { useState, useEffect, useContext } from "react";
import Grid from "../components/Grid/Grid";
import Section from "../components/Section/Section";
import recipeMock from "../lib/Mock/recipes";
import RecipeCard from "../components/RecipeCard/RecipeCard";
import Loader from "react-loader-spinner";

import "../generalStyles.scss";
import { AuthContext } from "../context/AuthContex";

const Home = () => {
  const [recipes, setRecipes] = useState(0);
  const { addedFavourite } = useContext(AuthContext);

  useEffect(() => {
    setTimeout(() => {
      setRecipes(recipeMock);
    }, 1000);
  }, [recipes]);

  return (
    <>
      <Section>
        {!recipes ? (
          <Loader type="TailSpin" color="#f2994a" height={100} width={100} />
        ) : (
          <Grid>
            {recipes.map(
              (recipe) =>
                recipe.isFavourite && (
                  <RecipeCard
                    key={recipe.id}
                    image={recipe.imageUrl}
                    alt={recipe.imageAlt}
                    title={recipe.title}
                    ingridients={recipe.ingridients}
                    steps={recipe.steps}
                    prepTime={recipe.prepTime}
                  />
                )
            )}
            {addedFavourite.map((favourite, index) => (
              <RecipeCard
                key={index}
                image={favourite.imageUrl}
                alt={favourite.imageAlt}
                title={favourite.title}
                ingridients={favourite.ingridients}
                steps={favourite.steps}
                prepTime={favourite.prepTime}
              />
            ))}
          </Grid>
        )}
      </Section>
    </>
  );
};

export default Home;
