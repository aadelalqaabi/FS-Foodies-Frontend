import ingredientsStore from '../stores/ingredientsStore';
import { observer } from 'mobx-react';
import IngredientsItem from './IngredientsItem';
import CreateIngredientModal from './CreateIngredientModal';

function IngredientsList(){
    const ingredientsList = ingredientsStore.ingredients.map((ingredient) => <IngredientsItem key={ingredient._id} ingredient={ingredient} />);

    return(
        <div className='ing-list-specs'>
            <div className="ing-input">
                <CreateIngredientModal />
                <h4>Choose Your Ingredients: </h4>    
            </div>
            
            <div className='ing-scrol'>
                <div>{ingredientsList}</div>
            </div>
        </div>
    );
}

export default observer(IngredientsList);