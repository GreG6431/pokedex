/*const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",

    },
];*/



/*function PokemonCard(props) {
    console.log(props)*/

function PokemonCard({ pokemon }) {
    console.log(pokemon);

    return <div>
        <img src={pokemon.imgSrc} />
        <h1>{pokemon.name}</h1>
    </div>
}





export default PokemonCard;

