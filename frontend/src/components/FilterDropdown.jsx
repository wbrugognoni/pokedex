import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import '../styles/FilterDropdown.css'

export const FilterDropdown = () => {
  const { handleCheckbox } = useContext(PokemonContext);

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
            Filter by type:  
        </button>
        <ul className="dropdown-menu">
          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="normal">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="normal"
                name="normal"
              />
              Normal
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="fighting">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="fighting"
                name="fighting"
              />
              Fighting
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="flying">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="flying"
                name="flying"
              />
              Flying
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="poison">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="poison"
                name="poison"
              />
              Poison
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="ground">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="ground"
                name="ground"
              />
              Ground
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="rock">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="rock"
                name="rock"
              />
              Rock
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="bug">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="bug"
                name="bug"
              />
              Bug
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="ghost">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="ghost"
                name="ghost"
              />
              Ghost
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="steel">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="steel"
                name="steel"
              />
              Steel
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="fire">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="fire"
                name="fire"
              />
              Fire
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="water">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="water"
                name="water"
              />
              Water
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="grass">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="grass"
                name="grass"
              />
              Grass
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="electric">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="electric"
                name="electric"
              />
              Electric
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="psychic">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="psychic"
                name="psychic"
              />
              Psychic
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="ice">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="ice"
                name="ice"
              />
              Ice
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="dragon">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="dragon"
                name="dragon"
              />
              Dragon
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="dark">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="dark"
                name="dark"
              />
              Dark
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="fairy">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="fairy"
                name="fairy"
              />
              Fairy
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="unknown">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="unknown"
                name="unknown"
              />
              Unknown
            </label>
          </li>

          <li className="pokemon-list-group-item">
            <label className="form-check-label" htmlFor="shadow">
              <input
                className="form-check-input me-1"
                type="checkbox"
                onChange={handleCheckbox}
                id="shadow"
                name="shadow"
              />
              Shadow
            </label>
          </li>
        </ul>
      </div>
    </>
  );
};
