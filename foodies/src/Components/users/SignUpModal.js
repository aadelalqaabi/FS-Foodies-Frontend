import { useState } from 'react';
import authStore from '../../stores/authStore';

function SignUpModal() {
  const [user, setUser] = useState();

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signUp(user);
  };

return(

    // <div>
    //     <form onSubmit={handleSubmit}>
    //         <div>
    //             <label className="field field_v1">
    //                 <input
    //                     className="field__input"
    //                     type="text"
    //                     placeholder="Username"
    //                     name="username"
    //                     onChange={handleChange}
    //                 />
    //                 <input
    //                     className="field__input"
    //                     type="text"
    //                     placeholder="Password"
    //                     name="password"
    //                     onChange={handleChange}
    //                 />
    //             </label>
    //             <input
    //                     className="button-7 ing-create"
    //                     type="submit"
    //                     value="Sign Up"
    //             />
    //         </div>
    //     </form>
    // </div>

    <div /*className='user-specs'*/>
        <div class="background">
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
        <form className='form-style' onSubmit={handleSubmit}>
            <div>
                <label className='label-style'>
                    <h3>Sign Up Here</h3>
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
                    value="Sign Up"
                />
            </div>
        </form>
    </div>
);
}
export default SignUpModal;