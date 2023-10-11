const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",

    },
];





function PokemonCard() {
    const pokemon = pokemonList[1];

    let imagePokemon;

    if (pokemon.imgSrc) {
        imagePokemon = <img src={pokemon.imgSrc} />

    } else {
        imagePokemon = <p>???</p>

    }


    return <figure>
        {imagePokemon}

        <figcaption>
            {pokemon.name}
        </figcaption>
    </figure>;
}
export default PokemonCard;

