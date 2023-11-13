// function PokemonCard(props) {
//   let imagePokemon;

//   if (props.pokemon.imgSrc) {
//     imagePokemon = <img src={props.pokemon.imgSrc} />;
//   } else {
//     imagePokemon = <p>???</p>;
//   }

//   return (
//     <figure>
//       {imagePokemon}
//       <figcaption>{props.pokemon.name}</figcaption>
//     </figure>
//   );
// }

// export default PokemonCard;

// import React from 'react';
import PropTypes from "prop-types";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="pokemon-card">
      <img src={pokemon.imgSrc} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

PokemonCard.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
  }).isRequired,
};

export default PokemonCard;
