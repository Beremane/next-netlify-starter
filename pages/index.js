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
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
         <div id="odin-chatbot"></div>
      <script>
        window.project_id = "Wx5xi6sprMXQKxh2cWIQ";
        window.frame_type = "window";
      </script>
      <script
        src="https://app.getodin.ai/loader.min.js"
        project_id="Wx5xi6sprMXQKxh2cWIQ"
        frame_type="window"
        defer
      ></script>
      </main>

      <Footer />
    </div>
  )
}
