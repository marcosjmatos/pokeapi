import { useState } from "react";
import Cards from "./Cards";

const Form = (props) => {
  const [input, setInput] = useState("");
  console.log(input);

  async function searchPokemon(e) {
    e.preventDefault();
    props.sendName(e.target.value);
    if (!input || !isNaN(input)) {
      return;
    } else {
      const res = await fetch(`https://api.pokemontcg.io/v2/cards/${"xy1-1"}`, {
        headers: {
          "X-Api-Key": "ddc44a25-06a6-4454-b51b-d921efe293e3",
        },
      });
      const resJSON = await res.json();
      return { cards: resJSON.data };
    }
  }

  return (
    <form onSubmit={searchPokemon}>
      <div className="input-group w-50">
        <input
          className="form-control"
          type="text"
          name="name"
          placeholder="Pokemon name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="btn btn-success" type="submit">
          Search
        </button>
      </div>
      {/* <Cards cards={props.cards}/> */}
    </form>
  );
};
export default Form;
