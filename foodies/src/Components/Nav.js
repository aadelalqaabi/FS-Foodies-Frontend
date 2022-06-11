import React from "react";
import { NavLink } from "react-router-dom";
// import logo from "/Users/bodouralrashidi/Desktop/FullStack/MiniProject/FS-Library/fs-library/src/ArchiveLogo-removebg-preview.png";
import SignUpModal from "./users/SignUpModal";
import SignInModal from "./users/SignInModal";
import SignOutButton from "./users/SignOutButton";
import ProfilePage from "./users/ProfilePage";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

function Nav() {
  return (
    <nav>
      <div className="nav">
        <div>
          <NavLink className="navitem" to="/Home">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink className="navitem" to="/CategoriesList">
            Categories
          </NavLink>
        </div>
        <div className="navitem-right">
          <div>
            {authStore.user ? (
              <>
                <NavLink className="navitem " to="/user-page">
                  <img src="" />
                  {authStore.user.username}'s Profile
                </NavLink>

                <NavLink className="navitem " to="/recipe">
                  Add Recipe
                </NavLink>

                <SignOutButton />
              </>
            ) : (
              // if user is null(not logged in) add signup/signin buttons ==> if user is not null(logged in) remove signup/signin buttons
              <>
                <NavLink className="navitem " to="/signUp">
                  Sign Up
                </NavLink>

                <NavLink className="navitem " to="/signIn">
                  Sign In
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default observer(Nav);
