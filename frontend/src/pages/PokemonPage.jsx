import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/PokemonPage.css";
import { BackButton } from "../components/BackButton";

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
    setLoading(false);
  };

  useEffect(() => {
    getPokemonSpecies(id);
  }, []);

  return (
    <div className="container">
      <div className="container-pokemon-page">
        {loading ? (
          "Loading"
        ) : (
          <>
            <div className="card">
              <div className="container-pokemon-page-btn">
                <BackButton />
              </div>
              <div className="container-pokemon-page-img">
                <img
                  src={pokemonById.sprites.other.dream_world.front_default}
                  className="img-pokemon-page"
                  alt="..."
                />
              </div>

              <div className="card-body-pokemon-page">
                <h2 className="pokemon-page-title">{pokemonById.name}</h2>

                <h4>Statistics</h4>
                <div className="stats-container">
                  <div className="stats-container-one">
                    <h5 className="stat-container">
                      {pokemonById.stats[0].stat.name}:{" "}
                      {pokemonById.stats[0].base_stat}
                    </h5>
                    <h5 className="stat-container">
                      {pokemonById.stats[1].stat.name}:{" "}
                      {pokemonById.stats[1].base_stat}
                    </h5>
                    <h5 className="stat-container">
                      {pokemonById.stats[2].stat.name}:{" "}
                      {pokemonById.stats[2].base_stat}
                    </h5>
                  </div>
                  <div className="stats-container-two">
                    <h5 className="stat-container">
                      {pokemonById.stats[3].stat.name}:{" "}
                      {pokemonById.stats[3].base_stat}
                    </h5>
                    <h5 className="stat-container">
                      {pokemonById.stats[4].stat.name}:{" "}
                      {pokemonById.stats[4].base_stat}
                    </h5>
                    <h5 className="stat-container">
                      {pokemonById.stats[5].stat.name}:{" "}
                      {pokemonById.stats[5].base_stat}
                    </h5>
                  </div>
                </div>

                <h4>Type</h4>
                <div className="types-container">
                  {pokemonById.types.map((type) => (
                    <>
                      <div className="type-container">{type.type.name} </div>
                    </>
                  ))}
                </div>

                <h4>Abilities</h4>
                <div className="abilities-container">
                  {pokemonById.abilities.map((ability) => (
                    <>
                      <div className="ability-container">
                        {ability.ability.name}
                      </div>
                    </>
                  ))}
                </div>

                <h4>Evolutions</h4>
                <br></br>
                <div className="evolutions-container">
                  <div className="card-pokemon-evolution">
                    {evolutionChain[0]}
                  </div>
                  <div className="card-pokemon-evolution">
                    {evolutionChain[1]}
                  </div>
                  <div className="card-pokemon-evolution">
                    {evolutionChain[2]}
                  </div>
                </div>

                <br></br>
                <h5>This character is present in the following games:</h5>
                <div className="game-indices-container">
                  {pokemonById.game_indices.map((game) => (
                    <>
                      <div className="game-container">{game.version.name}</div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
