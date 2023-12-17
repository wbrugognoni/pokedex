import { PokemonContext } from "./PokemonContext";
import { useState, useEffect } from "react";

export const PokemonProvider = ({ children }) => {
  //El siguiente tramo de codigo corresponde a la conexion con la API para traer de a 20 pokemons
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const getPokemons = async (limit = 20) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    const promises = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });
    const results = await Promise.all(promises);
    setPokemons([...pokemons, ...results]);
  };
  useEffect(() => {
    getPokemons();
  }, [offset]);

  //El siguiente tramo de codigo corresponde a la carga de mas pokemons para el infinite scroll
  const getMorePokemons = () => {
    setOffset(offset + 20);
  };

  //El siguiente tramo de codigo corresponde a la conexion con la API para traer TODOS los pokemons
  const [allPokemons, setAllPokemons] = useState([]);
  const getAllPokemons = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
      {
        method: "GET",
      }
    );
    const data = await response.json();
    const promises = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });
    const results = await Promise.all(promises);
    setAllPokemons([...allPokemons, ...results]);
  };
  useEffect(() => {
    getAllPokemons();
  }, []);

  //El siguiente tramo de codigo corresponde al filtrado de pokemons segun los checkbox por tipo
  const [typeChecked, setTypeChecked] = useState({
    Normal: false,
    Fighting: false,
    Flying: false,
    Poison: false,
    Ground: false,
    Rock: false,
    Bug: false,
    Ghost: false,
    Steel: false,
    Fire: false,
    Water: false,
    Grass: false,
    Electric: false,
    Psychic: false,
    Ice: false,
    Dragon: false,
    Dark: false,
    Fairy: false,
    Unknown: false,
    Shadow: false,
  });
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const handleCheckbox = (e) => {
    setTypeChecked({
      ...typeChecked,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredData = allPokemons.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilteredPokemons([...filteredPokemons, ...filteredData]);
    } else {
      const filteredData = filteredPokemons.filter(
        (pokemon) =>
          !pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilteredPokemons([...filteredData]);
    }
  };

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        getMorePokemons,
        handleCheckbox,
        filteredPokemons,
        allPokemons,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
