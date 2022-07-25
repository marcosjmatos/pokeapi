import Container from "../components/Container";
import Head from "next/head";
import Cards from "../components/Cards";
import Form from "../components/Form";
import { useState } from "react";

const Index = (props) => {
  // console.log(name);
  const [name, setName] = useState("");

  const addName = (name) => {
    setName(name.toLowerCase().trim());
  };

  return (
    <div>
      <Head>
        <title>Next.js Project - Home</title>
      </Head>

      <Container>
        <h1>POKEMON</h1>
        <>
          <Form sendInput={addName} />
          <div>
            <Cards cards={props.cards} />
          </div>
        </>
      </Container>
    </div>
  );
};
Index.getInitialProps = async (ctx) => {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards/`, {
    headers: {
      "X-Api-Key": "ddc44a25-06a6-4454-b51b-d921efe293e3",
    },
  });
  const resJSON = await res.json();
  return { cards: resJSON.data };
};
export default Index;
