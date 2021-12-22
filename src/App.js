import logo from './logo.svg';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage'
import CryptoDetails from './components/CryptoDetails'
import Exchanges from './components/Exchanges'
import News from './components/News'
import Layout from 'antd/lib/layout/layout';
import Cryptocurrencies from './components/Cryptocurrencies';

function App() {
  return (
   <div className='app'>
 {/* <div className='navbar'>
 <Navbar></Navbar>
 </div> */}




<BrowserRouter>

<div className='navbar'>
 <Navbar></Navbar>
 </div> 

 <div className='main'>
 <Layout>
  <Routes>
 
    <Route path="/" element={<Homepage></Homepage>} />
    <Route path="/exchanges" element={<Exchanges></Exchanges>} />
    <Route path="/crypto/:coinId" element={<CryptoDetails></CryptoDetails>} />
    <Route path="/news" element={<News></News>} />
    <Route path="/cryptocurrencies" element={<Cryptocurrencies></Cryptocurrencies>}></Route>
  
    </Routes>
    </Layout>

</div>

</BrowserRouter>

   </div>
  );
}

export default App;
