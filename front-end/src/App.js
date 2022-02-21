import { Login } from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import CreateMeeting from './Pages/AddMeeting/CreateMeeting';
import EditMeeting from './Pages/EditMeeting/EditMeeting'


function App() {
  const user = true
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>{user ? <Home /> : <Register />}</Route>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/addmeeting' component={CreateMeeting} />
        <Route path='/meeting/:id' component={EditMeeting} />
        <Route path='*' component={Error} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
