import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import '/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}

export default MyApp
