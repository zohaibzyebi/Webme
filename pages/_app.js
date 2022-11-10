import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Footer from '../components/Home/Footer';
import Navbar from "../components/Home/Navbar";
import '../styles/globals.css';
import '../styles/services.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <div className='relative pt-10'>
        <Component {...pageProps} />
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default MyApp
