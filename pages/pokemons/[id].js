import { useRouter } from "next/router";
import Container from "../../components/Container";

const CardInfo = ({ pokemon }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center">
              <img
                src={pokemon.images.small}
                alt={pokemon.name}
                key={pokemon.id}
              />
            </div>
            <div className="card-body">
              <h3>{pokemon.name}</h3>
              <p>{pokemon.types}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

CardInfo.getInitialProps = async (ctx) => {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards/${ctx.query.id}`);
  const resJSON = await res.json();
  return {pokemon : resJSON.data};
};

export default CardInfo;
