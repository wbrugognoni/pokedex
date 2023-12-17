import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { PokemonCard } from "./PokemonCard";
import "../styles/PokemonList.css";

export const PokemonList = () => {
  const { pokemons, getMorePokemons, filteredPokemons } =
    useContext(PokemonContext);

  return (
    <>
      {filteredPokemons.length ? (
        <div className="container-cards">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      ) : (
        <InfiniteScroll
          dataLength={pokemons.length}
          next={getMorePokemons}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="container-cards">
            {pokemons.map((pokemon) => (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};
