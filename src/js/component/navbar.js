import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <div>
      <nav className="navbar navbar-expand-md  navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              className="logo-nav"
              src="https://i.pinimg.com/474x/a2/a2/27/a2a227afa5d96e329085b989357b1129--star-wars-action-figures-episode-iv.jpg"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="btn-group dropstart">
            <button
              type="button"
              className="btn btn-favorite dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              FAVORITES
              <span className="fav-num">{store.favorites.length}</span>
            </button>
            <ul className="dropdown-menu  mx-auto">
              {store.favorites.map((favorite, index) => {
                return (
                  <li key={index}>
                    <h2>
                      {favorite.name}{" "}
                      <box-icon
                        type="solid"
                        className="bx-lg bx-tada-hover me-4"
                        color="yellow"
                        name="trash-alt"
                        onClick={(event) => {
                          event.stopPropagation();
                          actions.deleteFavorite(favorite);
                        }}
                      ></box-icon>
                    </h2>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};