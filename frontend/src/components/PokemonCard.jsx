import { Link } from "react-router-dom";

export const PokemonCard = ({ pokemon }) => {
  return (
    <Link to={`pokemon/${pokemon.id}`}>
      <div className="card" >
        <img
          src={pokemon.sprites.front_default}
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">id: {pokemon.id} ~ {pokemon.name} </h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Height: {pokemon.height}, Weight: {pokemon.weight}</li>
          <li className="list-group-item">{pokemon.types.map(type=>(
            <span key={type.type.name}>{type.type.name} </span>
          ))}</li>
        </ul>
      </div>
    </Link>
  );
};
