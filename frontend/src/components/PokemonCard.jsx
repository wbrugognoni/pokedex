import { Link } from "react-router-dom";
import "../styles/PokemonCard.css";

export const PokemonCard = ({ pokemon }) => {
  return (
    <Link className="link-style" to={`pokemon/${pokemon.id}`}>
      <div className="pokemon-card">
        <img
          src={pokemon.sprites.front_default}
          className="card-img-top"
          alt=""
        />
        <div className="pokemon-card-body">
          <h5 className="card-title">
            id: {pokemon.id} ~ {pokemon.name}{" "}
          </h5>

            <p className="pokemon-list-group-item">
              Height: {pokemon.height}, Weight: {pokemon.weight}
            </p>
            <p className="pokemon-list-group-item">
              {pokemon.types.map((type) => (
              <>{type.type.name}   </>
              ))}
            </p>
        </div>
      </div>
    </Link>
  );
};
