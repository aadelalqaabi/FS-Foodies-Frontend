import authStore from '../../stores/authStore';
import { useNavigate } from "react-router-dom";

function SignOutButton() {
    const nav = useNavigate();
    
    const handleSignOut = async () => {
        try {
            await authStore.signOut();
            nav("/home");
        } catch (e) {
            alert(e.message);
        }
        
    };

  return (
    <button className="button-7" onClick={handleSignOut}>
      Signout
    </button>
  );
}

export default SignOutButton;