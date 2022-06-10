import authStore from '../../stores/authStore';

function SignOutButton() {
  return (
    <button className="button-7" onClick={authStore.signOut}>
      Signout
    </button>
  );
}

export default SignOutButton;