import react from 'react'
import Head from 'next/head'
import Chatbot from "../components/Chatbot"

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Form Chatbot Example</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
        Form Chatbot Example
        </h1>

        <p className="description">
        This is an example of implementing <a href="https://github.com/LucasBassetti/react-simple-chatbot" target="_blank">react-simple-chatbot</a> with Next.js, I took this page from my portfolio project and saved it here for future use in other projects.
        </p>

        <Chatbot />
      </main>

      <footer>
        <a
          href="https://maicon-esteves.tk"
          target="_blank"
        >
          Powered by
          <img src="/img/maicon.png" alt="Maicon" className="logo" />
          Maicon Esteves
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 60px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          border-radius:50%;
          margin: 0px 10px;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          color:black;
        }

        a {
          color: blue;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          width: 60rem;
          font-size: 1.5rem;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .logo {
          height: 2em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
