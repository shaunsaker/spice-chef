import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spice Chef</title>
        <meta name="description" content="Spice Recipes ♥" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Spice Chef</h1>
      </main>
    </div>
  );
}
