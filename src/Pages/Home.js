import React, { useState, useEffect } from "react";
import Grid from "../components/Grid/Grid";
import Section from "../components/Section/Section";
import recipeMock from "../lib/Mock/recipes";
import RecipeCard from "../components/RecipeCard/RecipeCard";

const Home = () => {
  const [recipes, setRecipes] = useState(0);

  useEffect(() => {
    setRecipes(recipeMock);
    console.log(recipes);
  }, [recipes]);

  return (
    <>
      <Section>
        {!recipes ? null : (
          <Grid>
            {recipes.map(
              (recipe) =>
                recipe.isFeatured && (
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
          </Grid>
        )}
      </Section>
    </>
  );
};

export default Home;
