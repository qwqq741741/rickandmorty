import Head from "next/head";
import CharacterFeed from "@/components/CharacterFeed";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Rick and Morty Characters</title>
      </Head>

      <main>
        <CharacterFeed />
      </main>

      <style jsx global>
        {`
          body {
            font-family: Arial, Helvetica, sans-serif;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
