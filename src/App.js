import "./styles.css";
import { NavLink, Switch, Route } from "react-router-dom";
import SingleUserPage from "./pages/SingleUserPage";
import UsersPage from "./pages/UsersPage";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1> Routing & Fetching </h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/users">Users</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/users/:userId">
            <SingleUserPage />
          </Route>
          <Route path="/users">
            <UsersPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <h2>No match </h2>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2> I'm home! </h2>
    </div>
  );
}
