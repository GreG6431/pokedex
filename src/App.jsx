import React, { useState } from "react";
import PokemonCard from "./components/PokemonCard";
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

// function App() {
//   return (
//     <div>
//       <PokemonCard pokemon={pokemonList[0]} />
//     </div>
//   );
// }

// export default App;

function App() {
  const [currentPokemonIndex, setCurrentPokemonIndex] = useState(0);

  const goToPreviousPokemon = () => {
    setCurrentPokemonIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : pokemonList.length - 1
    );
  };

  const goToNextPokemon = () => {
    setCurrentPokemonIndex((prevIndex) =>
      prevIndex < pokemonList.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div>
      <PokemonCard pokemon={pokemonList[currentPokemonIndex]} />
      <button onClick={goToPreviousPokemon}>Précédent</button>
      <button onClick={goToNextPokemon}>Suivant</button>
    </div>
  );
}

export default App;
