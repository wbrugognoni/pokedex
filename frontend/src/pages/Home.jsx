import { FilterDropdown } from "../components/FilterDropdown";
import { PokemonList } from "../components/PokemonList";
import "../styles/Home.css";

export const Home = () => {
  return (
    <>
      <div className="container">
        <header className="logo-container">
          <img
            src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png"
            alt=""
          />
        </header>
        <FilterDropdown />
        <PokemonList />
      </div>
    </>
  );
};
