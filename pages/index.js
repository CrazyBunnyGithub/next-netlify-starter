import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="me88 Online Casino - CrazyBunny.io" />
        <p className="description: Malaysia Trusted Online Casino - Visit crazybunny.io or me88game.com Now! Explore the best online gambling games including live casino, sports betting, slot games, and more!">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
