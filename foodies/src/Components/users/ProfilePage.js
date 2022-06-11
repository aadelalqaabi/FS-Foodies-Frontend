import authStore from '../../stores/authStore';

function ProfilePage() {
  return (
      <div>
            <h1>{authStore.user.username}</h1>
            <h1>{authStore.user.recipes}</h1>
      </div>
  );
}

export default ProfilePage;