import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./context/Context.jsx";
import "./App.css";
import HomeView from "./views/HomeView.jsx";
import SignInView from "./views/SignInView.jsx";
import SignUpView from "./views/SignUpView.jsx";
import MoviesView from "./views/MoviesView.jsx";
import GenreView from "./views/GenreView.jsx";
import DetailView from "./views/DetailView.jsx";


function App() {
  return (
    <StoreProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/signin" element={<SignInView />} />
          <Route path="/signup" element={<SignUpView />} />
          <Route path="/movies" element={<MoviesView />}>
            <Route path="genre/:genre_id" element={<GenreView />} />
            <Route path="details/:id" element={<DetailView />} />
          </Route>
        </Routes>
      </Router>
    </StoreProvider>
  );
}

export default App;
