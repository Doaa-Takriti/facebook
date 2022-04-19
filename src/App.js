import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (

    <BrowserRouter>


      <Switch>
        <Route exact path="/" element={<Home />}>
          <Home />
        </Route>
        <Route exact path="/Login" element={<Login />}>
          <Login />
        </Route>

        <Route exact path="/Profile" element={<Profile />}>
          <Profile />
        </Route>

        <Route exact path="/Register" element={<Register />}>
          <Register />
        </Route>
      </Switch>

    </BrowserRouter>



  )
    ;
}

export default App;
