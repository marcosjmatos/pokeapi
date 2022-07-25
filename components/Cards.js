import Router from "next/router";

const Cards = (props) => {
  return (
    <ul className="list-group">
      {props.cards.map((card) => (
        <li className="list-group-item list-group-item-action justify-content-around aling-items-center" key={card.id} onClick={e=> Router.push('/pokemons/[id]', `/pokemons/${card.id}`) }>
          <div>
            <h5> {card.name} </h5>
            <p> {card.types} </p>
          </div>
          <img src={card.images.small} alt={card.name}  />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
