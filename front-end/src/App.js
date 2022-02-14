import { Login } from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'


function App() {
  return (
    <div className="App">
      <Header />
      <Register />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
