import { FilterDropdown } from "../components/FilterDropdown";
import { PokemonList } from "../components/PokemonList";
import "../styles/Home.css";

export const Home = () => {
  return (
    <>
      <div className="container">
        <FilterDropdown />
        <PokemonList />
      </div>
    </>
  );
};
