import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState);
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><label htmlFor="name">Name</label></td>
            <td><input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td><label htmlFor="cuisine">Cuisine</label></td>
            <td><input id="cuisine" name="cuisine" type="text" value={formData.cuisine} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td><label htmlFor="photo">Photo URL</label></td>
            <td><input id="photo" name="photo" type="url" value={formData.photo} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td><label htmlFor="ingredients">Ingredients</label></td>
            <td><textarea id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td><label htmlFor="preparation">Preparation</label></td>
            <td><textarea id="preparation" name="preparation" value={formData.preparation} onChange={handleChange} required /></td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

