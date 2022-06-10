import { useState } from 'react';
import authStore from '../../stores/authStore';

function SignInModal() {
  const [user, setUser] = useState();

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signIn(user);
    // if(user === null)
  };

  return (

    <div /*className='user-specs'*/>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form className='form-style' onSubmit={handleSubmit}>
            <div>
                <label className='label-style'>
                    <h3>Sign In Here</h3>
                    <input
                        className='input-style'
                        type="text"
                        placeholder="Username"
                        name="username"
                        onChange={handleChange}
                    />
                    <input
                        className='input-style'
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                    />
                </label>
                <input
                    className="button-sign ing-create"
                    type="submit"
                    value="Sign In"
                />
            </div>
        </form>
    </div>
  );
}

export default SignInModal;