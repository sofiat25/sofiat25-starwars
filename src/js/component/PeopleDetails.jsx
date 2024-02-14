import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const PeopleDetails = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const character = store.character.find((char) => char.uid === params.id);

  
  useEffect(() => {
    actions.charDescription(props.character.url);
  }, []);

  
  if (!character) {
    return (
      <div
        className={`modal ${props.isOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: props.isOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Character Not Found</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={props.onClose}
              ></button>
            </div>
            <div className="modal-body">
              <p>The requested character does not exist.</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`modal ${props.isOpen ? "show" : ""}`}
      tabIndex="-1"
      style={{ display: props.isOpen ? "block" : "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{props.character.name}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={props.onClose}
            ></button>
          </div>
          <div className="modal-body">
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${props.character.uid}.jpg`}
              className="image-detalle col6 col-md-6"
              alt="..."
            />
            <div className="text-description">
              <p><span className="prop-detail">Gender:</span>  <span className="value-detail">{character.gender}</span> </p>
              <p><span className="prop-detail">Hair color:</span>  <span className="value-detail">{character.hair_color}</span> </p>
              <p><span className="prop-detail">Birth year:</span>  <span className="value-detail">{character.birth_year}</span> </p>
              <p><span className="prop-detail">Eye color:</span>  <span className="value-detail">{character.eye_color}</span> </p>
              <p><span className="prop-detail">Mass:</span>  <span className="value-detail">{character.mass}</span> </p>
              <p><span className="prop-detail">Skin color:</span>  <span className="value-detail">{character.skin_color}</span> </p>
              <p><span className="prop-detail">Created:</span>  <span className="value-detail">{character.created}</span> </p>
            </div>
          </div>
          <div className="modal-footer">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt
              quaerat dolorem corrupti incidunt eligendi, tenetur consectetur!
              Eaque asperiores maiores totam quaerat? Blanditiis eius
              necessitatibus beatae quam, ipsum quasi officiis vel! Rem saepe
              consectetur quam minima facere totam praesentium, illum ea ratione
              odit vel temporibus ad eos, quasi exercitationem. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleDetails;