import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const PokemonPage = () => {
  const { id } = useParams();
  const [pokemonById, setPokemonById] = useState({});
  const [loading, setLoading] = useState(true);

  const getPokemonById = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
      method: "GET",
    });
    const data = await response.json();

    setPokemonById(data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemonById(id);
  }, []);

  const [evolutionChain, setEvolutionChain] = useState([]);

  const getPokemonSpecies = async (id) => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${id}`,
      { method: "GET" }
    );
    const data = await response.json();
    const evolutionChainUrl = data.evolution_chain.url;

    const response1 = await fetch(evolutionChainUrl, {
      method: "GET",
    });
    const data1 = await response1.json();
    try {
      setEvolutionChain([
        data1.chain.species.name,
        data1.chain.evolves_to[0].species.name,
        data1.chain.evolves_to[0].evolves_to[0].species.name,
      ]);
    } catch (error) {
      setEvolutionChain([
        data1.chain.species.name,
        data1.chain.evolves_to[0].species.name,
      ]);
    }
  };

  useEffect(() => {
    getPokemonSpecies(id);
  }, []);

  return (
    <div className="container">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="card mb-3">
            <img
              src={pokemonById.sprites.other.dream_world.front_default}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{pokemonById.name}</h5>
              <div className="stats-container">
                <div className="stat-container">
                  <span>{pokemonById.stats[0].stat.name}</span>
                  <span>{pokemonById.stats[0].base_stat}</span>
                </div>
                <div className="stat-container">
                  <span>{pokemonById.stats[1].stat.name}</span>
                  <span>{pokemonById.stats[1].base_stat}</span>
                </div>
                <div className="stat-container">
                  <span>{pokemonById.stats[2].stat.name}</span>
                  <span>{pokemonById.stats[2].base_stat}</span>
                </div>
                <div className="stat-container">
                  <span>{pokemonById.stats[3].stat.name}</span>
                  <span>{pokemonById.stats[3].base_stat}</span>
                </div>
                <div className="stat-container">
                  <span>{pokemonById.stats[4].stat.name}</span>
                  <span>{pokemonById.stats[4].base_stat}</span>
                </div>
                <div className="stat-container">
                  <span>{pokemonById.stats[5].stat.name}</span>
                  <span>{pokemonById.stats[5].base_stat}</span>
                </div>
              </div>

              <div className="types-container">
                {pokemonById.types.map((type) => type.type.name)}
              </div>

              <div className="abilities-container">
                {pokemonById.abilities.map((ability) => ability.ability.name)}
              </div>
              <div className="evolutions-container">
                <div className="card">
                  <img src="" className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{evolutionChain[0]}</h5>
                    <h5 className="card-title">{evolutionChain[1]}</h5>
                    <h5 className="card-title">{evolutionChain[2]}</h5>
                  </div>
                </div>
              </div>
            </div>

            <div className="game-indices-container">
            {pokemonById.game_indices.map((game) => game.version.name)}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
