import Navbar from "./components/Navbar";
import {Switch, BrowserRouter ,Route} from 'react-router-dom'
import './style/global.css'

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Switch>
         <Route path="/"/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
