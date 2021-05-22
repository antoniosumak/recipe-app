import React from "react";
import "./RecipeCard.scss";

const RecipeCard = ({ title, image, steps, prepTime, ingridients, alt }) => {
  return (
    <div className={"RecipeCard"}>
      <figure className={"RecipeCard-Figure"}>
        <img className={"RecipeCard-Image"} src={image} alt={alt} />
        <div className={"RecipeCard-Description"}>
          <h2 className={"Title"}>{title}</h2>
          <ul className={"InfoWrapper"}>
            <li className={"InfoWrapper-Ingridients"}>{ingridients}</li>
            <li className={"InfoWrapper-Steps"}>{steps}</li>
            <li className={"InfoWrapper-PrepTime"}>{prepTime}</li>
          </ul>
        </div>
      </figure>
    </div>
  );
};

export default RecipeCard;
