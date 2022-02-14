import { Login } from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';


function App() {
  const user = true
  return (
    <BrowserRouter>
      <Header />
      <Route path='/' exact>{user ? <Home /> : <Register />}</Route>
      <Route path='/login' component={Login} />
      <Route path='/register' ><Register /></Route>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
