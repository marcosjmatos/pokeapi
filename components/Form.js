import { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState("");
  console.log(input);

  const searchPokemon = (e) => {
    e.preventDefault;
    setInput(e.target.value);
  };

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
    </form>
  );
};
export default Form;
