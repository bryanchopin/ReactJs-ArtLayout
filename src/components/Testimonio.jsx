import React from "react";
import '../styles/Testimonio.css';

function Testimonio(props){
  return (
    <div className="testimonioContainer">
      <img
        className="imagen-testimonio"
        src= {props.image}
        alt="Imagen 1"
      />

      <div className="text-container">
        <p className="nombre-testimonio"> {props.name} in {props.country} </p>
        <p className="cargo-testimonio"> {props.job} from {props.company} </p>
        <p className="texto-testimonio">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima magni, ipsum corrupti aperiam blanditiis. Maxime nemo fugiat expedita pariatur, aliquid accusamus soluta vero possimus voluptatem tenetur suscipit labore ratione?</p>
      </div>
    </div>

  );
}

export default Testimonio;