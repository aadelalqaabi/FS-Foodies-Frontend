import { useState } from 'react';
import { Link } from 'react-router-dom';
import authStore from '../../stores/authStore';
import { useNavigate } from "react-router-dom";

function SignInModal() {
    const nav = useNavigate();
  const [user, setUser] = useState();

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      await authStore.signIn(user);
      nav("/user-page");
    } catch (e) {
      alert(e.message);
    }
  }
  

  return (

    <div /*className='user-specs'*/>
        <div class="background"></div>
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
                {/* <Link to="/home"> */}
                    <input
                        className="button-sign ing-create"
                        type="submit"
                        value="Sign In"
                    />
                {/* </Link> */}
            </div>
        </form>
    </div>
  );
}

export default SignInModal;



// check this later

// async function handleSubmit(event) {
//     event.preventDefault();
  
//     try {
//       await Auth.signIn(email, password);
//       userHasAuthenticated(true);
//       nav("/");
//     } catch (e) {
//       alert(e.message);
//     }
//   }