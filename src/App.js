import Routes from "./routes";
import GlobalStyles from './styles/global.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const  App=()=> {
  
  return (
    <>
        <GlobalStyles/>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />
        
        <Routes />

    </>
  );
}

export default App;
