const POGOProtos = require('..');

const nbPokemon = Object.keys(POGOProtos.Enums.PokemonId).length;
console.log(`We have ${nbPokemon} pokemonds in protos.`);
