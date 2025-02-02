import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Rider Website</title>
        <meta name="description" content="A website for riders" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">Rider Website</h1>
      </header>

      <main className="flex-grow p-4">
        {children}
      </main>

      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2023 Rider Website. All rights reserved.</p>
      </footer>
    </div>
  );
}