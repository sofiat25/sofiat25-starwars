import React, { useEffect, useContext, useState } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";
import PeopleDetails from "./PeopleDetails.jsx";

const CardsPeople = (props) => {
  const { store, actions } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const charStore = store.character.filter(
    (char) => char.name === props.character.name
  );

  const charUidStore = store.character.filter(
    (char) => char.uid === props.character.uid
  );

 

  return (
    <div className="cards">
      <div className="card" key={props.index}>
        <img
          src={`https://starwars-visualguide.com/assets/img/characters/${
            props.index + 1
          }.jpg`}
          className="card-img-top"
          alt={props.character.uid}
        />
        <div className="card-body">
          <h5 className="card-title">{props.character.name}</h5>
          {charStore[0] ? (
            <div>
              <p className="card-text">
                <span className="prop-span">Gender:</span> <span className='value-prop'>{charStore[0].gender}</span>
              </p>
              <p className="card-text">
                <span className="prop-span">Hair color:</span> <span className='value-prop'>{charStore[0].hair_color}</span>
              </p>
              <p className="card-text">
                <span className="prop-span">Birth Year:</span> <span className='value-prop'>{charStore[0].birth_year}</span>
              </p>
            </div>
          ) : (
            ""
          )}
          <div className="d-flex justify-content-center">
            <Link
              to={"/people-details/" + props.character.uid}
              className="more"
              data={charUidStore} 
            >
              <button className="btn btn-more" onClick={openModal}>
                Learn More
              </button>
            </Link>
            <button
              onClick={() => {
                actions.addCharacters(props.character);
              }}
              className="btn btn-fav btn-more"
            >
              &#10031;
            </button>
          </div>
        </div>
      </div>
      <PeopleDetails
        character={props.character}
        isOpen={isModalOpen}
        onClose={closeModal}
        charStore= {charStore[0]}
      />
    </div>
  );
};

export default CardsPeople;