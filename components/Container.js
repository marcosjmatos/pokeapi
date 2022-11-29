import Nav from "./navigation";
import Head from "next/head";
import Link from "next/link";

const Container = (props) => {
  return (
    <div>
      <div>
        <Head>
          <title>Next.js Project</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/flatly/bootstrap.min.css"
            integrity="sha384-qF/QmIAj5ZaYFAeQcrQ6bfVMAh4zZlrGwTPY7T/M+iTTLJqJBJjwwnsE5Y0mV7QK"
            crossOrigin="anonymous"/>
        </Head>
      </div>
      <Nav />
      <div className="container p-4">{props.children}</div>
    </div>
  );
};

export default Container;
