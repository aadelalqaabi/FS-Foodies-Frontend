import authStore from '../../stores/authStore';
import { useState } from "react"
import { observer } from 'mobx-react';

function ProfilePage() {
    // const user1 = authStore.user;
    const recipeId = "62a0a50cabcaba65f7de5683";
    const [addR, setAddR] = useState(authStore.user);

    const handleIngredients = (event) => {
        const ingredientArr = addR;
        ingredientArr.recipes.push(recipeId);
        setAddR(ingredientArr);
        authStore.updateUser(addR, ingredientArr.id, recipeId);
      };

  return (
      <div>
          <h1>{authStore.user.id}</h1>
            <h1>{authStore.user.username}</h1>
            <h1>{authStore.user.recipes}</h1>

            <button onClick={handleIngredients}>
                add
            </button>
      </div>
  );
}

export default observer(ProfilePage);





  

  
