import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  console.log(Component, pageProps);
  return <Component {...pageProps} />
}

export default MyApp
