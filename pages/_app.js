import './/styles/globals.css'
import Head from 'next/head'

// own css files hereim


import Layout from './components/layout'
function MyApp({ Component, pageProps }) {
  return ( 
    
  <Layout>
    <Head>
 
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
  rel="stylesheet"
/>

<link
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
  rel="stylesheet"
/>

<link
  href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
  rel="stylesheet"
/>

    </Head>
    <Component {...pageProps}/> 
    
    </Layout>
  )

}

export default MyApp
