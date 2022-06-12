import authStore from '../../stores/authStore';
import { useState } from "react"
import { observer } from 'mobx-react';
import recipesStore from '../../stores/recipesStore';

function ProfilePage() {
    

  return (
      <div>
          
          <div className='center'>
              <div className='container'>
                <h1>My Recipes</h1>
                <h1>{authStore.user.username}</h1>
                <h1>{authStore.user.recipes}</h1>
              </div>
          </div>
            
      </div>
  );
}

export default observer(ProfilePage);





  

  
