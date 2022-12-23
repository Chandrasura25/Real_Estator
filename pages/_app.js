import Router from 'next/router'
import 'font-awesome/css/font-awesome.css'
import Head from 'next/head';
import Layout from '../components/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import NProgress from 'nprogress';

function MyApp({ Component, pageProps }) {
    return(
      <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
      </>
    )
}
export default MyApp