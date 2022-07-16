const MAX_DEX_ID = 493;
// get a random number from the pokedex(MAX_DEX_ID) stored in pokedexNumber
// then make sure its not equal to notThisOne
// if it is equal rerandomize the pokedexNumber
export const getRandomPokemon: (notThisOne?: number) => any = (notThisOne?: number) => {
  const pokedexNumber = Math.floor(Math.random() * MAX_DEX_ID) + 1;

  if (pokedexNumber !== notThisOne) return pokedexNumber;
  return getRandomPokemon(notThisOne);
};

export const getOptionsForVote = () => {
  const firstId = getRandomPokemon();
  const secondId = getRandomPokemon(firstId); // send firstId as a parameter to make sure it is not compared to same pokemon

  return [firstId, secondId];
};
