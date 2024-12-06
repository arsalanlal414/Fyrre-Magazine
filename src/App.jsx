import AppRoute from './routes';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <>
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
    <ToastContainer
      position="top-right" 
      autoClose={3000} 
      hideProgressBar={false} 
      closeOnClick 
      pauseOnHover 
      theme="dark" 
    />
    </>
  );
};

export default App;
