import React from "react";
import { NavLink } from "react-router-dom";
import SignOutButton from "./users/SignOutButton";
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
          <div className="userbuttons">
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
