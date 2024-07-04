
import React from "react";

function RecipeRow({ recipe, index, deleteRecipe }) {
  return (
    <tr key={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt={recipe.name} style={{ width: "100px" }} /></td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={() => deleteRecipe(index)}>Delete</button>
      </td>
    </tr>
  );
}

export default RecipeRow;

